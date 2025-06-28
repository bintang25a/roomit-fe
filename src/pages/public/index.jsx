import { HiOutlineDocumentText } from "react-icons/hi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { TbDoor } from "react-icons/tb";
import { MdChecklist } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "/roomit-logo.png";
import "./index.css";
import { useEffect, useState } from "react";
import { fullDateLocale, greetings } from "../../_utilities/playDate";

export default function Home() {
   const [profile, setProfile] = useState({});

   useEffect(() => {
      const profileData = JSON.parse(localStorage.getItem("user"));
      setProfile(profileData);
   }, []);

   return (
      <main className="home">
         <div className="header">
            <div className="logo">
               <img src={logo} alt="" />
            </div>
            <div className="greeting">
               <h1>Hi, {profile.nama}</h1>
               <h2>{greetings()}</h2>
            </div>
            <div className="date">{fullDateLocale()}</div>
            <div className="room-navigation">
               <input type="search" placeholder="Search a room or schedule" />
               <Link className="btn" to={"/rooms"}>
                  Book a Room
               </Link>
            </div>
            <Link to={"/booked-item"} className="item-navigation">
               Need item? click here to book item
            </Link>
         </div>
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
