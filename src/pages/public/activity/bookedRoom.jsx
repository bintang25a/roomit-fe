import { Link, useOutletContext } from "react-router-dom";
import { fullDate } from "../../../_utilities/playDate";
import ActivityHeader from "../../../components/public/ActivityHeader";
import aula from "/aula.jpg";
import { getImageUrl } from "../../../_services/rooms";

export default function BookedRoom() {
   const { user } = useOutletContext();
   const loans = user?.loans?.filter((loan) => loan?.progres == "accepted");

   return (
      <main className="booked-room">
         <ActivityHeader head={"Booked Room"} desc={"Check your booked room"} />
         <div className="main">
            {loans?.length > 0 ? (
               loans.map((loan) => (
                  <Link to={`/booking/show/${loan?.slug}`} className="list">
                     <h1>{loan?.room?.nama}</h1>
                     <img
                        src={getImageUrl(loan?.room?.gambar)}
                        alt={loan?.room?.nama}
                     />
                     <h2>
                        <span>Status:</span> {loan?.progres}
                     </h2>
                     <h2>
                        <span>Booking date:</span>{" "}
                        {fullDate(loan?.tanggal_pengajuan)}
                     </h2>
                  </Link>
               ))
            ) : (
               <div className="list">
                  <h1>Nothing approve</h1>
                  <img src={aula} />
                  <h2>
                     <span>Status:</span> Nothing ...
                  </h2>
                  <h2>
                     <span>Booking date:</span> Nothing until now
                  </h2>
               </div>
            )}
         </div>
      </main>
   );
}
