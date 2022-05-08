import axios from "axios";

export default function devolver(id) {
  axios("http://localhost:4000/devolverPerro", {
    method: "POST",
    params: { body: id },
  });
  console.log(id);
}
