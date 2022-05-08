import axios from "axios";
export default async function crearUsuario(datos) {
  const data = JSON.stringify(datos);
  const crearUsuario = await axios("http://localhost:4000/createUser", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    params: {
      body: data,
    },
  });
  return crearUsuario;
}
