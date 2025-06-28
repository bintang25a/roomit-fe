import { Link } from "react-router-dom";
import aula from "/aula.jpg";
import { useEffect, useState } from "react";
import { showMember } from "../../../_services/users";
import ActivityHeader from "../../../components/public/ActivityHeader";
import { fullDate } from "../../../_utilities/playDate";

export default function BookedRoom() {
   const [loans, setLoans] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const localUser = JSON.parse(localStorage.getItem("user"));

         const [userData] = await Promise.all([showMember(localUser.slug)]);
         const filteredLoans = userData.loans.filter(
            (loan) => loan.progres == "accepted"
         );

         setLoans(filteredLoans);
      };

      fetchData();
   }, []);

   return (
      <main className="booked-room">
         <ActivityHeader head={"Booked Room"} desc={"Check your booked room"} />
         <div className="main">
            {loans.length > 0 ? (
               loans.map((loan) => (
                  <Link to={`/booking/show/${loan?.slug}`} className="list">
                     <h1>{loan?.room?.nama}</h1>
                     <img src={aula} alt="" />
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
                  <img src={aula} alt="" />
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
