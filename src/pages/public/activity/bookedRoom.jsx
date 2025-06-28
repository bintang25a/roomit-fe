import { Link } from "react-router-dom";
import aula from "/aula.jpg";
import ActivityHeader from "../../../components/public/ActivityHeader";

export default function BookedRoom() {
   return (
      <main className="booked-room">
         <ActivityHeader head={"Booked Room"} desc={"Check your booked room"} />
         <div className="main">
            <Link to={"/booking/show"} className="list">
               <h1>Aula Djoeanda</h1>
               <img src={aula} alt="" />
               <h2>
                  <span>Status:</span> Accepted
               </h2>
               <h2>
                  <span>Booking date:</span> 23 Juni 2025
               </h2>
            </Link>
         </div>
      </main>
   );
}
