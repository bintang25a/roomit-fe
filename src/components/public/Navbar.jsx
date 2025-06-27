import { Link } from "react-router-dom";

export default function Navbar() {
   return (
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
   );
}
