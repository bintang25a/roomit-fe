import aula from "/aula.jpg";
import { Link } from "react-router-dom";
import { TbDoor } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function Booking() {
   return (
      <main className="booking">
         <div className="header">
            <h1>Request Room</h1>
            <h2>Check your approval status</h2>
         </div>
         <div className="action">
            <Link className="btn" to={"/rooms"}>
               <div className="icon">
                  <TbDoor />{" "}
               </div>
               Look other room
            </Link>
            <Link className="btn" to={"/booking/form"}>
               <div className="icon">
                  <HiOutlineDocumentText />
               </div>{" "}
               Book other room
            </Link>
         </div>
         <div className="main">
            <Link to={"/booking/1"} className="card">
               <div className="detail">
                  <h1>Aula Djoenda</h1>
                  <img src={aula} alt="Aula" />
               </div>
               <div className="status">
                  <h2>
                     Status: <span className="onprogress">On progres</span>
                  </h2>
                  <h2>
                     Booking Date: <span>Juni, 23 2025</span>
                  </h2>
               </div>
            </Link>
            <Link to={"/booking/1"} className="card">
               <div className="detail">
                  <h1>Aula Djoenda</h1>
                  <img src={aula} alt="Aula" />
               </div>
               <div className="status">
                  <h2>
                     Status: <span className="onprogress">On progres</span>
                  </h2>
                  <h2>
                     Booking Date: <span>Juni, 23 2025</span>
                  </h2>
               </div>
            </Link>
            <Link to={"/booking/1"} className="card">
               <div className="detail">
                  <h1>Aula Djoenda</h1>
                  <img src={aula} alt="Aula" />
               </div>
               <div className="status">
                  <h2>
                     Status: <span className="onprogress">On progres</span>
                  </h2>
                  <h2>
                     Booking Date: <span>Juni, 23 2025</span>
                  </h2>
               </div>
            </Link>
            <Link to={"/booking/1"} className="card">
               <div className="detail">
                  <h1>Aula Djoenda</h1>
                  <img src={aula} alt="Aula" />
               </div>
               <div className="status">
                  <h2>
                     Status: <span className="onprogress">On progres</span>
                  </h2>
                  <h2>
                     Booking Date: <span>Juni, 23 2025</span>
                  </h2>
               </div>
            </Link>
         </div>
      </main>
   );
}
