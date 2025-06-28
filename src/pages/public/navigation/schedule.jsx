import { useState } from "react";
import { Link } from "react-router-dom";
import ActivityHeader from "../../../components/public/ActivityHeader";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Schedule() {
   const [value, setValue] = useState(new Date());

   return (
      <main className="schedule">
         <ActivityHeader head={"Rooms schedule"} desc={"Check all schedule"} />
         <div className="main">
            <div className="calender-container">
               <h1>Calender</h1>
               <Calendar
                  className={"calender"}
                  onChange={setValue}
                  value={value}
               />
               {/* <p>Tanggal yang dipilih: {value.toDateString()}</p> */}
            </div>
            <div className="room-list">
               <h1>Room list</h1>
               <div className="container">
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Dipakai:</span> 29 Juli 2025
                     </h2>
                  </Link>
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Dipakai:</span> 29 Juli 2025
                     </h2>
                  </Link>
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Dipakai:</span> 29 Juli 2025
                     </h2>
                  </Link>
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Dipakai:</span> 29 Juli 2025
                     </h2>
                  </Link>
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Dipakai:</span> 29 Juli 2025
                     </h2>
                  </Link>
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Dipakai:</span> 29 Juli 2025
                     </h2>
                  </Link>
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Dipakai:</span> 29 Juli 2025
                     </h2>
                  </Link>
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Dipakai:</span> 29 Juli 2025
                     </h2>
                  </Link>
               </div>
            </div>
         </div>
      </main>
   );
}
