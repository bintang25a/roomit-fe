import { Link, useNavigate } from "react-router-dom";
import logo from "/roomit-logo hd.png";
import "./index.css";
import { useState } from "react";
import { createMember } from "../../_services/users";

export default function Register() {
   const [formData, setFormData] = useState({
      nama: "",
      uid: "",
      email: "",
      no_hp: "",
      role: "",
      password: "",
   });
   const navigate = useNavigate();

   const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         await createMember(formData);
         navigate("/login", { replace: true });
      } catch (error) {
         window.alert(error);
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
                     name="nama"
                     id="nama"
                     placeholder="Birth name"
                     autoComplete="off"
                     onChange={handleChange}
                     value={formData.nama}
                     required
                  />
               </div>
               <div className="input">
                  <input
                     type="text"
                     name="uid"
                     id="uid"
                     placeholder="NIM/NIDN/NIP"
                     onChange={handleChange}
                     value={formData.uid}
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
                     onChange={handleChange}
                     value={formData.email}
                     autoComplete="off"
                     required
                  />
               </div>
               <div className="input">
                  <input
                     type="text"
                     name="no_hp"
                     id="no_hp"
                     placeholder="Nomor hp"
                     onChange={handleChange}
                     value={formData.no_hp}
                     autoComplete="off"
                     required
                  />
               </div>
               <div className="input">
                  <select
                     name="role"
                     id="role"
                     required
                     onChange={handleChange}
                     value={formData.role}
                  >
                     <option value="">--Select Role--</option>
                     <option value="admin">Admin</option>
                     <option value="dosen">Dosen</option>
                     <option value="mahasiswa">Mahasiswa</option>
                  </select>
               </div>
               <div className="input">
                  <input
                     type="password"
                     name="password"
                     id="password"
                     placeholder="password"
                     onChange={handleChange}
                     value={formData.password}
                     autoComplete="off"
                     required
                  />
               </div>
            </div>
            <div className="action">
               <button className="btn" type="submit">
                  Sign up
               </button>
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
