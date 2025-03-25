import axios from "axios";

export const fetchData = async () => {
  try {
    let countryData = await axios.get("https://restcountries.com/v3.1/all");
    return countryData.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
