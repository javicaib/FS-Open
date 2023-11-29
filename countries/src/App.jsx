import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Country from "./Country";

const URL_API_COUNTRIES = "http://localhost:3001/countries";
function App() {
  const [countries, setCountries] = useState([]);
  const [countriesFiltred, setCountriesFiltred] = useState([]);

  useEffect(() => {
    axios
      .get(URL_API_COUNTRIES)
      .then((response) => setCountries(response.data));
  }, []);

  const handleChange = (event) => {
    if (countries.length === 0) return;

    const filtred = countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(event.target.value.toLowerCase()) 
    );
    setCountriesFiltred(filtred)
  };

  return (
    <>
      Find: <input type="text" onChange={handleChange} />
      <Country data={countriesFiltred} setCountriesFiltred={setCountriesFiltred} />
    </>
  );
}

export default App;
