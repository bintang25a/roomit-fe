import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { MdHome, MdLayers, MdWorkspacesOutline } from "react-icons/md";
import logo from "/roomit-logo.png";

const Sidebar = forwardRef(({ isOpen, setIsOpen }, ref) => {
   return (
      <aside ref={ref} className={isOpen ? "sidebar active" : "sidebar"}>
         <div className="top-content">
            <div className="logo">
               <img src={logo} alt="" />
            </div>
            <div className="group">
               <div className="header">
                  <MdHome className="icon" /> Home
               </div>
               <ul>
                  <li onClick={() => setIsOpen(false)}>
                     <Link to={"/admin"}>Number data</Link>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
                     <Link to={"/admin"}>Coming event</Link>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
                     <Link to={"/admin"}>Approve request</Link>
                  </li>
               </ul>
            </div>
            <div className="group">
               <div className="header">
                  <MdLayers className="icon" /> Pages
               </div>
               <ul>
                  <li onClick={() => setIsOpen(false)}>
                     <Link to={"/admin/users"}>Users</Link>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
                     <Link to={"/admin/rooms"}>Rooms</Link>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
                     <Link to={"/admin/loans"}>Loans </Link>
                  </li>
               </ul>
            </div>
            <div className="group">
               <div className="header">
                  <MdWorkspacesOutline className="icon" /> Workspace
               </div>
               <ul>
                  <li onClick={() => setIsOpen(false)}>
                     <Link to={"/admin/loans/needs-approve"}>
                        Needs approval
                     </Link>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
                     <Link to={"/admin/loans/make-loan"}>Make loan</Link>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
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
});

export default Sidebar;
