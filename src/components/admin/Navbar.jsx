import { Link } from "react-router-dom";
import { MdHome, MdPerson, MdRefresh, MdMenu } from "react-icons/md";
import profileLogo from "/profile.png";

export default function Navbar({ user, fetchData, handleOpen }) {
   return (
      <nav className="navbar">
         <div className="left-content">
            <Link to={"/admin"}>
               <MdHome className="icon" />
            </Link>
            <Link to={"/admin/users/profile"}>
               <MdPerson className="icon" />
            </Link>
            <button onClick={fetchData}>
               <MdRefresh className="icon" />
            </button>
            <button className="mobile" onClick={handleOpen}>
               <MdMenu className="icon" />
            </button>
         </div>
         <Link to={"/admin/users/profile"} className="right-content">
            <h1>{user?.nama}</h1>
            <img src={profileLogo} />
         </Link>
      </nav>
   );
}
