import aula from "/aula.jpg";
import { Link } from "react-router-dom";
import { TbDoor } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function ShowBooking() {
   return (
      <main className="booking show">
         <div className="header">
            <h1>Request Room</h1>
            <h2>Check your approval status</h2>
         </div>
         <div className="main">
            <div className="left-content">
               <img src={aula} alt="" />
            </div>
            <div className="right-content">
               <table>
                  <tbody>
                     <tr>
                        <td>Nomor Peminjaman</td>
                        <td>:</td>
                        <td>INF-123</td>
                     </tr>
                     <tr>
                        <td>Nama Ruangan</td>
                        <td>:</td>
                        <td>Al Biruni</td>
                     </tr>
                     <tr>
                        <td>Nama Peminjam</td>
                        <td>:</td>
                        <td>Bintanggg</td>
                     </tr>
                     <tr>
                        <td>Nama Peminjaman</td>
                        <td>:</td>
                        <td>Informatika</td>
                     </tr>
                     <tr>
                        <td>Tanggal Pengajuan</td>
                        <td>:</td>
                        <td>25 Desember 2025</td>
                     </tr>
                     <tr>
                        <td>Tanggal Pemakaian</td>
                        <td>:</td>
                        <td>30 Desember 2025</td>
                     </tr>
                     <tr>
                        <td>Waktu Pemakaian</td>
                        <td>:</td>
                        <td>10.00 - 17.00</td>
                     </tr>
                     <tr>
                        <td>Keperluan</td>
                        <td>:</td>
                        <td>Urusan informatiak</td>
                     </tr>
                     <tr>
                        <td>Status</td>
                        <td>:</td>
                        <td>
                           <span className="accepted">Approve</span>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </main>
   );
}
