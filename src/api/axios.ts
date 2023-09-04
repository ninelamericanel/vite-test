import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

type Signal = object | undefined;

export const getDataForPage = async (pageParam = 1, signal?: Signal) => {
  const res = await api.get(`/todos?_page=${pageParam}`);
  return res.data;
};
