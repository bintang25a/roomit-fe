import { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import aula from "/aula.jpg";

export default function ShowRoom() {
   const [value, setValue] = useState(new Date());

   return (
      <main className="rooms show">
         <div className="header">
            <h1>Al Batani</h1>
            <h2>Minimalist sweet room</h2>
         </div>
         <div className="action">
            <div className="button">
               <Link to={"/booking/form"} className="btn">
                  Book this rooms
               </Link>
            </div>
         </div>
         <div className="main">
            <div className="left-content">
               <img src={aula} alt="" />
            </div>
            <div className="right-content">
               <Calendar
                  className={"calender"}
                  onChange={setValue}
                  value={value}
               />
               <table>
                  <tbody>
                     <tr>
                        <td>Nama</td>
                        <td>:</td>
                        <td>Al Batani</td>
                     </tr>
                     <tr>
                        <td>Kapasitas</td>
                        <td>:</td>
                        <td>32 Orang</td>
                     </tr>
                     <tr>
                        <td>Gedung</td>
                        <td>:</td>
                        <td>Gedung A lantai 3</td>
                     </tr>
                     <tr>
                        <td>Ketersediaan</td>
                        <td>:</td>
                        <td>unknown</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </main>
   );
}
