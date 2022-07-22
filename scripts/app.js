const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) =>{
 

  const { cityDetails, weather } = data;

  details.innerHTML =`
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;c</span>
    </div>`;

    if( card.classList.contains('d-none')){
      card.classList.remove('d-none');
    };
};

const updateCity = async(city) =>{

 const cityDetails = await getCity(city);
 const weather = await getWeather(cityDetails.Key);
 
 return { cityDetails, weather};

};

cityForm.addEventListener('submit', e =>{

  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
    

});