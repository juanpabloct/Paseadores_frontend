import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import CreateUser from "./pages/createUser";
import Index from "./pages";
import { useState } from "react";

export default function Routers() {
  const [dataUser, setDataUser] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setDataUser={setDataUser} />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route
          path="/index"
          element={<Index data={dataUser} setDataUser={setDataUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
