import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    console.log("RESPONSE:", response);
    console.log("RESPONSE DATA:", response.data);
    return response.data ? response.data : { message: "Success" };
  } catch (e) {
    console.error("tryCatchFetch ERROR:", e.response ? e.response.data : e);
    return null;
  }
};

const PlaygroundAPI = {};

PlaygroundAPI.getAllStates = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}states/`));
};

export default PlaygroundAPI;
