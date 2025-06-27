import { Link } from "react-router-dom";
import logo from "/roomit-logo.png";

export default function Navbar() {
   return (
      <nav className="navbar">
         <div className="left-section">
            <img src={logo} alt="" />
            <input type="search" placeholder="Search a room" />
         </div>
         <div className="right-section">
            <Link to={"/"}> Home</Link>
            <Link to={"/calender"}>Calender</Link>
            <Link to={"/time"}>Time</Link>
            <Link to={"/profile"}>Profile</Link>
         </div>
      </nav>
   );
}
