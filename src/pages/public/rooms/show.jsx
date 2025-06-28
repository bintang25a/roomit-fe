import { Link, useOutletContext, useParams } from "react-router-dom";
import ActivityHeader from "../../../components/public/ActivityHeader";
import aula from "/aula.jpg";

export default function ShowRoom() {
   const { rooms } = useOutletContext();
   const { slug } = useParams();
   const room = rooms?.find((room) => room.slug === slug);

   return (
      <main className="room-show">
         <ActivityHeader head={"Aula Djoeanda"} desc={"Gedung A Lantai 2"} />
         <div className="main">
            <div className="image">
               <img src={aula} alt="" />
            </div>
            <div className="detail">
               <table>
                  <tbody>
                     <tr>
                        <td>Nama</td>
                        <td>:</td>
                        <td>{room?.nama}</td>
                     </tr>
                     <tr>
                        <td>Kapasitas</td>
                        <td>:</td>
                        <td>{room?.kapasitas} Orang</td>
                     </tr>
                     <tr>
                        <td>Gedung</td>
                        <td>:</td>
                        <td>Gedung {room?.gedung}</td>
                     </tr>
                     <tr>
                        <td>Ketersediaan</td>
                        <td>:</td>
                        <td>Cek kalender event</td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <div className="action">
               <Link to={"/rooms"} className="btn">
                  Cancel
               </Link>
               <Link to={`/booking/${room?.slug}`} className="btn">
                  Book
               </Link>
            </div>
         </div>
      </main>
   );
}
