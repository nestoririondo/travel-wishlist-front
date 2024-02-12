import { SERVER } from "../constants/server";
import axios from "axios";

export const fetchCountries = async () => {
  try {
    const response = await axios.get(`${SERVER}/countries/api`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
