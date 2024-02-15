import { SERVER } from "../constants/server";
import axios from "axios";

export const fetchCountries = async (token) => {
  try {
    const response = await axios.get(`${SERVER}/countries/api`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchStudents = async (token) => {
  try {
    const response = await axios.get(`${SERVER}/students`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const postCountry = async (input, token, setMessage, setInput) => {
  try {
    const response = await axios.post(`${SERVER}/countries/api`, input, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    setMessage(response.data.message);
    setInput({});
  } catch (error) {
    console.log(error);
    setMessage(error.response.data.message);
  }
};

export const postStudent = async (input, token, setMessage, setInput) => {
  try {
    const response = await axios.post(`${SERVER}/students`, input, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data);
    if (response.data) {
      setMessage("Student added successfully.");
      setInput({});
    }
  } catch (error) {
    console.log(error);
    setMessage(error.response.data.message);
  }
};

export const delCountry = async (token, code) => {
  try {
    const response = await axios.delete(`${SERVER}/countries/api/${code}`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const delStudent = async (token, code) => {
  try {
    const response = await axios.delete(`${SERVER}/students/${code}`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (userData, setMessage) => {
  try {
    const response = await axios.post(`${SERVER}/users`, userData);
    setMessage(`User id ${response.data._id} created`)
    console.log(response.data)
  } catch (error) {
    console.log(error);
    setMessage(error.response.data.message)
  }
};