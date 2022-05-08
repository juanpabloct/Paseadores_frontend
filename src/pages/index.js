import { useEffect, useState } from "react";
import IndexPropertyDogs from "../components/index.propertyDogs";
import IndexWalkerDogs from "../components/index.walkerDogs";
import Navbar from "../components/navbar";

export default function Index({ data, setDataUser }) {
  const [dataDogs, setDataDogs] = useState([]);
  useEffect(() => {
    setDataUser(data);
  }, [data]);
  try {
    if (data.response === "ok") {
      const propositoPlataforma = data.data[0].useplatform;
      const allInfoUser = data.data;
      const allInfoUserDogs = allInfoUser[1];
      return (
        <>
          <Navbar />
          {propositoPlataforma === "Property Dogs" ? (
            <IndexPropertyDogs datos={allInfoUser} setDataDogs={setDataDogs} />
          ) : (
            <IndexWalkerDogs datos={data} />
          )}
        </>
      );
    }
  } catch (error) {
    window.location.href = "/";
  }
}
