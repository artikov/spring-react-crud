import httpClient from "../http-common.js";

//make get request to the server
const getAll = () => {
  return httpClient.get("/notes");
};

export default { getAll };
