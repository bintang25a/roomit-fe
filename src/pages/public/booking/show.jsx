import aula from "/aula.jpg";
import ActivityHeader from "../../../components/public/ActivityHeader";

export default function ShowBooking() {
   return (
      <main className="room-show">
         <ActivityHeader head={"Al Batani"} desc={"Check detail booked room"} />
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
