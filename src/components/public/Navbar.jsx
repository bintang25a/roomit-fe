import { Link } from "react-router-dom";
import {
   MdHome,
   MdCalendarToday,
   MdAccessTime,
   MdPerson,
} from "react-icons/md";

export default function Navbar() {
   return (
      <nav className="navbar">
         <Link to={"/"}>
            <MdHome />
         </Link>
         <Link to={"/calendar"}>
            <MdCalendarToday />
         </Link>
         <Link to={"/schedule"}>
            <MdAccessTime />
         </Link>
         <Link to={"/profile"}>
            <MdPerson />
         </Link>
      </nav>
   );
}
