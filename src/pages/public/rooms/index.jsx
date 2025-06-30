import { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import logo from "/roomit-logo.png";
import { getImageUrl } from "../../../_services/rooms";

export default function Rooms() {
   const { rooms } = useOutletContext();
   const { query } = useParams();

   const djoeanda = rooms?.find((room) => room?.kode_ruangan === "A-200-DK");
   const battani = rooms?.find((room) => room?.kode_ruangan === "B-101-AB");

   const [searchTerm, setSearchTerm] = useState("");
   useEffect(() => {
      if (query) {
         setSearchTerm(query.toLowerCase());
      }
   }, [query]);

   const filteredRoom = rooms?.filter(
      (room) =>
         room?.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
         Number(room?.kapasitas) >= Number(searchTerm)
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
                     <Link
                        to={`/rooms/show/${djoeanda?.slug}`}
                        className="card"
                     >
                        <h1>{djoeanda?.nama}</h1>
                        <div className="image">
                           <img
                              src={getImageUrl(djoeanda?.gambar)}
                              alt={djoeanda?.nama}
                           />
                        </div>
                     </Link>
                     <Link to={`/rooms/show/${battani?.slug}`} className="card">
                        <h1>{battani?.nama}</h1>
                        <div className="image">
                           <img src={getImageUrl(battani?.gambar)} alt="" />
                        </div>
                     </Link>
                  </div>
               </div>
            ) : null}
            <div className="room-list">
               <h1>Room list</h1>
               <div className="container">
                  {rooms
                     ? filteredRoom.map((room) => (
                          <Link
                             key={room?.kode_ruangan}
                             to={`/rooms/show/${room?.slug}`}
                             className="list"
                          >
                             <h1>{room?.nama}</h1>
                             <h2>
                                <span>Capacity:</span> {room?.kapasitas} People
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
