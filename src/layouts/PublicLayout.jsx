import { Link } from "react-router-dom";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { TbDoor } from "react-icons/tb";
import { MdChecklist } from "react-icons/md";
import "./public.css";

export default function PublicLayout() {
   return (
      <div className="public-layout">
         <nav className="navbar">
            <div className="left-section">
               <input type="search" placeholder="Search a room" />
            </div>
            <div className="right-section">
               <Link to={"/"}> Home</Link>
               <Link to={"/calender"}>Calender</Link>
               <Link to={"/time"}>Time</Link>
               <Link to={"/profile"}>Profile</Link>
            </div>
         </nav>
         <main className="home">
            <div className="left-content">
               <div className="welcome">
                  <h1>Hi, Bintang Al Fizar</h1>
                  <h2>Good morning</h2>
               </div>
               <div className="date">Kamis, 26 Juni 2025</div>
               {/* <Link className="action btn" to={"/book-room"}>
                  Book Room
               </Link> */}
            </div>
            <div className="right-content">
               <h1>Actifity</h1>
               <div className="container">
                  <div className="card">
                     <HiOutlineDocumentText />
                     <h1>Submited request</h1>
                  </div>
                  <div className="card">
                     <FaRegQuestionCircle />
                     <h1>Approval status</h1>
                  </div>
                  <div className="card">
                     <TbDoor />
                     <h1>Booked room</h1>
                  </div>
                  <div className="card">
                     <MdChecklist />
                     <h1>Booked item</h1>
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
}
