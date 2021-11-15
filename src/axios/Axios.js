import axios from "axios";

const instance = axios.create({
  baseURL: "https://front25watts.herokuapp.com/"
})

const sendEmail = async (dataConsole) => {
  const response = await instance({
    method: "post",
    url: "api/probando",
    data: dataConsole,
  });

  return response;
};

export { sendEmail };