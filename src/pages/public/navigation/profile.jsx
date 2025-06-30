import { useNavigate, useOutletContext, Link } from "react-router-dom";
import { logout } from "../../../_services/auth";
import profilePhoto from "/profile.png";

export default function Profile() {
   const navigate = useNavigate();
   const { user, loading, confirm } = useOutletContext();
   const profile = user;

   const handleLogout = async () => {
      loading(true);

      try {
         await logout();
         loading(false);
         navigate("/login", { replace: true });
      } catch (error) {
         loading(false);
         confirm("Logout failed", false);
         console.log(error);
      }
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
            {user?.role === "admin" ? (
               <Link to={"/admin"} className="btn admin">
                  Admin
               </Link>
            ) : null}
         </div>
      </main>
   );
}
