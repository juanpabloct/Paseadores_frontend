import { Button } from "@mui/material";
import InputText from "./input-text";
import ClearTwoToneIcon from "@mui/icons-material/ClearTwoTone";
import { useEffect } from "react";
import agregarPerros from "../peticiones/agregarPerros";

export default function ModalAddDog({
  setUpdateData,
  updateData,
  listInputs,
  handleClose,
  show,
  valueInputs,
  setValueInputs,
  setButtonDisable,
  buttonDisable,
  user_id,
}) {
  useEffect(() => {}, [valueInputs]);
  useEffect(() => {
    if (updateData?.mensaje) {
      alert(updateData.mensaje);
    }
    updateData?.response === "ok" && handleClose();
  }, [updateData]);
  return (
    <section
      className={
        "w-full top-auto h-screen  left-0 flex flex-col items-center justify-center bg-slate-200 " +
        show
      }
    >
      <div className="text-center h-3/4 bg-white w-4/6 relative flex flex-col items-center rounded-lg hover:shadow-lg hover:shadow-zinc-600">
        <div
          className="inline-block relative right-0 hover:cursor-pointer"
          onClick={handleClose}
        >
          <ClearTwoToneIcon fontSize="large" />
        </div>
        <div className="w-2/3 flex flex-col  ">
          {listInputs.map((item, i) => {
            const { label, key } = item;
            return (
              <InputText
                key={i}
                label={label}
                styleContainer={"mt-4"}
                onChange={(e) => {
                  const keyObject = key;
                  setValueInputs({
                    ...valueInputs,
                    [keyObject]: e.target.value,
                  });
                }}
              />
            );
          })}
        </div>
        <div className="mt-4">
          <Button
            variant="contained"
            fullWidth
            color="success"
            disabled={buttonDisable}
            onClick={async () => {
              await agregarPerros(valueInputs, user_id, {
                setUpdateData,
              });
            }}
          >
            Add Dog
          </Button>
        </div>
      </div>
    </section>
  );
}
