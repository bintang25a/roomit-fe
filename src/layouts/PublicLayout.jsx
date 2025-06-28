import { Outlet, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../components/public/Navbar";
import Footer from "../components/public/Footer";
import "./public.css";

export default function PublicLayout() {
   const navigate = useNavigate();

   return (
      <>
         <div className="public-layout">
            <Outlet />
            <Navbar />
            <div className="btn-back">
               <button
                  onClick={() => navigate(-1, { replace: true })}
                  className="btn"
               >
                  <FaArrowLeft />
               </button>
            </div>
         </div>
         <div className="desktop-handle">
            <div className="container">
               <h1>This website is Mobile only</h1>
            </div>
         </div>
      </>
   );
}
