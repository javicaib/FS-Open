import axios from "axios";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
function Country({ data, setCountriesFiltred }) {
  if (data.length >= 10) return <h3>Too Many Matches</h3>;
  if (data.length <= 10 && data.length !== 0 && data.length !== 1)
    return (
      <ListCountry data={data} setCountriesFiltred={setCountriesFiltred} />
    );
  if (data.length === 1) return <OnlyCountry data={data} />;
}
export default Country;

export function ListCountry({ data, setCountriesFiltred }) {
  const handleClick = (event) => {
    const filtred = data.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setCountriesFiltred(filtred);
  };

  return (
    <ul>
      {data.map((country) => {
        return (
          <li key={country.name.common}>
            {country.name.common}{" "}
            <button value={country.name.common} onClick={handleClick}>
              Show
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export function OnlyCountry({ data }) {
  const country = data[0];
  const { latlng } = country;

  const [wheather, setWeather] = useState();
  const [loading, setLoading] = useState(true);
  const apiKey = "YBH3KURCW6VPEACKLHM6NQF6E";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latlng[0]},${latlng[1]}?key=${apiKey}`;

  useEffect(() => {
    axios.get(url).then((response) => {
        setWeather(response.data)
        setLoading(false)
    });
  }, [url]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <h2>Capital : {country.capital}</h2>
      <h2>Population : {country.population}</h2>
      <h2>Languages : </h2>
      <Languages data={country.languages} />
      <img src={country.flags.png} alt={country.flags.alt}></img>
      {loading ? (
        <div>Loading Weather</div>
      ) : (
        <div>
          <h2>Weather in : {country.name.common}</h2>
          <h3>Description : {wheather.days[0].description} </h3>
          <h3>Temperature :  {((wheather.days[0].temp -32) * (5/9)).toFixed(2)} °C </h3>
          <h3>Wind : {wheather.days[0].windspeed} KM/H</h3>
        </div>
      )}
    </div>
  );
}
function Languages({ data }) {
  console.log();

  return (
    <ol>
      {Object.values(data).map((d) => {
        return <li key={d}> {d}</li>;
      })}
    </ol>
  );
}
