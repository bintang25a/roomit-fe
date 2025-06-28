import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/public";
import Rooms from "./pages/public/rooms";
import Booking from "./pages/public/booking";
import AddBooking from "./pages/public/booking/create";
import ShowBooking from "./pages/public/booking/show";
import ShowRoom from "./pages/public/rooms/show";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import SubmitedRequest from "./pages/public/activity/submitedRequest";
import ApprovalStatus from "./pages/public/activity/approvalStatus";
import BookedItem from "./pages/public/activity/bookedItem";
import BookedRoom from "./pages/public/activity/bookedRoom";

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/" element={<PublicLayout />}>
               <Route index element={<Home />} />
               <Route path="submited-request" element={<SubmitedRequest />} />
               <Route path="approval-status" element={<ApprovalStatus />} />
               <Route path="booked-room" element={<BookedRoom />} />
               <Route path="booked-item" element={<BookedItem />} />

               <Route path="rooms" element={<Rooms />} />
               <Route path="rooms/1" element={<ShowRoom />} />

               <Route path="booking">
                  <Route index element={<Booking />} />
                  <Route path="show" element={<ShowBooking />} />
                  <Route path="form" element={<AddBooking />} />
                  <Route path="form/:slug" element={<AddBooking />} />
                  <Route path="history" element={<AddBooking />} />
               </Route>
            </Route>
         </Routes>
      </BrowserRouter>
   );
}
