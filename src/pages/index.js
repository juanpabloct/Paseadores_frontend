import IndexPropertyDogs from "../components/index.propertyDogs";
import IndexWalkerDogs from "../components/index.walkerDogs";
import Navbar from "../components/navbar";

export default function Index() {
  const usuario = "dueño";
  return (
    <>
      <Navbar />
      {usuario !== "dueño" ? <IndexPropertyDogs /> : <IndexWalkerDogs />}
    </>
  );
}
