import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import FormLogin from "../components/formlogin";
import Navbar from "../components/navbar";

function Login({ setDataUser }) {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setDataUser(value);
    value?.response === "ok" ? navigate("/index") : navigate("/");
  }, [value]);
  return (
    <>
      <Navbar />
      <main
        className="w-full flex flex-col  items-center"
        style={{
          backgroundColor: "rgba(239, 239, 239, 1)",
          height: "91.5vh",
        }}
      >
        <section className="text-black text-2xl my-6 font-semibold">
          Login
        </section>
        <section className="w-11/12 md:w-3/4 lg:w-3/5 bg-white h-80 border-2 border-black rounded-lg hover:shadow-xl hover:shadow-zinc-600">
          <FormLogin setValues={setValue} />
        </section>
      </main>
    </>
  );
}

export default Login;
