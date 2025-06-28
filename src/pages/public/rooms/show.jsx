import { Link } from "react-router-dom";
import ActivityHeader from "../../../components/public/ActivityHeader";
import aula from "/aula.jpg";

export default function ShowRoom() {
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
                        <td>Al Batani</td>
                     </tr>
                     <tr>
                        <td>Kapasitas</td>
                        <td>:</td>
                        <td>32 Orang</td>
                     </tr>
                     <tr>
                        <td>Gedung</td>
                        <td>:</td>
                        <td>Gedung A lantai 3</td>
                     </tr>
                     <tr>
                        <td>Ketersediaan</td>
                        <td>:</td>
                        <td>unknown</td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <div className="action">
               <Link to={"/rooms"} className="btn">
                  Cancel
               </Link>
               <Link to={"/booking"} className="btn">
                  Book
               </Link>
            </div>
         </div>
      </main>
   );
}
