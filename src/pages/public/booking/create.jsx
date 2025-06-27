import logo from "/roomit-logo.png";

export default function AddBooking() {
   return (
      <main className="booking-add">
         <form>
            <div className="container">
               <div className="header">
                  <img src={logo} alt="" />
                  <h1>Aula Djoeanda</h1>
                  <h2>Verification form</h2>
               </div>
               <div className="main">
                  <div className="input">
                     <select name="nama" id="nama" required>
                        <option value="">Nama Ruangan</option>
                        <option value="1">Aula Djoeanda</option>
                        <option value="1">Al Batani 1</option>
                        <option value="1">Al Batani 2</option>
                     </select>
                  </div>
                  <div className="input">
                     <input type="text" id="nama_pj" name="nama_pj" required />
                     <label htmlFor="nama_pj">Nama Peminjam</label>
                  </div>
                  <div className="input">
                     <input
                        type="date"
                        id="tanggal_peminjaman"
                        name="tanggal_peminjaman"
                        required
                     />
                     <label htmlFor="tanggal_peminjaman">
                        Tanggal Peminjaman
                     </label>
                  </div>
                  <div className="input">
                     <input
                        type="time"
                        id="waktu_mulai"
                        name="waktu_mulai"
                        required
                     />
                     <label htmlFor="waktu_mulai">Waktu Mulai</label>
                  </div>
                  <div className="input">
                     <input
                        type="time"
                        id="waktu_selesai"
                        name="waktu_selesai"
                        required
                     />
                     <label htmlFor="waktu_selesai">Waktu Selesai</label>
                  </div>
                  <div className="input">
                     <input
                        type="text"
                        id="keperluan"
                        name="keperluan"
                        required
                     />
                     <label htmlFor="keperluan">Keperluan</label>
                  </div>
               </div>
               <div className="footer">
                  <button className="btn">Ajukan peminjaman</button>
               </div>
            </div>
         </form>
      </main>
   );
}
