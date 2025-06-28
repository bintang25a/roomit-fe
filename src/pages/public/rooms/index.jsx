import { Link } from "react-router-dom";
import aula from "/aula.jpg";
import logo from "/roomit-logo.png";
import { useEffect, useState } from "react";
import { getRooms } from "../../../_services/rooms";

export default function Rooms() {
   const [rooms, setRooms] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const [roomsData] = await Promise.all([getRooms()]);
         setRooms(roomsData);
      };

      fetchData();
   }, []);

   const [searchTerm, setSearchTerm] = useState("");
   const filteredRoom = rooms?.filter(
      (room) =>
         room.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
         Number(room.kapasitas) >= Number(searchTerm)
   );

   const handleChange = (e) => {
      setSearchTerm(e.target.value);
   };

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
               <input
                  type="search"
                  placeholder="Search a room or schedule"
                  value={searchTerm}
                  onChange={handleChange}
               />
               <button className="btn" onClick={() => setSearchTerm("50")}>
                  50 People
               </button>
               <button className="btn" onClick={() => setSearchTerm("40")}>
                  40 People
               </button>
               <button className="btn" onClick={() => setSearchTerm("30")}>
                  30 People
               </button>
            </div>
         </div>
         <div className="main">
            {!searchTerm ? (
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
            ) : null}
            <div className="room-list">
               <h1>Room list</h1>
               <div className="container">
                  {rooms
                     ? filteredRoom.map((room) => (
                          <Link
                             key={room.kode_ruangan}
                             to={`/rooms/show/${room.slug}`}
                             className="list"
                          >
                             <h1>{room.nama}</h1>
                             <h2>
                                <span>Capacity:</span> {room.kapasitas} People
                             </h2>
                          </Link>
                       ))
                     : null}
               </div>
            </div>
         </div>
      </main>
   );
}
