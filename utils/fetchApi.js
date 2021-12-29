import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "36e3a3ed54mshf5fcfdfbc4871cbp1874d6jsn132e972deac5",
    },
  });
  return data;
};
