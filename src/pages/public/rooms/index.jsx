import { Link } from "react-router-dom";
import aula from "/aula.jpg";

export default function Rooms() {
   return (
      <main className="rooms">
         <div className="header">
            <h1>Room list</h1>
            <h2>Check the room that relevant for you</h2>
         </div>
         <div className="action">
            <div className="search">
               <input
                  type="search"
                  placeholder="Search by name, capacity, other"
               />
            </div>
            <div className="button">
               <button className="btn">50 People</button>
               <button className="btn">65 People</button>
               <button className="btn">80 People</button>
            </div>
         </div>
         <div className="main">
            <Link to={"/rooms/1"} className="card">
               <h1>Al Batani</h1>
               <img src={aula} alt="" />
            </Link>
            <Link to={"/rooms/1"} className="card">
               <h1>Al Batani</h1>
               <img src={aula} alt="" />
            </Link>
            <Link to={"/rooms/1"} className="card">
               <h1>Al Batani</h1>
               <img src={aula} alt="" />
            </Link>
            <Link to={"/rooms/1"} className="card">
               <h1>Al Batani</h1>
               <img src={aula} alt="" />
            </Link>
            <Link to={"/rooms/1"} className="card">
               <h1>Al Batani</h1>
               <img src={aula} alt="" />
            </Link>
            <Link to={"/rooms/1"} className="card">
               <h1>Al Batani</h1>
               <img src={aula} alt="" />
            </Link>
            <Link to={"/rooms/1"} className="card">
               <h1>Al Batani</h1>
               <img src={aula} alt="" />
            </Link>
            <Link to={"/rooms/1"} className="card">
               <h1>Al Batani</h1>
               <img src={aula} alt="" />
            </Link>
         </div>
      </main>
   );
}
