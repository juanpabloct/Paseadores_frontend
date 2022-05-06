import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import CreateUser from "./pages/createUser";
import Index from "./pages";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}
