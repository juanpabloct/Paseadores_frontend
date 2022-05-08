import axios from "axios";

export default async function agregarPerros(
  valores,
  idUser,
  { setUpdateData }
) {
  const data = await axios("http://localhost:4000/createDog", {
    method: "post",
    params: { body: JSON.stringify(valores), user_id: idUser },
  });
  setUpdateData(data.data);
}
