import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputText from "../components/input-text";
import InputPassword from "../components/input.password";
import crearUsuario from "../peticiones/crear_usuario";
import Options from "./options";

export default function FormCreateUser({
  style_subtitle,
  styleContainer,
  sizeInput,
}) {
  const inputs = [
    { name: "name", label: "Name Complete", subtitle: "Name and LastName" },
    { name: "city", label: "City", subtitle: "City" },
    {
      name: "place",
      label: "Place of Residence",
      subtitle: "Place of Residence",
    },
    { name: "age", label: "Age", subtitle: "Age" },
    { name: "email", label: "Email", subtitle: "Email", type: "email" },
  ];
  const [valueInputs, setValueInputs] = useState({});
  const options = ["Property Dogs", "Dog Walker"];
  const [changeOptions, setChangeOptions] = useState();
  useEffect(() => {
    setValueInputs({ ...valueInputs, usePlatform: changeOptions });
  }, [changeOptions]);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    const { usePlatform, name, city, place, age, email, password } =
      valueInputs;
    usePlatform?.length > 6 &&
    name?.length > 4 &&
    city?.length > 4 &&
    place?.length > 4 &&
    age?.length > 0 &&
    email?.length > 4 &&
    password?.length > 4
      ? setDisabled(false)
      : setDisabled(true);
  }, [valueInputs]);
  return (
    <>
      <h4 className="text-center text-white">Use platform</h4>
      <Options options={options} changeOptions={setChangeOptions} />
      {inputs.map((input, index) => {
        const { label, subtitle, type = "text" } = input;
        const name = input.name;
        return (
          <InputText
            key={index}
            label={label}
            type={type}
            subtitle={subtitle}
            style_subtitle={style_subtitle}
            styleContainer={styleContainer}
            sizeInput={sizeInput}
            onChange={(e) => {
              setValueInputs({ ...valueInputs, [name]: e.target.value });
            }}
          />
        );
      })}
      <InputPassword
        styleSubtitle={"text-black text-center"}
        onChange={(e) => {
          setValueInputs({ ...valueInputs, password: e.target.value });
        }}
        envio={"login"}
        url={"/"}
      />
      <div className="flex flex-col content-center items-center">
        <Link to={""}>
          <Button
            variant="contained"
            fullWidth
            color="success"
            onClick={async () =>
              await crearUsuario(valueInputs).then(() => {
                window.location.href = "/";
              })
            }
            disabled={disabled}
          >
            Ingresar
          </Button>
        </Link>
      </div>
    </>
  );
}
