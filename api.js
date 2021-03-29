import axios from "axios";

const api = axios.create({
  baseURL: "https://moonapi.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "df115aed1dmsh4ac4cca2578464ep16c576jsn3e2040c9228f",
    "x-rapidapi-host": "moonapi.p.rapidapi.com",
  },
});

export const moonApi = (timestamp) => api.get(`/${timestamp}`);
