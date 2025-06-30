import { useState, useRef, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { MdDelete, MdEdit, MdClose, MdSave, MdPostAdd } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import {
   formatDate,
   fullDateLocale,
   numberDateLocale,
} from "../../../_utilities/playDate";
import { createLoan, deleteLoan, updateLoan } from "../../../_services/loans";

export default function Loans({ isAddSetting = false }) {
   // ambil data dari parent
   const { users, rooms, loans, loading, confirm, fetchData } =
      useOutletContext();

   // fungsi tampilan table: search, pagination, page
   const [searchTerm, setSearchTerm] = useState("");
   const [currentPage, setCurrentPage] = useState(1);
   const filteredLoans = loans?.filter(
      (loan) =>
         loan?.nomor_peminjaman
            .toLowerCase()
            .includes(searchTerm?.toLowerCase()) ||
         loan?.kode_ruangan.toLowerCase().includes(searchTerm?.toLowerCase()) ||
         loan?.room?.nama.toLowerCase().includes(searchTerm?.toLowerCase()) ||
         loan?.id_peminjam.toLowerCase().includes(searchTerm?.toLowerCase()) ||
         loan?.user?.nama.toLowerCase().includes(searchTerm?.toLowerCase()) ||
         loan?.nama_pj.toLowerCase().includes(searchTerm?.toLowerCase()) ||
         loan?.keperluan.toLowerCase().includes(searchTerm?.toLowerCase()) ||
         loan?.progres.toLowerCase().includes(searchTerm?.toLowerCase()) ||
         fullDateLocale(loan?.tanggal_pengajuan).includes(
            searchTerm?.toLowerCase()
         ) ||
         fullDateLocale(loan?.tanggal_pemakaian).includes(
            searchTerm?.toLowerCase()
         )
   );
   const handleSearchTerm = (search) => {
      setSearchTerm(search);
      setCurrentPage(1);
   };
   const itemsPerPage = 8;
   const scrollRef = useRef(null);
   const totalPages = Math.ceil(filteredLoans.length / itemsPerPage);
   const paginatedLoans = filteredLoans.slice(
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
   const scroll = (direction) => {
      const offset = direction === "left" ? -2000 : 2000;
      scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
   };

   // fungsi action: modal, edit, delete
   const [modalShow, setModalShow] = useState(false);
   const [isEdit, setIsEdit] = useState(false);
   const [isAdd, setIsAdd] = useState(false);
   const [kode, setKode] = useState("");
   const defaultForm = {
      nomor_peminjaman: "",
      kode_ruangan: "",
      id_peminjam: "",
      nama_pj: "",
      tanggal_pengajuan: "",
      tanggal_pemakaian: "",
      waktu_mulai: "",
      waktu_selesai: "",
      keperluan: "",
      progres: "",
   };
   const [formData, setFormData] = useState(defaultForm);
   const [hasChange, setHasChange] = useState(false);
   const [foreignChage, setForeignChange] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      if (isAddSetting) {
         setModalShow(true);
         setIsAdd(true);
      }
   }, [isAddSetting]);

   const handleEdit = (nomor_peminjaman) => {
      const loan = loans?.find(
         (loan) => loan?.nomor_peminjaman == nomor_peminjaman
      );
      setFormData({
         ...formData,
         ...loan,
      });

      setIsEdit(true);
      setModalShow(true);
      setHasChange(false);
   };
   const handleOpen = (nomor_peminjaman) => {
      if (nomor_peminjaman) {
         const loan = loans?.find(
            (loan) => loan?.nomor_peminjaman === nomor_peminjaman
         );
         setKode(loan.nomor_peminjaman);
         setFormData({
            ...formData,
            ...loan,
         });
      } else {
         setIsAdd(true);
      }

      setForeignChange(false);
      setModalShow(true);
      setHasChange(false);
   };
   const handleClose = () => {
      setForeignChange(false);
      setIsEdit(false);
      setIsAdd(false);
      setModalShow(false);
      setFormData(defaultForm);
      setHasChange(false);
      setKode("");

      if (isAddSetting) {
         navigate("/admin/loans", { replace: true });
      }
   };
   const handleChange = (e) => {
      const { name, value } = e.target;
      setHasChange(true);

      if (name === "kode_ruangan" || name === "id_peminjam") {
         setForeignChange(true);
      }

      setFormData({
         ...formData,
         [name]: value,
      });
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      loading(true);

      let nomor;
      if (foreignChage || isAdd) {
         nomor = `${formData.kode_ruangan}-${
            formData.id_peminjam
         }-${numberDateLocale()}`;
      } else {
         nomor = formData.nomor_peminjaman;
      }

      try {
         if (isEdit) {
            await updateLoan(kode, { ...formData, nomor_peminjaman: nomor });
         } else {
            await createLoan({ ...formData, nomor_peminjaman: nomor });
         }

         fetchData();
         setForeignChange(false);
         setIsEdit(false);
         setIsAdd(false);
         loading(false);
         setKode("");
         await confirm("Update loan successfully", true);

         if (isAddSetting) {
            navigate("/admin/loans", { replace: true });
         }
      } catch (error) {
         console.log(error);
         loading(false);
         confirm("Update loan failed", false);
      }
   };
   const handleDelete = async (nomor_peminjaman) => {
      try {
         const result = await confirm("Are you sure?", undefined);

         if (result) {
            loading(true);
            await deleteLoan(nomor_peminjaman);
            fetchData();
            loading(false);
            setModalShow(false);
            confirm("Delete loan successfully", true);
         }
      } catch (error) {
         console.log(error);
         loading(false);
         confirm("Delete loan failed", false);
      }
   };

   return (
      <main className="loans pages">
         <div className="navigation">
            <h1>Roomit Loans</h1>
            <div className="container">
               <button
                  onClick={() => handleOpen()}
                  type="button"
                  className="btn"
                  to={"/admin/loans/create"}
               >
                  <MdPostAdd className="icon" />
               </button>
               <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => handleSearchTerm(e.target.value)}
                  placeholder="Search room here"
               />
            </div>
         </div>
         <div className="container" ref={scrollRef}>
            <table>
               <thead>
                  <tr>
                     <th>Nomor</th>
                     <th>Nama Ruangan</th>
                     <th>Nama Peminjam</th>
                     <th>Nama Penanggun Jawab</th>
                     <th>Tanggal Pengajuan</th>
                     <th>Tanggal Pemakaian</th>
                     <th>Waktu Mulai</th>
                     <th>Waktu Selesai</th>
                     <th>Keperluan</th>
                     <th>Progres</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {paginatedLoans.length > 0
                     ? paginatedLoans?.map((loan) => (
                          <tr
                             key={loan?.nomor_peminjaman}
                             title="Double click me"
                             onDoubleClick={() =>
                                handleOpen(loan?.nomor_peminjaman)
                             }
                          >
                             <td>{loan?.nomor_peminjaman}</td>
                             <td>{loan?.room?.nama}</td>
                             <td>{loan?.user?.nama}</td>
                             <td>{loan?.nama_pj}</td>
                             <td>{fullDateLocale(loan?.tanggal_pengajuan)}</td>
                             <td>{fullDateLocale(loan?.tanggal_pemakaian)}</td>
                             <td>{loan?.waktu_mulai}</td>
                             <td>{loan?.waktu_selesai}</td>
                             <td>{loan?.keperluan}</td>
                             <td>{loan?.progres}</td>
                             <td className="last">
                                <div className="button">
                                   <button
                                      className="btn"
                                      onClick={() =>
                                         handleEdit(loan?.nomor_peminjaman)
                                      }
                                   >
                                      <MdEdit className="icon" />
                                   </button>
                                   <button
                                      className="btn"
                                      onClick={() =>
                                         handleDelete(loan?.nomor_peminjaman)
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
            <div className="middle-section">
               <button className="btn" onClick={() => scroll("left")}>
                  <FaChevronLeft className="icon" />
               </button>
               <h1>scroll</h1>
               <button className="btn" onClick={() => scroll("right")}>
                  <FaChevronRight className="icon" />
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
                  <div className="container loans">
                     <h1>Data rooms</h1>
                     <div className="column">
                        <div className="input">
                           <label htmlFor="nomor_peminjaman">
                              Nomor Peminjaman
                           </label>
                           <input
                              type="text"
                              name="nomor_peminjaman"
                              id="nomor_peminjaman"
                              required
                              value={formData?.nomor_peminjaman}
                              onChange={handleChange}
                              disabled
                           />
                        </div>
                        <div className="input">
                           <label htmlFor="kode_ruangan">Nama Ruangan</label>
                           <select
                              type="text"
                              name="kode_ruangan"
                              id="kode_ruangan"
                              required
                              value={formData?.kode_ruangan}
                              onChange={handleChange}
                              disabled={!isEdit && !isAdd}
                           >
                              {rooms?.map((room) => (
                                 <option
                                    key={room.kode_ruangan}
                                    value={room.kode_ruangan}
                                 >
                                    {room.nama}
                                 </option>
                              ))}
                           </select>
                        </div>
                        <div className="input">
                           <label htmlFor="id_peminjam">NIM/NIDN/NIP</label>
                           <select
                              type="text"
                              name="id_peminjam"
                              id="id_peminjam"
                              required
                              value={formData?.id_peminjam}
                              onChange={handleChange}
                              disabled={!isEdit && !isAdd}
                           >
                              {users?.map((user) => (
                                 <option key={user.uid} value={user.uid}>
                                    {user.nama}
                                 </option>
                              ))}
                           </select>
                        </div>
                        <div className="input">
                           <label htmlFor="nama_pj">
                              Nama Penanggung Jawab
                           </label>
                           <input
                              type="text"
                              name="nama_pj"
                              id="nama_pj"
                              required
                              value={formData?.nama_pj}
                              onChange={handleChange}
                              disabled={!isEdit && !isAdd}
                           />
                        </div>
                        <div className="input">
                           <label htmlFor="tanggal_pengajuan">
                              Tanggal Pengajuan
                           </label>
                           <input
                              type="date"
                              name="tanggal_pengajuan"
                              id="tanggal_pengajuan"
                              required
                              value={formatDate(formData?.tanggal_pengajuan)}
                              onChange={handleChange}
                              disabled={!isEdit && !isAdd}
                           />
                        </div>
                     </div>
                     <div className="column">
                        <div className="input">
                           <label htmlFor="tanggal_pemakaian">
                              Tanggal Pemakaian
                           </label>
                           <input
                              type="date"
                              name="tanggal_pemakaian"
                              id="tanggal_pemakaian"
                              required
                              value={formatDate(formData?.tanggal_pemakaian)}
                              onChange={handleChange}
                              disabled={!isEdit && !isAdd}
                           />
                        </div>
                        <div className="input">
                           <label htmlFor="waktu_mulai">Waktu Mulai</label>
                           <input
                              type="time"
                              name="waktu_mulai"
                              id="waktu_mulai"
                              required
                              value={formData?.waktu_mulai}
                              onChange={handleChange}
                              disabled={!isEdit && !isAdd}
                           />
                        </div>
                        <div className="input">
                           <label htmlFor="waktu_selesai">Waktu Selesai</label>
                           <input
                              type="time"
                              name="waktu_selesai"
                              id="waktu_selesai"
                              required
                              value={formData?.waktu_selesai}
                              onChange={handleChange}
                              disabled={!isEdit && !isAdd}
                           />
                        </div>
                        <div className="input">
                           <label htmlFor="keperluan">Keperluan</label>
                           <input
                              type="text"
                              name="keperluan"
                              id="keperluan"
                              required
                              value={formData?.keperluan}
                              onChange={handleChange}
                              disabled={!isEdit && !isAdd}
                           />
                        </div>
                        <div className="input">
                           <label htmlFor="progres">Status</label>
                           <select
                              type="text"
                              name="progres"
                              id="progres"
                              required
                              value={formData?.progres}
                              onChange={handleChange}
                              disabled={!isEdit && !isAdd}
                           >
                              <option value="">Status</option>
                              <option value="onprogres">On Progress</option>
                              <option value="accepted">Accepted</option>
                              <option value="rejected">Rejected</option>
                           </select>
                        </div>
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
                                 handleDelete(formData?.nomor_peminjaman)
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
