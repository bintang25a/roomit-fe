import { Link, useNavigate } from "react-router-dom";
import logo from "/roomit-logo hd.png";
import "./index.css";
import { useState } from "react";
import { login } from "../../_services/auth";

export default function Login() {
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

      try {
         await login(loginData);
         navigate("/", { replace: true });
      } catch (error) {
         alert(error);
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
      </main>
   );
}
