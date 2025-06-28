import { Link } from "react-router-dom";
import aula from "/aula.jpg";
import logo from "/roomit-logo.png";

export default function Rooms() {
   return (
      <main className="rooms">
         <div className="header">
            <div className="logo">
               <img src={logo} alt="" />
            </div>
            <div className="greeting">
               <h1>Book a Room</h1>
               <h2>What room</h2>
            </div>
            <div className="room-navigation">
               <input type="search" placeholder="Search a room or schedule" />
               <button className="btn" to={"/rooms"}>
                  50 People
               </button>
               <button className="btn" to={"/rooms"}>
                  For weekend
               </button>
               <button className="btn" to={"/rooms"}>
                  Available now
               </button>
            </div>
         </div>
         <div className="main">
            <div className="recomendation">
               <h1>Recomendation</h1>
               <div className="container">
                  <div className="card">
                     <h1>Aula Djoeanda</h1>
                     <div className="image">
                        <img src={aula} alt="" />
                     </div>
                  </div>
                  <div className="card">
                     <h1>Aula Djoeanda</h1>
                     <div className="image">
                        <img src={aula} alt="" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="room-list">
               <h1>Room list</h1>
               <div className="container">
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Capacity:</span> 50 People
                     </h2>
                  </Link>
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Capacity:</span> 50 People
                     </h2>
                  </Link>
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Capacity:</span> 50 People
                     </h2>
                  </Link>
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Capacity:</span> 50 People
                     </h2>
                  </Link>
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Capacity:</span> 50 People
                     </h2>
                  </Link>
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Capacity:</span> 50 People
                     </h2>
                  </Link>
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Capacity:</span> 50 People
                     </h2>
                  </Link>
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Capacity:</span> 50 People
                     </h2>
                  </Link>
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Capacity:</span> 50 People
                     </h2>
                  </Link>
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Capacity:</span> 50 People
                     </h2>
                  </Link>
                  <Link to={"/rooms/show"} className="list">
                     <h1>Aula Djoeanda</h1>
                     <h2>
                        <span>Capacity:</span> 50 People
                     </h2>
                  </Link>
               </div>
            </div>
         </div>
      </main>
   );
}
