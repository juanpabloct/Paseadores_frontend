import { TextField } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
export default function InputPassword({
  styleSubtitle = "text-black text-xl",
  onChange,
}) {
  const MostrarContraseña = useRef();
  const [showPassword, setShowPassword] = useState("password");
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(MostrarContraseña?.current);
  }, [MostrarContraseña]);
  if (value) {
    value.addEventListener("click", () => {
      if (showPassword === "password") {
        setShowPassword("text");
      } else {
        setShowPassword("password");
      }
    });
  }
  return (
    <>
      <div className="flex flex-col relative w-full">
        <h1 className={"py-2 " + styleSubtitle}>Password</h1>
        <TextField
          id="outlined-password-input"
          label="Password"
          type={showPassword}
          variant="outlined"
          className="bg-zinc-300 "
          onChange={onChange}
        />
        <div
          className="absolute bottom-10 right-1 inline-block"
          ref={MostrarContraseña}
        >
          <RemoveRedEyeIcon ref={MostrarContraseña} />
        </div>
        <Link to={"/createUser"} className="text-right cursor-pointer">
          Crear Cuenta
        </Link>
      </div>
    </>
  );
}
