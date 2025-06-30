import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { MdDelete, MdEdit, MdClose, MdSave, MdDomainAdd } from "react-icons/md";
import {
   createRoom,
   deleteRoom,
   getImageUrl,
   updateRoom,
} from "../../../_services/rooms";

export default function Rooms() {
   // ambil data dari parent
   const { rooms, loading, confirm, fetchData } = useOutletContext();

   // fungsi tampilan table: search, pagination, page
   const [searchTerm, setSearchTerm] = useState("");
   const [currentPage, setCurrentPage] = useState(1);
   const filteredRooms = rooms?.filter(
      (room) =>
         room?.nama.toLowerCase().includes(searchTerm?.toLowerCase()) ||
         room?.kode_ruangan.toLowerCase().includes(searchTerm?.toLowerCase()) ||
         room?.gedung.toLowerCase().includes(searchTerm?.toLowerCase()) ||
         Number(room?.kapasitas) >= Number(searchTerm)
   );
   const handleSearchTerm = (search) => {
      setSearchTerm(search);
      setCurrentPage(1);
   };
   const itemsPerPage = 8;
   const totalPages = Math.ceil(filteredRooms.length / itemsPerPage);
   const paginatedRooms = filteredRooms.slice(
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
   const [isAdd, setIsAdd] = useState(false);
   const defaultForm = {
      kode_ruangan: "",
      nama: "",
      kapasitas: 0,
      gedung: "",
      gambar: null,
      slug: "",
   };
   const [formData, setFormData] = useState(defaultForm);
   const [imagePreview, setImagePreview] = useState(null);
   const [hasChange, setHasChange] = useState(false);
   const [hasFile, setHasFile] = useState(false);

   const handleEdit = (kode_ruangan) => {
      const room = rooms?.find((room) => room?.kode_ruangan == kode_ruangan);
      setFormData({
         ...formData,
         ...room,
      });

      setIsEdit(true);
      setModalShow(true);
      setHasChange(false);
   };
   const handleOpen = (kode_ruangan) => {
      if (kode_ruangan) {
         const room = rooms?.find(
            (room) => room?.kode_ruangan === kode_ruangan
         );
         setFormData({
            ...formData,
            ...room,
         });
         if (room?.gambar !== null) {
            setHasFile(true);
         }
      } else {
         setIsAdd(true);
      }

      setModalShow(true);
      setHasChange(false);
   };
   const handleClose = () => {
      setIsEdit(false);
      setIsAdd(false);
      setModalShow(false);
      setFormData(defaultForm);
      setHasChange(false);
      setHasFile(false);
      setImagePreview(null);
   };
   const handleChange = (e) => {
      const { name, value, files } = e.target;
      setHasChange(true);

      if (name === "gambar") {
         const file = files[0];
         setHasFile(true);
         setImagePreview(URL.createObjectURL(file));

         setFormData({
            ...formData,
            gambar: file,
         });
      } else {
         setFormData({
            ...formData,
            [name]: value,
         });
      }
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      loading(true);
      console.log(formData);

      try {
         const payload = new FormData();
         for (const key in formData) {
            payload.append(key, formData[key]);
         }

         if (isEdit) {
            const kode = rooms.find(
               (room) => room?.kode_ruangan === formData?.kode_ruangan
            ).kode_ruangan;

            await updateRoom(kode, payload);
         } else {
            await createRoom(payload);
         }

         fetchData();
         setIsEdit(false);
         setIsAdd(false);
         setHasFile(false);
         setImagePreview(null);
         loading(false);
         confirm("Update room successfully", true);
      } catch (error) {
         console.log(error);
         loading(false);
         confirm("Update room failed", false);
      }
   };
   const handleDelete = async (kode_ruangan) => {
      try {
         const result = await confirm("Are you sure?", undefined);

         if (result) {
            loading(true);
            await deleteRoom(kode_ruangan);
            fetchData();
            loading(false);
            confirm("Delete room successfully", true);
         }
      } catch (error) {
         console.log(error);
         loading(false);
         confirm("Delete room failed", false);
      }
   };

   return (
      <main className="rooms pages">
         <div className="navigation">
            <h1>Roomit Rooms</h1>
            <div className="container">
               <button
                  type="button"
                  className="btn"
                  onClick={() => handleOpen()}
               >
                  <MdDomainAdd className="icon" />
               </button>
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
                     <th>Kode</th>
                     <th>Nama</th>
                     <th>Kapasitas</th>
                     <th>Gedung</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {paginatedRooms.length > 0
                     ? paginatedRooms?.map((room) => (
                          <tr
                             key={room?.kode_ruangan}
                             title="Double click me"
                             onDoubleClick={() =>
                                handleOpen(room?.kode_ruangan)
                             }
                          >
                             <td>{room?.kode_ruangan}</td>
                             <td>{room?.nama}</td>
                             <td>{room?.kapasitas} Orang</td>
                             <td>{room?.gedung}</td>
                             <td className="last">
                                <div className="button">
                                   <button
                                      className="btn"
                                      onClick={() =>
                                         handleEdit(room?.kode_ruangan)
                                      }
                                   >
                                      <MdEdit className="icon" />
                                   </button>
                                   <button
                                      className="btn"
                                      onClick={() =>
                                         handleDelete(room?.kode_ruangan)
                                      }
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
                     <h1>Data rooms</h1>
                     <div className="input gambar">
                        <label
                           htmlFor="gambar"
                           className={
                              (hasFile && !isEdit) || (hasFile && imagePreview)
                                 ? "has-file"
                                 : ""
                           }
                        >
                           {(hasFile && !isEdit) ||
                           (hasFile && imagePreview) ? (
                              <img
                                 src={
                                    imagePreview
                                       ? imagePreview
                                       : getImageUrl(formData?.gambar)
                                 }
                              />
                           ) : null}
                           {isEdit || isAdd
                              ? "Upload gambar"
                              : "Active edit first"}
                           <input
                              type="file"
                              accept="image/*"
                              name="gambar"
                              id="gambar"
                              onChange={handleChange}
                              disabled={!isEdit && !isAdd}
                           />
                        </label>
                     </div>
                     {isAdd ? (
                        <div className="input">
                           <label htmlFor="kode_ruangan">Kode ruangan</label>
                           <input
                              type="text"
                              name="kode_ruangan"
                              id="kode_ruangan"
                              required
                              value={formData?.kode_ruangan}
                              onChange={handleChange}
                              disabled={!isAdd}
                           />
                        </div>
                     ) : null}
                     <div className="input">
                        <label htmlFor="nama">Nama Ruangan</label>
                        <input
                           type="text"
                           name="nama"
                           id="nama"
                           required
                           value={formData?.nama}
                           onChange={handleChange}
                           disabled={!isEdit && !isAdd}
                        />
                     </div>
                     <div className="input">
                        <label htmlFor="kapasitas">Kapasitas</label>
                        <input
                           type="text"
                           name="kapasitas"
                           id="kapasitas"
                           required
                           value={formData?.kapasitas}
                           onChange={handleChange}
                           disabled={!isEdit && !isAdd}
                        />
                     </div>
                     <div className="input">
                        <label htmlFor="gedung">Gedung</label>
                        <input
                           type="text"
                           name="gedung"
                           id="gedung"
                           required
                           value={formData?.gedung}
                           onChange={handleChange}
                           disabled={!isEdit && !isAdd}
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
                              onClick={() =>
                                 handleDelete(formData.kode_ruangan)
                              }
                           >
                              <MdDelete className="icon" />
                           </button>
                           {isEdit || isAdd ? (
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
                                 className={
                                    isAdd ? "btn edit disable" : "btn edit"
                                 }
                                 type="button"
                                 onClick={() => setIsEdit(true)}
                                 disabled={isAdd}
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
