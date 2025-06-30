import { Link, useOutletContext } from "react-router-dom";
import { fullDateLocale } from "../../../_utilities/playDate";
import ActivityHeader from "../../../components/public/ActivityHeader";

export default function SubmitedRequest() {
   const { user } = useOutletContext();

   return (
      <main className="submited-request">
         <ActivityHeader
            head={"Submited Request"}
            desc={"Check all your booked journey"}
         />
         <div className="main">
            {user?.loans?.map((loan) => (
               <Link
                  key={loan?.nomor_peminjaman}
                  to={`/booking/show/${loan?.slug}`}
                  className="list"
               >
                  <h1>{loan?.room?.nama}</h1>
                  <h2>
                     <span>Tanggal peminjaman:</span>{" "}
                     {fullDateLocale(loan?.tanggal_pemakaian)}
                  </h2>
               </Link>
            ))}
         </div>
      </main>
   );
}
