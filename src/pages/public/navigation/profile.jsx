import { useEffect, useState } from "react";
import profilePhoto from "/profile.png";
import { logout } from "../../../_services/auth";
import { useNavigate } from "react-router-dom";

export default function Profile() {
   const [profile, setProfile] = useState({});
   const navigate = useNavigate();

   useEffect(() => {
      const fetchData = async () => {
         const profileData = localStorage.getItem("user");
         setProfile(JSON.parse(profileData));
      };

      fetchData();
   }, []);

   const handleLogout = async () => {
      try {
         await logout();
         navigate("/login", { replace: true });
      } catch (error) {
         alert(error);
         console.log(error);
      }
      await logout();
   };

   return (
      <main className="profile">
         <div className="header">
            <h1>My Profile</h1>
            <img src={profilePhoto} alt="" />
            <h2>Welcome to your profile</h2>
         </div>
         <div className="main">
            <div className="row">
               <h1>Nama</h1>
               <h2> : {profile.nama}</h2>
            </div>
            <div className="row">
               <h1>NIM</h1>
               <h2> : {profile.uid}</h2>
            </div>
            <div className="row">
               <h1>Email</h1>
               <h2> : {profile.email}</h2>
            </div>
            <div className="row">
               <h1>Status</h1>
               <h2> : {profile.role}</h2>
            </div>
         </div>
         <div className="footer">
            <button className="btn" onClick={handleLogout}>
               Logout
            </button>
         </div>
      </main>
   );
}
