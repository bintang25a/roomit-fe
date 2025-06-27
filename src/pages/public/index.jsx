import aula from "/aula.jpg";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { TbDoor } from "react-icons/tb";
import { MdChecklist } from "react-icons/md";
import { Link } from "react-router-dom";
import "./index.css";

export default function Home() {
   return (
      <main className="home">
         <div className="top-content">
            <div className="welcome">
               <h1>Hi, Bintang Al Fizar</h1>
               <h2>Good morning</h2>
            </div>
            <div className="date">
               Kamis, 26 Juni 2025
               <Link className="action btn" to={"/rooms"}>
                  Book a Room
               </Link>
            </div>
         </div>
         <div className="bottom-content">
            <div className="header">
               <h1>Activity</h1>
            </div>
            <div className="main">
               <div className="container">
                  <Link to={"/booking"} className="card">
                     <div className="icon">
                        <HiOutlineDocumentText />
                     </div>
                     <h1>Submited request</h1>
                  </Link>
                  <Link to={"/booking"} className="card">
                     <div className="icon">
                        <FaRegQuestionCircle />
                     </div>
                     <h1>Approval status</h1>
                  </Link>
                  <Link to={"/booking"} className="card">
                     <div className="icon">
                        <TbDoor />
                     </div>
                     <h1>Booked room</h1>
                  </Link>
                  <Link to={"/booking"} className="card">
                     <div className="icon">
                        <MdChecklist />
                     </div>
                     <h1>Booked item</h1>
                  </Link>
               </div>
               <div className="container">
                  <div className="detail">
                     <h1>Aula Djoenda</h1>
                     <img src={aula} alt="Aula" />
                  </div>
                  <div className="status">
                     <h2>
                        Status: <span>On progres</span>
                     </h2>
                     <h2>
                        Booking Date: <span>Juni, 23 2025</span>
                     </h2>
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
}
