import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { countdown, fullDate } from "../../_utilities/playDate";
import Calendar from "react-calendar";
import "./index.css";

export default function Dashboard() {
   const [dateValue, setDateValue] = useState("");
   const [maxRow, setMaxRow] = useState(5);
   const { users, rooms, loans } = useOutletContext();
   const navigate = useNavigate();

   const acceptedLoans = loans?.filter(
      (loan) =>
         loan?.progres === "accepted" &&
         countdown(loan?.tanggal_pemakaian) != "over" &&
         (dateValue
            ? fullDate(dateValue) == fullDate(loan?.tanggal_pemakaian)
            : true)
   );

   const requestLoans = loans?.filter(
      (loan) => loan.progres !== "accepted" || loan.progres !== "rejected"
   );

   const handleMaxRow = () => {
      maxRow == 5 ? setMaxRow(loans.length) : setMaxRow(5);
   };

   return (
      <main className="dashboard">
         <div className="number-data">
            <h1>Number data</h1>
            <div className="left-content">
               <Calendar
                  className={"calender"}
                  onChange={setDateValue}
                  value={dateValue}
               />
            </div>
            <div className="right-content">
               <div className="container">
                  <div className="card">
                     <h2>Total users</h2>
                     <h1>{users.length}</h1>
                     <h3>user data</h3>
                  </div>
                  <div className="card">
                     <h2>Total rooms</h2>
                     <h1>{rooms.length}</h1>
                     <h3>Room data</h3>
                  </div>
                  <div className="card">
                     <h2>Request</h2>
                     <h1>{requestLoans?.length}</h1>
                     <h3>Need approve</h3>
                  </div>
                  <Link to={"/"} className="card">
                     <h2>Homepage</h2>
                     <h1>
                        <MdHome className="icon" />
                     </h1>
                     <h3>Go to homepage</h3>
                  </Link>
               </div>
            </div>
         </div>

         <div className="coming-event">
            <h1>Coming event</h1>
            <table className="coming-event">
               <thead>
                  <tr>
                     <th>Nama ruangan</th>
                     <th>Acara</th>
                     <th>Tanggal pemakaian</th>
                     <th>Hitung mundur</th>
                  </tr>
               </thead>
               <tbody>
                  {acceptedLoans.length > 0 ? (
                     acceptedLoans.slice(0, maxRow).map((loan) => (
                        <tr
                           key={loan?.nomor_peminjaman}
                           onDoubleClick={() =>
                              navigate(`/booking/show/${loan?.slug}`, {
                                 replace: true,
                              })
                           }
                           title="Double click to go"
                        >
                           <td>{loan?.room?.nama}</td>
                           <td>{loan?.nama_pj}</td>
                           <td>{fullDate(loan?.tanggal_pemakaian)}</td>
                           <td>{countdown(loan?.tanggal_pemakaian)}</td>
                        </tr>
                     ))
                  ) : (
                     <tr>
                        <td className="footer" colSpan={4}>
                           Tidak ada event
                        </td>
                     </tr>
                  )}
               </tbody>
               <tfoot>
                  <tr className="footer" onClick={handleMaxRow}>
                     <td colSpan={4}>View all coming event</td>
                  </tr>
               </tfoot>
            </table>
         </div>

         <div className="approve">
            <h1>Need approval</h1>
            <table className="approve">
               <thead>
                  <tr>
                     <th>Nama ruangan</th>
                     <th>Nama Peminjam</th>
                     <th>Tanggal pengajuan</th>
                     <th>Tanggal pemakaian</th>
                  </tr>
               </thead>
               <tbody>
                  {requestLoans?.length > 0 ? (
                     requestLoans?.slice(0, 5).map((loan) => (
                        <tr
                           key={loan?.nomor_peminjaman}
                           onDoubleClick={() =>
                              navigate(`/admin/booking/${loan?.slug}`, {
                                 replace: true,
                              })
                           }
                           title="Double click to go"
                        >
                           <td>{loan?.room?.nama}</td>
                           <td>{loan?.nama_pj}</td>
                           <td>{fullDate(loan?.tanggal_pengajuan)}</td>
                           <td>{fullDate(loan?.tanggal_pemakaian)}</td>
                        </tr>
                     ))
                  ) : (
                     <tr>
                        <td className="footer" colSpan={4}>
                           Tidak ada yang meminjam ruangan
                        </td>
                     </tr>
                  )}
               </tbody>
               <tfoot>
                  <tr
                     className="footer"
                     onClick={() =>
                        navigate("/admin/loans/approve", { replace: true })
                     }
                  >
                     <td colSpan={4}>View all approval request</td>
                  </tr>
               </tfoot>
            </table>
         </div>
      </main>
   );
}
