import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<PublicLayout />}></Route>
         </Routes>
      </BrowserRouter>
   );
}
