import { Outlet, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../components/public/Navbar";
import Footer from "../components/public/Footer";
import "./public.css";

export default function PublicLayout() {
   const navigate = useNavigate();

   return (
      <div className="public-layout">
         <Navbar />
         <Outlet />
         <Footer />
         <div className="btn-back">
            <button
               onClick={() => navigate(-1, { replace: true })}
               className="btn"
            >
               <FaArrowLeft />
            </button>
         </div>
      </div>
   );
}
