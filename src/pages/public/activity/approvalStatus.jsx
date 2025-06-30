import { Link, useOutletContext } from "react-router-dom";
import { fullDate, untilWeek } from "../../../_utilities/playDate";
import ActivityHeader from "../../../components/public/ActivityHeader";

export default function ApprovalStatus() {
   const { user } = useOutletContext();
   const loans = user?.loans?.filter((loan) =>
      untilWeek(loan?.tanggal_pengajuan)
   );

   return (
      <main className="approval-status">
         <ActivityHeader
            head={"Approvel Status"}
            desc={"Check your approval status"}
         />
         <div className="main">
            {loans ? (
               loans.map((loan) => (
                  <Link
                     key={loan?.nomor_peminjaman}
                     to={`/booking/show/${loan?.slug}`}
                     className="list"
                  >
                     <h1>{loan?.room?.nama}</h1>
                     <h2>
                        <span>Pengajuan:</span> {fullDate()} |{" "}
                        <span>Status:</span> {loan?.progres}
                     </h2>
                  </Link>
               ))
            ) : (
               <div className="list">
                  <h1>Tidak ada pengajuan</h1>
                  <h2>
                     <span>Pengajuan:</span> 7 hari terakhir |{" "}
                     <span>Status:</span> unknown
                  </h2>
               </div>
            )}
         </div>
      </main>
   );
}
