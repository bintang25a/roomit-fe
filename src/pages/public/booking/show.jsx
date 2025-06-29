import { useOutletContext, useParams } from "react-router-dom";
import { fullDate } from "../../../_utilities/playDate";
import ActivityHeader from "../../../components/public/ActivityHeader";
import aula from "/aula.jpg";

export default function ShowBooking() {
   const { loans } = useOutletContext();
   const { slug } = useParams();
   const loan = loans.find((loan) => loan.slug === slug);

   return (
      <main className="booking-show">
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
                           <span className={loan?.progres}>
                              {loan?.progres}
                           </span>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </main>
   );
}
