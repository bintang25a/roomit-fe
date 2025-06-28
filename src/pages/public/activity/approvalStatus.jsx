import { Link } from "react-router-dom";
import ActivityHeader from "../../../components/public/ActivityHeader";

export default function ApprovalStatus() {
   return (
      <main className="approval-status">
         <ActivityHeader
            head={"Approvel Status"}
            desc={"Check your approval status"}
         />
         <div className="main">
            <Link to={"/booking/show"} className="list">
               <h1>Aula Djoeanda</h1>
               <h2>
                  <span>Pengajuan:</span> 23 Juni 2025 | <span>Status:</span>{" "}
                  Accepted
               </h2>
            </Link>
            <Link to={"/booking/show"} className="list">
               <h1>Aula Djoeanda</h1>
               <h2>
                  <span>Pengajuan:</span> 23 Juni 2025 | <span>Status:</span>{" "}
                  Accepted
               </h2>
            </Link>
            <Link to={"/booking/show"} className="list">
               <h1>Aula Djoeanda</h1>
               <h2>
                  <span>Pengajuan:</span> 23 Juni 2025 | <span>Status:</span>{" "}
                  Accepted
               </h2>
            </Link>
            <Link to={"/booking/show"} className="list">
               <h1>Aula Djoeanda</h1>
               <h2>
                  <span>Pengajuan:</span> 23 Juni 2025 | <span>Status:</span>{" "}
                  Accepted
               </h2>
            </Link>
            <Link to={"/booking/show"} className="list">
               <h1>Aula Djoeanda</h1>
               <h2>
                  <span>Pengajuan:</span> 23 Juni 2025 | <span>Status:</span>{" "}
                  Accepted
               </h2>
            </Link>
            <Link to={"/booking/show"} className="list">
               <h1>Aula Djoeanda</h1>
               <h2>
                  <span>Pengajuan:</span> 23 Juni 2025 | <span>Status:</span>{" "}
                  Accepted
               </h2>
            </Link>
         </div>
      </main>
   );
}
