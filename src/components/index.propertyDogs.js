import { useEffect, useState } from "react";
import sacarPerro from "../peticiones/sacarperro";
import ModalAddDog from "./modal.addDog";
import TargetDogs from "./targetDogs";

export default function IndexPropertyDogs({ datos, dataDogs, setDataDogs }) {
  const dogs = datos[1];
  const user = datos[0].user_id;
  const [updateData, setUpdateData] = useState();
  useEffect(() => {
    setDataDogs(updateData);
  }, []);
  const [show, setShow] = useState("hidden");
  const handleClose = () => setShow("hidden");
  const handleShow = () => setShow("fixed");
  const [valueInputs, setValueInputs] = useState();
  const listInputs = [
    { label: "Name of Dog", key: "name" },
    { label: "Description", key: "description" },
    { label: "Date of Birth", key: "dateofbirth" },
    { label: "Breed", key: "breed" },
    { label: "gender", key: "gender" },
    { label: "url image", key: "urlimage" },
  ];
  const [buttonDisable, setButtonDisable] = useState(true);
  useEffect(() => {
    valueInputs?.name?.length > 3 &&
    valueInputs?.description?.length > 5 &&
    valueInputs?.dateofbirth?.length > 3 &&
    valueInputs?.breed?.length > 3 &&
    valueInputs?.urlimage?.length > 3 &&
    valueInputs?.gender
      ? setButtonDisable(false)
      : setButtonDisable(true);
  }, [valueInputs]);

  return (
    <main
      className="flex flex-col items-center"
      style={{ backgroundColor: "rgba(239, 239, 239, 1)" }}
    >
      <section
        className="w-4/5 h-12 my-2 flex flex-col justify-center rounded-lg"
        style={{
          backgroundColor: "rgba(5, 29, 91, 1)",
        }}
      >
        <h1 className="text-center text-white text-2xl font-bold ">My Pets</h1>
      </section>
      <TargetDogs
        dogs={dogs}
        action={sacarPerro}
        titleaction={"I Need To walk"}
      />
      <section
        className="w-1/2 h-12 my-2 flex flex-col justify-center rounded-lg"
        style={{
          backgroundColor: "rgba(5, 29, 91, 1)",
        }}
      >
        <h1
          className="text-center text-white text-2xl font-bold hover:cursor-pointer"
          onClick={handleShow}
        >
          Add Dog
        </h1>
      </section>
      <ModalAddDog
        updateData={updateData}
        setUpdateData={setUpdateData}
        valueInputs={valueInputs}
        setValueInputs={setValueInputs}
        handleClose={handleClose}
        listInputs={listInputs}
        show={show}
        setButtonDisable={setButtonDisable}
        buttonDisable={buttonDisable}
        user_id={user}
      />
    </main>
  );
}
