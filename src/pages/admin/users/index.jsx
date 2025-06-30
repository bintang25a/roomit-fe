import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { MdDelete, MdEdit, MdClose, MdSave, MdPersonAdd } from "react-icons/md";
import { deleteMember, updateMember } from "../../../_services/users";

export default function Users() {
   // ambil data dari parent
   const { users, loading, confirm, fetchData } = useOutletContext();

   // fungsi tampilan table: search, pagination, page
   const [searchTerm, setSearchTerm] = useState("");
   const [currentPage, setCurrentPage] = useState(1);
   const filteredUsers = users?.filter(
      (user) =>
         user?.nama.toLowerCase().includes(searchTerm?.toLowerCase()) ||
         user?.email.toLowerCase().includes(searchTerm?.toLowerCase()) ||
         user?.uid.toLowerCase().includes(searchTerm?.toLowerCase()) ||
         user?.role.toLowerCase().includes(searchTerm?.toLowerCase()) ||
         user?.no_hp.toLowerCase().includes(searchTerm?.toLowerCase())
   );
   const handleSearchTerm = (search) => {
      setSearchTerm(search);
      setCurrentPage(1);
   };
   const itemsPerPage = 8;
   const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
   const paginatedUsers = filteredUsers.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
   );
   const handlePageClick = (pageNumber) => {
      setCurrentPage(pageNumber);
   };
   const handlePrevious = () => {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
   };
   const handleNext = () => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
   };

   // fungsi action: modal, edit, delete
   const [modalShow, setModalShow] = useState(false);
   const [isEdit, setIsEdit] = useState(false);
   const [uid, setUid] = useState("");
   const defaultForm = {
      nama: "",
      uid: "",
      email: "",
      no_hp: "",
      role: "",
      password: "",
   };
   const [formData, setFormData] = useState(defaultForm);
   const [hasChange, setHasChange] = useState(false);

   const handleEdit = (uid) => {
      const user = users?.find((user) => user?.uid == uid);
      setFormData({
         ...formData,
         ...user,
      });

      setIsEdit(true);
      setModalShow(true);
      setHasChange(false);
      setUid(user?.uid);
   };
   const handleOpen = (uid) => {
      const user = users?.find((user) => user?.uid === uid);
      setFormData({
         ...formData,
         ...user,
      });
      setModalShow(true);
      setHasChange(false);
      setUid(user?.uid);
   };
   const handleClose = () => {
      setIsEdit(false);
      setModalShow(false);
      setFormData(defaultForm);
      setHasChange(false);
      setUid("");
   };
   const handleChange = (e) => {
      const { name, value } = e.target;
      setHasChange(true);

      setFormData({
         ...formData,
         [name]: value,
      });
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      loading(true);
      const slug = users?.find(
         (user) => String(user.uid) === String(uid)
      )?.slug;

      try {
         await updateMember(slug, formData);
         fetchData();
         setIsEdit(false);
         loading(false);
         confirm("Update user successfully", true);
      } catch (error) {
         console.log(error);
         loading(false);
         confirm("Update user failed", false);
      }
   };
   const handleDelete = async (uid) => {
      try {
         const result = await confirm("Are you sure?", undefined);

         if (result) {
            loading(true);
            await deleteMember(uid);
            fetchData();
            loading(false);
            confirm("Delete user successfully", true);
         }
      } catch (error) {
         console.log(error);
         loading(false);
         confirm("Delete user failed", false);
      }
   };

   return (
      <main className="users pages">
         <div className="navigation">
            <h1>Roomit Users</h1>
            <div className="container">
               <a className="btn" href={"/register"} target="_blank">
                  <MdPersonAdd className="icon" />
               </a>
               <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => handleSearchTerm(e.target.value)}
                  placeholder="Search room here"
               />
            </div>
         </div>
         <div className="container">
            <table>
               <thead>
                  <tr>
                     <th>UID</th>
                     <th>Nama</th>
                     <th>Email</th>
                     <th>Nomor Telepon</th>
                     <th>Role</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {users
                     ? paginatedUsers?.map((user) => (
                          <tr
                             key={user?.uid}
                             title="Double click me"
                             onDoubleClick={() => handleOpen(user?.uid)}
                          >
                             <td>{user?.uid}</td>
                             <td>{user?.nama}</td>
                             <td>{user?.email}</td>
                             <td>{user?.no_hp}</td>
                             <td>{user?.role}</td>
                             <td className="last">
                                <div className="button">
                                   <button
                                      className="btn"
                                      onClick={() => handleEdit(user?.uid)}
                                   >
                                      <MdEdit className="icon" />
                                   </button>
                                   <button
                                      className="btn"
                                      onClick={() => handleDelete(user?.uid)}
                                   >
                                      <MdDelete className="icon" />
                                   </button>
                                </div>
                             </td>
                          </tr>
                       ))
                     : null}
               </tbody>
            </table>
         </div>
         <div className="pagination">
            <div className="left-section">
               <button
                  className={currentPage === 1 ? "disable btn" : "btn"}
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
               >
                  Previous
               </button>
               <button
                  className={currentPage === totalPages ? "btn disable" : "btn"}
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
               >
                  Next
               </button>
            </div>
            <div className="right-section">
               {Array.from({ length: totalPages }, (_, index) => (
                  <button
                     key={index + 1}
                     onClick={() => handlePageClick(index + 1)}
                     className={
                        currentPage === index + 1 ? "btn active" : "btn"
                     }
                     disabled={currentPage === index + 1}
                  >
                     {index + 1}
                  </button>
               ))}
            </div>
         </div>
         {modalShow ? (
            <div className="modals">
               <form onSubmit={handleSubmit}>
                  <div className="container">
                     <h1>Data users</h1>
                     <div className="input">
                        <label htmlFor="uid">NIM/NIDN/NIP</label>
                        <input
                           type="text"
                           name="uid"
                           id="uid"
                           required
                           value={formData?.uid}
                           onChange={handleChange}
                           disabled
                        />
                     </div>
                     <div className="input">
                        <label htmlFor="nama">Nama lengkap</label>
                        <input
                           type="text"
                           name="nama"
                           id="nama"
                           required
                           value={formData?.nama}
                           onChange={handleChange}
                           disabled={!isEdit}
                        />
                     </div>
                     <div className="input">
                        <label htmlFor="email">E-Mail</label>
                        <input
                           type="text"
                           name="email"
                           id="email"
                           required
                           value={formData?.email}
                           onChange={handleChange}
                           disabled={!isEdit}
                        />
                     </div>
                     <div className="input">
                        <label htmlFor="no_hp">Nomor telepon</label>
                        <input
                           type="text"
                           name="no_hp"
                           id="no_hp"
                           required
                           value={formData?.no_hp}
                           onChange={handleChange}
                           disabled={!isEdit}
                        />
                     </div>
                     <div className="input">
                        <label htmlFor="role">Status</label>
                        <select
                           type="text"
                           name="role"
                           id="role"
                           required
                           value={formData?.role}
                           onChange={handleChange}
                           disabled={!isEdit}
                        >
                           <option value="mahasiswa">Mahasiswa</option>
                           <option value="dosen">Dosen</option>
                           <option value="admin">Admin</option>
                        </select>
                     </div>
                     <div className="input">
                        <label htmlFor="password">Change Password</label>
                        <input
                           type="text"
                           name="password"
                           id="password"
                           value={formData?.password}
                           onChange={handleChange}
                           disabled={!isEdit}
                        />
                     </div>
                     <div className="button">
                        <button
                           className="btn"
                           type="button"
                           onClick={handleClose}
                        >
                           <MdClose className="icon" />
                        </button>
                        <div>
                           <button
                              className="btn"
                              type="button"
                              onClick={() => handleDelete(formData.uid)}
                           >
                              <MdDelete className="icon" />
                           </button>
                           {isEdit ? (
                              <button
                                 className={
                                    hasChange ? "btn save" : "btn disable save"
                                 }
                                 onDoubleClick={handleSubmit}
                                 disabled={!hasChange}
                              >
                                 <MdSave />
                              </button>
                           ) : (
                              <button
                                 className="btn edit"
                                 type="button"
                                 onClick={() => setIsEdit(true)}
                              >
                                 <MdEdit className="icon" />
                              </button>
                           )}
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         ) : null}
      </main>
   );
}
