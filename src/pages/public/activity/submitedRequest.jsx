import { Link } from "react-router-dom";
import ActivityHeader from "../../../components/public/ActivityHeader";
import { useEffect, useState } from "react";
import { showMember } from "../../../_services/users";
import { fullDateLocale } from "../../../_utilities/playDate";

export default function SubmitedRequest() {
   const [user, setUser] = useState({});

   useEffect(() => {
      const fetchData = async () => {
         const localUser = JSON.parse(localStorage.getItem("user"));

         const [userData] = await Promise.all([showMember(localUser.slug)]);

         setUser(userData);
      };

      fetchData();
   }, []);

   return (
      <main className="submited-request">
         <ActivityHeader
            head={"Submited Request"}
            desc={"Check all your booked journey"}
         />
         <div className="main">
            {user?.loans?.map((loan) => (
               <Link
                  key={loan.nomor_peminjaman}
                  to={`/booking/show/${loan.slug}`}
                  className="list"
               >
                  <h1>{loan.room?.nama}</h1>
                  <h2>
                     <span>Tanggal peminjaman:</span>{" "}
                     {fullDateLocale(loan.tanggal_pemakaian)}
                  </h2>
               </Link>
            ))}
         </div>
      </main>
   );
}
