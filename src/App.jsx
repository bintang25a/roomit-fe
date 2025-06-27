import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/public";
import Rooms from "./pages/public/rooms";
import Booking from "./pages/public/booking";
import AddBooking from "./pages/public/booking/create";
import ShowBooking from "./pages/public/booking/show";
import ShowRoom from "./pages/public/rooms/show";

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<PublicLayout />}>
               <Route index element={<Home />} />

               <Route path="rooms" element={<Rooms />} />
               <Route path="rooms/1" element={<ShowRoom />} />

               <Route path="booking">
                  <Route index element={<Booking />} />
                  <Route path="1" element={<ShowBooking />} />
                  <Route path="form" element={<AddBooking />} />
                  <Route path="form/:slug" element={<AddBooking />} />
                  <Route path="history" element={<AddBooking />} />
               </Route>
            </Route>
         </Routes>
      </BrowserRouter>
   );
}
