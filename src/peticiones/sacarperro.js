const { default: axios } = require("axios");

export default async function sacarPerro(dog_id) {
  await axios("http://localhost:4000/sacarPerro", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    params: {
      body: dog_id,
    },
  });
}
