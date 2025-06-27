import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/public";
import Rooms from "./pages/public/rooms";
import Booking from "./pages/public/booking";

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<PublicLayout />}>
               <Route index element={<Home />} />

               <Route path="/rooms" element={<Rooms />} />

               <Route path="/booking" element={<Booking />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}
