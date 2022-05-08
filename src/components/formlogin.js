import { Button } from "@mui/material";
import { useEffect, useState } from "react";

import Acceder from "../peticiones/acceder";
import InputText from "./input-text";
import InputPassword from "./input.password";

export default function FormLogin({ setValues }) {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    setValues(dogs);
  }, [dogs]);
  const [user, setUser] = useState();
  const [login, setLogin] = useState(true);
  const [cursorPointer, setCursorPointer] = useState("");
  useEffect(() => {
    user?.user?.length > 8 && user?.password?.length > 7
      ? setLogin(false)
      : setLogin(true);
    !login ? setCursorPointer("cursor-pointer") : setCursorPointer("");
  }, [user]);
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
          envio={"Create User"}
          url={"/createUser"}
        />
      </div>
      <div className={"w-1/3 mt-3 " + cursorPointer}>
        <Button
          variant="contained"
          fullWidth
          color="success"
          disabled={login}
          onClick={async (e) => {
            await Acceder(user, { setDogs });
          }}
        >
          Ingresar
        </Button>
      </div>
    </form>
  );
}
