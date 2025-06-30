import { Link, useOutletContext } from "react-router-dom";
import { countdown, fullDate } from "../../../_utilities/playDate";
import ActivityHeader from "../../../components/public/ActivityHeader";

export default function Schedule() {
   const { user } = useOutletContext();
   const filteredLoans = user?.loans?.filter((loan) => {
      loan?.progres === "accepted" &&
         countdown(loan?.tanggal_pemakaian) !== "over";
   });

   return (
      <main className="schedule">
         <ActivityHeader head={"My schedule"} desc={"Check my schedule"} />
         <div className="main">
            <div className="room-list">
               <h1>Event list</h1>
               <div className="container">
                  {filteredLoans.length > 0 ? (
                     filteredLoans?.map((loan) => (
                        <Link
                           key={loan?.nomor_peminjaman}
                           to={`/booking/show/${loan?.slug}`}
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
