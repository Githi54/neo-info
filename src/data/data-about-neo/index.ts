import axios from "axios";
import { AxiosResponse } from "../../types/axios-types";

const API_KEY=`PXjG2k4gTiQT1uLnemaLCDAX3RDa7jRbL69WIROx`;

export const getNeoInfo = async (startDate: string) => {
  try {
    const response: AxiosResponse | undefined = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&api_key=${API_KEY}`
    );

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
