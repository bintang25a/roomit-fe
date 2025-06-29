import { Link } from "react-router-dom";
import { MdHome, MdLayers, MdWorkspacesOutline } from "react-icons/md";
import logo from "/roomit-logo.png";

export default function Sidebar() {
   return (
      <aside className="sidebar">
         <div className="top-content">
            <div className="logo">
               <img src={logo} alt="" />
            </div>
            <div className="group">
               <div className="header">
                  <MdHome className="icon" /> Home
               </div>
               <ul>
                  <li>
                     <Link to={"/admin"}>Number data</Link>
                  </li>
                  <li>
                     <Link to={"/admin"}>Coming event</Link>
                  </li>
                  <li>
                     <Link to={"/admin"}>Approve request</Link>
                  </li>
               </ul>
            </div>
            <div className="group">
               <div className="header">
                  <MdLayers className="icon" /> Pages
               </div>
               <ul>
                  <li>
                     <Link to={"/admin/users"}>Users</Link>
                  </li>
                  <li>
                     <Link to={"/admin/rooms"}>Rooms</Link>
                  </li>
                  <li>
                     <Link to={"/admin/loans"}>Loans </Link>
                  </li>
               </ul>
            </div>
            <div className="group">
               <div className="header">
                  <MdWorkspacesOutline className="icon" /> Workspace
               </div>
               <ul>
                  <li>
                     <Link to={"/admin/loans/approve"}>Needs approval</Link>
                  </li>
                  <li>
                     <Link to={"/admin/loans/approve"}>Make loan</Link>
                  </li>
                  <li>
                     <Link to={"/admin/users/profile"}>Profile</Link>
                  </li>
               </ul>
            </div>
         </div>
         <div className="bottom-content">
            <h1>&#169; Copyright 2025 - Roomit, Bintang Al Fizar</h1>
         </div>
      </aside>
   );
}
