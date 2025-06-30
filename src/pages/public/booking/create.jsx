import { useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { createLoan } from "../../../_services/loans";
import { numberDateLocale } from "../../../_utilities/playDate";
import ActivityHeader from "../../../components/public/ActivityHeader";

export default function AddBooking() {
   const newForm = {
      nomor_peminjaman: "",
      kode_ruangan: "",
      id_peminjam: "",
      nama_pj: "",
      tanggal_pengajuan: "",
      tanggal_pemakaian: "",
      waktu_mulai: "",
      waktu_selesai: "",
      keperluan: "",
      progres: "",
   };
   const [formData, setFormData] = useState(newForm);
   const { slug } = useParams();
   const { rooms, loading, confirm, fetchUser } = useOutletContext();
   const bookRoom = rooms.find((room) => room?.slug === slug);

   const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const navigate = useNavigate();
   const handleSubmit = async (e) => {
      e.preventDefault();
      loading(true);
      const user = JSON.parse(localStorage.getItem("user"));

      const id_peminjam = user?.uid;
      const tanggal_pengajuan = new Date();
      const progres = "onprogres";

      let nomor_peminjaman;
      let kode_ruangan;
      if (slug) {
         kode_ruangan = bookRoom.kode_ruangan;
         nomor_peminjaman = `${kode_ruangan}-${
            user?.uid
         }-${numberDateLocale()}`;
      } else {
         nomor_peminjaman = `${kode_ruangan}-${
            user?.uid
         }-${numberDateLocale()}`;
      }

      try {
         const data = {
            ...formData,
            nomor_peminjaman: nomor_peminjaman.trim(),
            id_peminjam,
            tanggal_pengajuan,
            kode_ruangan,
            progres,
         };

         await createLoan(data);
         loading(false);
         await confirm("Booking form successfully submited", true);
         fetchUser();
         setFormData(newForm);
         navigate("/", { replace: true });
      } catch (error) {
         loading(false);
         confirm("Failed", false);
         console.log(error);
      }
   };

   return (
      <main className="booking">
         <ActivityHeader head={"Aula Djoeanda"} desc={"Gedung A Lantai 2"} />
         <div className="main">
            <form onSubmit={handleSubmit}>
               <div className="container">
                  <div className="input">
                     <select
                        name="kode_ruangan"
                        id="kode_ruangan"
                        onChange={handleChange}
                        defaultValue={bookRoom?.kode_ruangan || ""}
                        disabled={slug}
                        required
                     >
                        {slug ? (
                           <option value={bookRoom?.kode_ruangan}>
                              {bookRoom?.nama}
                           </option>
                        ) : (
                           <option value="">Nama Ruangan</option>
                        )}

                        {rooms.map((room) => (
                           <option
                              key={room?.kode_ruangan}
                              value={room?.kode_ruangan}
                           >
                              {room?.nama}
                           </option>
                        ))}
                     </select>
                  </div>
                  <div className="input">
                     <input
                        type="text"
                        id="nama_pj"
                        name="nama_pj"
                        onChange={handleChange}
                        value={formData.nama_pj}
                        required
                     />
                     <label htmlFor="nama_pj">Nama Peminjam</label>
                  </div>
                  <div className="input">
                     <input
                        type="date"
                        id="tanggal_pemakaian"
                        name="tanggal_pemakaian"
                        onChange={handleChange}
                        value={formData.tanggal_pemakaian}
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
                        onChange={handleChange}
                        value={formData.waktu_mulai}
                        required
                     />
                     <label htmlFor="waktu_mulai">Waktu Mulai</label>
                  </div>
                  <div className="input">
                     <input
                        type="time"
                        id="waktu_selesai"
                        name="waktu_selesai"
                        onChange={handleChange}
                        value={formData.waktu_selesai}
                        required
                     />
                     <label htmlFor="waktu_selesai">Waktu Selesai</label>
                  </div>
                  <div className="input">
                     <input
                        type="text"
                        id="keperluan"
                        name="keperluan"
                        onChange={handleChange}
                        value={formData.keperluan}
                        required
                     />
                     <label htmlFor="keperluan">Keperluan</label>
                  </div>
               </div>
               <div className="footer">
                  <button className="btn" type="submit">
                     Ajukan peminjaman
                  </button>
               </div>
            </form>
         </div>
      </main>
   );
}
