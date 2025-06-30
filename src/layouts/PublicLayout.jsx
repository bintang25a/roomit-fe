import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { getMembers, showMember } from "../_services/users";
import { getRooms } from "../_services/rooms";
import { getLoans } from "../_services/loans";
import useConfirmDialog from "../components/element/ConfirmModal";
import useLoadingSpinner from "../components/element/LoadingModal";
import Navbar from "../components/public/Navbar";
import "./public.css";

export default function PublicLayout() {
   const { confirm, ConfirmDialog } = useConfirmDialog();
   const { loading, LoadingSpinner } = useLoadingSpinner();

   // const currentPath = location.pathname;

   const navigate = useNavigate();
   const [users, setUsers] = useState([]);
   const [user, setUser] = useState({});
   const [rooms, setRooms] = useState([]);
   const [loans, setLoans] = useState([]);

   const fetchUser = async () => {
      const [userData] = await Promise.all([
         showMember(JSON.parse(localStorage.getItem("user")).slug),
      ]);
      setUser(userData);
   };

   useEffect(() => {
      const fetchData = async () => {
         const [usersData, roomsData, loansData] = await Promise.all([
            getMembers(),
            getRooms(),
            getLoans(),
         ]);

         setUsers(usersData);
         setRooms(roomsData);
         setLoans(loansData);
      };

      setTimeout(() => {
         const localUser = JSON.parse(localStorage.getItem("user"));

         if (localUser) {
            fetchUser();
         }
      }, 2000);

      fetchData();
   }, []);

   return (
      <>
         <div className="public-layout">
            <Outlet
               context={{
                  users,
                  user,
                  rooms,
                  loans,
                  confirm,
                  loading,
                  fetchUser,
               }}
            />
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
         <ConfirmDialog />
         <LoadingSpinner />
         <div className="desktop-handle">
            <div className="container">
               <h1>This website is Mobile only</h1>
            </div>
         </div>
      </>
   );
}
