import sacarPerro from "../peticiones/sacarperro";

import devolver from "../peticiones/devolverperro";
import TargetDogs from "./targetDogs";

export default function IndexWalkerDogs({ datos }) {
  const values = datos.data[0];
  return (
    <main
      className="flex flex-col items-center "
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
        dogs={values}
        titleaction={"Take out Dog"}
        action={devolver}
      />
    </main>
  );
}
