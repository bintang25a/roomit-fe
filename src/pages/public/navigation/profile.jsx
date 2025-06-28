import profile from "/profile.png";

export default function Profile() {
   return (
      <main className="profile">
         <div className="header">
            <h1>My Profile</h1>
            <img src={profile} alt="" />
            <h2>Welcome to your profile</h2>
         </div>
         <div className="main">
            <div className="row">
               <h1>Nama</h1>
               <h2> : Bintang Al Fizar</h2>
            </div>
            <div className="row">
               <h1>NIM</h1>
               <h2> : 22040700020</h2>
            </div>
            <div className="row">
               <h1>Email</h1>
               <h2> : bintang@gmail.com</h2>
            </div>
            <div className="row">
               <h1>Status</h1>
               <h2> : Mahasiswa</h2>
            </div>
         </div>
         <div className="footer">
            <button className="btn">Logout</button>
         </div>
      </main>
   );
}
