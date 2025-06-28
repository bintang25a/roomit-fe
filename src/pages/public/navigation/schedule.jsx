import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { fullDate } from "../../../_utilities/playDate";
import ActivityHeader from "../../../components/public/ActivityHeader";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Schedule() {
   const [dateValue, setDateValue] = useState("");

   const { loans } = useOutletContext();
   const filteredLoan = loans?.filter((loan) => {
      if (!dateValue && loan.progres === "") return true;
      return (
         fullDate(loan.tanggal_pemakaian) === fullDate(dateValue) &&
         loan.progres === ""
      );
   });

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
                  {loans ? (
                     filteredLoan.map((loan) => (
                        <Link
                           key={loan.nomor_peminjaman}
                           to={`/booking/show/${loan.slug}`}
                           className="list"
                        >
                           <h1>{loan?.room?.nama}</h1>
                           <h2>
                              <span>Dipakai:</span>{" "}
                              {fullDate(loan?.tanggal_pemakaian)}
                           </h2>
                        </Link>
                     ))
                  ) : (
                     <div className="list">
                        <h1>No Event right now</h1>
                        <h2>Make your own event</h2>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </main>
   );
}
