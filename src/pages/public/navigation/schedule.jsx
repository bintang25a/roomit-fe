import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLoans } from "../../../_services/loans";
import ActivityHeader from "../../../components/public/ActivityHeader";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Schedule() {
   const [dateValue, setDateValue] = useState(new Date());
   const [loans, setLoans] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const [loansData] = await Promise.all([getLoans()]);
         setLoans(loansData);
      };

      fetchData();
   }, []);

   const [searchTerm, setSearchTerm] = useState("");
   const filteredRoom = loans?.filter(
      (room) =>
         room.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
         Number(room.kapasitas) >= Number(searchTerm)
   );

   const handleChange = (e) => {
      setSearchTerm(e.target.value);
   };

   return (
      <main className="schedule">
         <ActivityHeader head={"Rooms schedule"} desc={"Check all schedule"} />
         <div className="main">
            <div className="calender-container">
               <h1>Calender</h1>
               <Calendar
                  className={"calender"}
                  onChange={setDateValue}
                  value={dateValue}
               />
            </div>
            <div className="room-list">
               <h1>Event list</h1>
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
