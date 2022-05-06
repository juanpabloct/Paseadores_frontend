import { useEffect, useState } from "react";
import InputText from "../components/input-text";
import InputPassword from "../components/input.password";
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
    setValueInputs({ ...valueInputs, ["usePlatform"]: changeOptions });
  }, [changeOptions]);
  console.log(valueInputs);
  return (
    <>
      <h4 className="text-center text-white">Use platform</h4>
      <Options options={options} changeOptions={setChangeOptions} />
      {inputs.map((input, index) => {
        const { label, subtitle, type = "text" } = input;
        const name = input.name;
        const value = valueInputs[name];
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
        styleSubtitle={"text-white text-center"}
        onChange={(e) => {
          setValueInputs({ ...valueInputs, password: e.target.value });
        }}
      />
    </>
  );
}
