import { Outlet } from "react-router-dom";
import Navbar from "../components/public/Navbar";
import Footer from "../components/public/Footer";
import "./public.css";

export default function PublicLayout() {
   return (
      <div className="public-layout">
         <Navbar />
         <Outlet />
         <Footer />
      </div>
   );
}
