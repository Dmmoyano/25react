import axios from "axios";

const instance = axios.create({
  baseURL: "https://pruebamundose.herokuapp.com/"
})

const sendEmail = async (dataConsole) => {
  const response = await instance({
    method: "post",
    url: "https:/laravelmundose.herokuapp.com/public",
    data: dataConsole,
  });

  return response;
};

export { sendEmail };