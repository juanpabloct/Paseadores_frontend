import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputText from "./input-text";
import InputPassword from "./input.password";

export default function FormLogin() {
  const [user, setUser] = useState([]);
  return (
    <form className="text-center grid grid-cols-1 justify-items-center">
      <div className="w-2/3 md:w-1/2">
        <InputText
          style_subtitle={"text-2xl mt-4"}
          sizeInput={"medium"}
          label={"User"}
          subtitle={"User"}
          onChange={(e) => {
            setUser({ ...user, user: e.target.value });
          }}
        />
      </div>
      <div className="w-2/3 md:w-1/2">
        <InputPassword
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
      </div>
      <div className="w-1/3 mt-3">
        <Link to={"/index"} className="text-right cursor-pointer w-full h-full">
          <Button variant="contained" fullWidth color="success">
            Ingresar
          </Button>
        </Link>

        <input type="password" />
      </div>
    </form>
  );
}
