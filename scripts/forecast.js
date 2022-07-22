const key = 'e7gRRKizDmsP2hak5y2ADZY9dgFRCTT0';

// // get weather info
 const getWeather = async (location) =>{

 const base ='http://dataservice.accuweather.com/currentconditions/v1/';
 const query = `${location}?apikey=${key}`;

 const response = await fetch(base + query);
 const data = await response.json();

  return data[0];

//  console.log(data);

};

// get city info
const getCity = async (city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
  // console.log(data);
  

} ;

getCity('lagos').then(data =>{
  return getWeather(data.Key);})
  .then(data => {
    console.log(data);
  })
  .catch( err => {
    console.log(err);
  });
