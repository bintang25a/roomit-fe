import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { getMembers, showMember } from "../_services/users";
import { getRooms } from "../_services/rooms";
import { getLoans } from "../_services/loans";
import useConfirmDialog from "../components/element/ConfirmModal";
import useLoadingSpinner from "../components/element/LoadingModal";
import Sidebar from "../components/admin/Sidebar";
import Navbar from "../components/admin/Navbar";
import "./admin.css";

export default function AdminLayout() {
   const { confirm, ConfirmDialog } = useConfirmDialog();
   const { loading, LoadingSpinner } = useLoadingSpinner();

   const [users, setUsers] = useState([]);
   const [user, setUser] = useState({});
   const [rooms, setRooms] = useState([]);
   const [loans, setLoans] = useState([]);

   const [isOpen, setIsOpen] = useState(false);
   const sidebarRef = useRef(null);
   const handleOpen = () => {
      setIsOpen((prev) => !prev);
   };
   useEffect(() => {
      const handleClickOutside = (event) => {
         if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
         }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   const fetchUser = async () => {
      const [userData] = await Promise.all([
         showMember(JSON.parse(localStorage.getItem("user")).slug),
      ]);
      setUser(userData);
   };

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

   useEffect(() => {
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
         <div className="admin-layout">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} ref={sidebarRef} />
            <div className="right-content" id="top">
               <Navbar
                  user={user}
                  fetchData={fetchData}
                  handleOpen={handleOpen}
               />
               <Outlet
                  context={{
                     user,
                     users,
                     rooms,
                     loans,
                     fetchUser,
                     fetchData,
                     confirm,
                     loading,
                  }}
               />
            </div>
         </div>
         <ConfirmDialog />
         <LoadingSpinner />
      </>
   );
}
