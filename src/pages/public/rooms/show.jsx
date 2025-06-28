import { Link, useParams } from "react-router-dom";
import ActivityHeader from "../../../components/public/ActivityHeader";
import aula from "/aula.jpg";
import { useEffect, useState } from "react";
import { showRoom } from "../../../_services/rooms";

export default function ShowRoom() {
   const [room, setRoom] = useState({});
   const { slug } = useParams();

   useEffect(() => {
      const fetchData = async () => {
         const [roomData] = await Promise.all([showRoom(slug)]);
         setRoom(roomData);
      };

      fetchData();
   }, [slug]);

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
                        <td>{room.nama}</td>
                     </tr>
                     <tr>
                        <td>Kapasitas</td>
                        <td>:</td>
                        <td>{room.kapasitas} Orang</td>
                     </tr>
                     <tr>
                        <td>Gedung</td>
                        <td>:</td>
                        <td>Gedung {room.gedung}</td>
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
               <Link to={`/booking/${room.slug}`} className="btn">
                  Book
               </Link>
            </div>
         </div>
      </main>
   );
}
