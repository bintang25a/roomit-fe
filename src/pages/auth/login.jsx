import { Link } from "react-router-dom";
import logo from "/roomit-logo hd.png";
import "./index.css";

export default function Login() {
   return (
      <main className="auth">
         <div className="logo">
            <img src={logo} alt="" />
         </div>
         <form>
            <div className="container">
               <div className="input">
                  <input
                     type="text"
                     name="uid"
                     id="uid"
                     placeholder="NIM/NIDN/NIP"
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
                     autoComplete="off"
                     required
                  />
               </div>
            </div>
            <div className="action">
               <button className="btn">Login</button>
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
