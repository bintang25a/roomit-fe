import logo from "/roomit-logo.png";

export default function ActivityHeader({ head, desc }) {
   return (
      <header className="header">
         <div className="logo">
            <img src={logo} alt="" />
         </div>
         <div className="activity">
            <h1>{head}</h1>
            <h2>{desc}</h2>
         </div>
      </header>
   );
}
