import Calendar from "react-calendar";
import { Link, useOutletContext } from "react-router-dom";
import { MdPostAdd } from "react-icons/md";
import { fullDate, fullDateLocale } from "../../../_utilities/playDate";
import { useState } from "react";
import { getImageUrl } from "../../../_services/rooms";
import { updateLoan } from "../../../_services/loans";

export default function NeedsApproval() {
   const { loans, confirm, loading, fetchData } = useOutletContext();
   const [dateValue, setDateValue] = useState("");
   const [searchTerm, setSearchTerm] = useState("");

   const [detailLoan, setDetailLoan] = useState([]);
   const progresLoans = loans?.filter(
      (loan) =>
         loan?.progres == "onprogres" &&
         (loan?.user?.nama?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            loan?.room?.nama
               ?.toLowerCase()
               .includes(searchTerm.toLowerCase()) ||
            loan?.nama_pj?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            fullDate(loan?.tanggal_pemakaian) === fullDate(searchTerm) ||
            fullDate(loan?.tanggal_pengajuan) === fullDate(searchTerm))
   );
   const filterLoans = loans?.filter(
      (loan) =>
         fullDate(loan?.tanggal_pemakaian) === fullDate(dateValue) &&
         loan?.progres === "accepted"
   );
   const handleDetail = (id) => {
      const loan = loans?.find((loan) => loan?.nomor_peminjaman === id);
      setDetailLoan(loan);
   };

   const handleSubmit = async (id, isAccept) => {
      try {
         if (isAccept) {
            const result = await confirm("Accept this approval?", undefined);

            if (result) {
               loading(true);
               await updateLoan(id, { progres: "accepted" });
               fetchData();
               setDetailLoan({});
               loading(false);
               confirm("Update data successfully", true);
            }
         } else {
            const result = await confirm("Reject this approval?", undefined);

            if (result) {
               loading(true);
               updateLoan(id, { progres: "rejected" });
               fetchData();
               setDetailLoan({});
               loading(false);
               confirm("Update data successfully", true);
            }
         }
      } catch (error) {
         console.log(error);
         loading(false);
         confirm("Failed update data", false);
      }
   };

   return (
      <main className="pages need-approval">
         <div className="navigation">
            <h1>Approvel Request</h1>
            <div className="container">
               <Link className="btn" to={"/admin/loans/make-loan"}>
                  <MdPostAdd className="icon" />
               </Link>
               <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search room here"
               />
            </div>
         </div>
         <div className="top-content">
            <Calendar
               className={"calender"}
               onChange={setDateValue}
               value={dateValue}
            />
            <div className="container">
               {progresLoans ? (
                  progresLoans?.map((loan) => (
                     <button
                        onClick={() => handleDetail(loan.nomor_peminjaman)}
                        key={loan.nomor_peminjaman}
                        className="list"
                     >
                        <h1>{loan?.room?.nama}</h1>
                        <h1>{loan?.nama_pj}</h1>
                        <h1>{fullDate(loan?.tanggal_pemakaian)}</h1>
                     </button>
                  ))
               ) : (
                  <div className="list">
                     <h1>No request loans</h1>
                     <h1>Nothing ...</h1>
                     <h1>{fullDate()}</h1>
                  </div>
               )}
            </div>
         </div>
         <div className="bottom-content">
            <div className="container">
               <h1>{fullDate(dateValue)}</h1>
               {filterLoans.length > 0 ? (
                  filterLoans?.map((loan) => (
                     <button
                        onClick={() => handleDetail(loan.nomor_peminjaman)}
                        type="button"
                        className="list"
                     >
                        <h1>{loan?.nama_pj}</h1>
                     </button>
                  ))
               ) : (
                  <div className="list">
                     <h1>Nothing</h1>
                  </div>
               )}
            </div>
            <div className="detail">
               {Object.keys(detailLoan).length > 0 ? (
                  <>
                     <img
                        src={getImageUrl(detailLoan?.room?.gambar)}
                        alt={detailLoan?.room?.nama}
                     />
                     <table>
                        <tbody>
                           <tr>
                              <td>Nomor</td>
                              <td>:</td>
                              <td>{detailLoan?.nomor_peminjaman}</td>
                           </tr>
                           <tr>
                              <td>Nama Ruangan</td>
                              <td>:</td>
                              <td>{detailLoan?.room?.nama}</td>
                           </tr>
                           <tr>
                              <td>Nama Peminjam</td>
                              <td> : </td>
                              <td>
                                 {detailLoan?.user?.nama} -{" "}
                                 {detailLoan?.nama_pj}
                              </td>
                           </tr>
                           <tr>
                              <td>Tanggal Pengajuan</td>
                              <td> : </td>
                              <td>
                                 {fullDateLocale(detailLoan?.tanggal_pengajuan)}
                              </td>
                           </tr>
                           <tr>
                              <td>Tanggal Pemakaian</td>
                              <td> : </td>
                              <td>
                                 {fullDateLocale(detailLoan?.tanggal_pemakaian)}
                              </td>
                           </tr>
                           <tr>
                              <td>Waktu</td>
                              <td> : </td>
                              <td>
                                 {detailLoan?.waktu_mulai} -{" "}
                                 {detailLoan?.waktu_selesai}
                              </td>
                           </tr>
                           <tr>
                              <td>Keperluan</td>
                              <td> : </td>
                              <td>{detailLoan?.keperluan}</td>
                           </tr>
                           <tr>
                              <td>Status</td>
                              <td> : </td>
                              <td>{detailLoan?.progres}</td>
                           </tr>
                        </tbody>
                     </table>
                     {detailLoan?.progres === "onprogres" ? (
                        <div className="button">
                           <button
                              onClick={() =>
                                 handleSubmit(
                                    detailLoan?.nomor_peminjaman,
                                    false
                                 )
                              }
                              className="btn danger"
                           >
                              Reject
                           </button>
                           <button
                              onClick={() =>
                                 handleSubmit(
                                    detailLoan?.nomor_peminjaman,
                                    true
                                 )
                              }
                              className="btn"
                           >
                              Accept
                           </button>
                        </div>
                     ) : null}
                  </>
               ) : (
                  "Click loan on the top or left"
               )}
            </div>
         </div>
      </main>
   );
}
