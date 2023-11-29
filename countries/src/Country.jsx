/* eslint-disable react/prop-types */
function Country({ data }) {
  if (data.length >= 10) return <div>Too Many Matches</div>;
  if (data.length <= 10 && data.length !== 0 && data.length !== 1)
    return <ListCountry data={data} />;
  if (data.length === 1) return <OnlyCountry data={data}/>;
}
export default Country;

export function ListCountry({ data }) {
  console.log(data);
  return (
    <ul>
      {data.map((country) => {
        return <li key={country.name.common}>{country.name.common}</li>;
      })}
    </ul>
  );
}
export function OnlyCountry({data}) {
 const country = data[0]
  return <div>
    <h1>{country.name.common}</h1>
    <h2>Capital : {country.capital}</h2>
    <h2>Population : {country.population}</h2>
    <h2>Languages : </h2>
    <Languages data={country.languages}/>
    <img src={country.flags.png} alt={country.flags.alt}></img>
  </div>;
}
function Languages({ data }) {
    console.log();
  
    return (
      <ol>
      {
        Object.values(data).map(d=>{
            return <li key={d}> {d}</li>  
        })
      }
      </ol>
      
   
     )
  }