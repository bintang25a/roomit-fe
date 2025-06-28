import { HiOutlineDocumentText } from "react-icons/hi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { TbDoor } from "react-icons/tb";
import { MdChecklist } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "/roomit-logo.png";
import "./index.css";

export default function Home() {
   return (
      <main className="home">
         <header className="header">
            <div className="logo">
               <img src={logo} alt="" />
            </div>
            <div className="greeting">
               <h1>Hi, Bintang Al Fizar</h1>
               <h2>Good Morning</h2>
            </div>
            <div className="date">Kamis, 26 Juni 2025</div>
            <div className="room-navigation">
               <input type="search" placeholder="Search a room or schedule" />
               <Link className="btn" to={"/rooms"}>
                  Book a Room
               </Link>
            </div>
            <Link to={"/items"} className="item-navigation">
               Need item? click here to book item
            </Link>
         </header>
         <div className="main">
            <div className="header">
               <h1>Activity</h1>
            </div>
            <div className="container">
               <Link to={"/submited-request"} className="card">
                  <div className="icon">
                     <HiOutlineDocumentText />
                  </div>
                  <h1>Submited request</h1>
               </Link>
               <Link to={"/approval-status"} className="card">
                  <div className="icon">
                     <FaRegQuestionCircle />
                  </div>
                  <h1>Approval status</h1>
               </Link>
               <Link to={"/booked-room"} className="card">
                  <div className="icon">
                     <TbDoor />
                  </div>
                  <h1>Booked room</h1>
               </Link>
               <Link to={"/booked-item"} className="card">
                  <div className="icon">
                     <MdChecklist />
                  </div>
                  <h1>Booked item</h1>
               </Link>
            </div>
         </div>
      </main>
   );
}
