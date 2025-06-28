import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import aula from "/aula.jpg";
import ActivityHeader from "../../../components/public/ActivityHeader";
import { showLoan } from "../../../_services/loans";
import { fullDate } from "../../../_utilities/playDate";

export default function ShowBooking() {
   const [loan, setLoan] = useState({});
   const { slug } = useParams();

   useEffect(() => {
      const fetchData = async () => {
         const [loanData] = await Promise.all([showLoan(slug)]);
         setLoan(loanData);
      };

      fetchData();
   }, [slug]);

   return (
      <main className="room-show">
         <ActivityHeader
            head={loan?.room?.nama}
            desc={"Check detail booked room"}
         />
         <div className="main">
            <div className="image">
               <img src={aula} />
            </div>
            <div className="detail">
               <table>
                  <tbody>
                     <tr>
                        <td>Nomor Peminjaman</td>
                        <td>:</td>
                        <td>{loan?.nomor_peminjaman}</td>
                     </tr>
                     <tr>
                        <td>Nama Ruangan</td>
                        <td>:</td>
                        <td>{loan?.room?.nama}</td>
                     </tr>
                     <tr>
                        <td>Nama Peminjam</td>
                        <td>:</td>
                        <td>{loan?.user?.nama}</td>
                     </tr>
                     <tr>
                        <td>Nama Peminjaman</td>
                        <td>:</td>
                        <td>{loan?.nama_pj}</td>
                     </tr>
                     <tr>
                        <td>Tanggal Pengajuan</td>
                        <td>:</td>
                        <td>{fullDate(loan?.tanggal_pengajuan)}</td>
                     </tr>
                     <tr>
                        <td>Tanggal Pemakaian</td>
                        <td>:</td>
                        <td>{fullDate(loan?.tanggal_pemakaian)}</td>
                     </tr>
                     <tr>
                        <td>Waktu Pemakaian</td>
                        <td>:</td>
                        <td>
                           {loan?.waktu_mulai} - {loan?.waktu_selesai}
                        </td>
                     </tr>
                     <tr>
                        <td>Keperluan</td>
                        <td>:</td>
                        <td>{loan?.keperluan}</td>
                     </tr>
                     <tr>
                        <td>Status</td>
                        <td>:</td>
                        <td>
                           <span className={loan.progres}>{loan?.progres}</span>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </main>
   );
}
