import { Link } from "react-router-dom";
import logo from "/roomit-logo hd.png";
import "./index.css";

export default function Register() {
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
                     name="nama"
                     id="nama"
                     placeholder="Birth name"
                     autoComplete="off"
                     required
                  />
               </div>
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
                     type="text"
                     name="email"
                     id="email"
                     placeholder="E-Mail"
                     autoComplete="off"
                     required
                  />
               </div>
               <div className="input">
                  <select name="role" id="role" required>
                     <option value="">--Select Role--</option>
                     <option value="admin">Admin</option>
                     <option value="dosen">Dosen</option>
                     <option value="mahasiswa">Mahasiswa</option>
                  </select>
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
               <button className="btn">Sign up</button>
            </div>
         </form>
         <div className="footer">
            <h1>Have an accout?</h1>
            <Link className="btn" to={"/login"}>
               LOGIN
            </Link>
         </div>
      </main>
   );
}
