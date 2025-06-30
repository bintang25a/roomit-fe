import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// import home pages
import Home from "./pages/public";
import SubmitedRequest from "./pages/public/activity/submitedRequest";
import ApprovalStatus from "./pages/public/activity/approvalStatus";
import BookedItem from "./pages/public/activity/bookedItem";
import BookedRoom from "./pages/public/activity/bookedRoom";
import MyCalendar from "./pages/public/navigation/calendar";
import Profile from "./pages/public/navigation/profile";

//import room pages
import Rooms from "./pages/public/rooms";
import ShowRoom from "./pages/public/rooms/show";

//import booking pages
import AddBooking from "./pages/public/booking/create";
import ShowBooking from "./pages/public/booking/show";

//import auth pages
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

// Admin pages
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin";
import UsersAdmin from "./pages/admin/users";
import RoomsAdmin from "./pages/admin/rooms";
import LoansAdmin from "./pages/admin/loans";
import NeedsApproval from "./pages/admin/loans/needsApproval";
import Schedule from "./pages/public/navigation/schedule";

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
               path="/"
               element={
                  <ProtectedRoute>
                     <PublicLayout />
                  </ProtectedRoute>
               }
            >
               <Route index element={<Home />} />
               <Route path="submited-request" element={<SubmitedRequest />} />
               <Route path="approval-status" element={<ApprovalStatus />} />
               <Route path="booked-room" element={<BookedRoom />} />
               <Route path="booked-item" element={<BookedItem />} />
               <Route path="calendar" element={<MyCalendar />} />
               <Route path="schedule" element={<Schedule />} />
               <Route path="profile" element={<Profile />} />

               <Route path="rooms">
                  <Route index element={<Rooms />} />
                  <Route path="show/:slug" element={<ShowRoom />} />
                  <Route path=":query" element={<Rooms />} />
               </Route>

               <Route path="booking">
                  <Route index element={<AddBooking />} />
                  <Route path="show/:slug" element={<ShowBooking />} />
                  <Route path=":slug" element={<AddBooking />} />
               </Route>
            </Route>

            <Route
               path="admin"
               element={
                  <ProtectedRoute requireAdmin={true}>
                     <AdminLayout />
                  </ProtectedRoute>
               }
            >
               <Route index element={<Dashboard />} />
               <Route path="users" element={<UsersAdmin />} />
               <Route path="users/profile" element={<Profile />} />
               <Route path="rooms" element={<RoomsAdmin />} />
               <Route path="loans" element={<LoansAdmin />} />
               <Route
                  path="loans/make-loan"
                  element={<LoansAdmin isAddSetting={true} />}
               />
               <Route path="loans/needs-approve" element={<NeedsApproval />} />
               <Route
                  path="loans/needs-approve/:slug"
                  element={<NeedsApproval />}
               />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}
