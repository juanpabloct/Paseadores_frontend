import axios from "axios";

export default async function Acceder(data, { setDogs }) {
  data = JSON.stringify(data);
  const perros = await axios("http://localhost:4000/login", {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    params: {
      body: data,
    },
  });
  setDogs(perros.data);
}
