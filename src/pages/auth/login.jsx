import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../_services/auth";
import useLoadingSpinner from "../../components/element/LoadingModal";
import useConfirmDialog from "../../components/element/ConfirmModal";
import logo from "/roomit-logo hd.png";
import "./index.css";

export default function Login() {
   const { loading, LoadingSpinner } = useLoadingSpinner();
   const { confirm, ConfirmDialog } = useConfirmDialog();

   const [loginData, setLoginData] = useState({
      uid: "",
      password: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;

      setLoginData({
         ...loginData,
         [name]: value,
      });
   };

   const navigate = useNavigate();
   const handleSubmit = async (e) => {
      e.preventDefault();
      loading(true);

      try {
         await login(loginData);
         loading(false);
         navigate("/", { replace: true });
      } catch (error) {
         loading(false);
         confirm("Login failed", false);
         console.log(error);
      }
   };

   return (
      <main className="auth">
         <div className="logo">
            <img src={logo} alt="" />
         </div>
         <form onSubmit={handleSubmit}>
            <div className="container">
               <div className="input">
                  <input
                     type="text"
                     name="uid"
                     id="uid"
                     placeholder="NIM/NIDN/NIP"
                     onChange={handleChange}
                     value={loginData.uid}
                     autoComplete="off"
                     required
                  />
               </div>
               <div className="input">
                  <input
                     type="current-password"
                     name="password"
                     id="password"
                     placeholder="password"
                     onChange={handleChange}
                     value={loginData.password}
                     autoComplete="off"
                     required
                  />
               </div>
            </div>
            <div className="action">
               <button className="btn" type="submit">
                  Login
               </button>
            </div>
         </form>
         <div className="footer">
            <h1>Didnt have an account?</h1>
            <h1>Please register in the Link below</h1>
            <Link className="btn" to={"/register"}>
               SIGN UP
            </Link>
         </div>
         <LoadingSpinner />
         <ConfirmDialog />
      </main>
   );
}
