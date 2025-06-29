import { Link } from "react-router-dom";
import { MdHome, MdPerson, MdRefresh } from "react-icons/md";
import profileLogo from "/profile.png";

export default function Navbar({ user, fetchData }) {
   return (
      <nav className="navbar">
         <div className="left-content">
            <Link to={"/admin"}>
               <MdHome className="icon" />
            </Link>
            <Link to={"/admin/profile"}>
               <MdPerson className="icon" />
            </Link>
            <button onClick={fetchData}>
               <MdRefresh className="icon" />
            </button>
         </div>
         <div className="right-content">
            <h1>{user?.nama}</h1>
            <img src={profileLogo} />
         </div>
      </nav>
   );
}
