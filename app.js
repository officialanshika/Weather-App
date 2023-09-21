const apiKey="51324de20ea630fe9620305e3227dd14";
const form = document.querySelector("form");

form.addEventListener('submit',function(e){
    e.preventDefault();
    const cityName = document.getElementById('city-name').value;
    getWeatherData(cityName);
})

async function getWeatherData(cityName){
    try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;
    const response = await fetch(url);
    const data=await response.json();
    showWeatherInfo(data);
    }catch(err){
        alert('Sorry! City not found...!! ');
    }
}

function showWeatherInfo(data){
    console.log(data);
    let imgIcon="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML=`
    <div class="d-flex flex-column text-center mt-5 mb-4">
    <h3>Country code : ${data.sys.country}</h3>
    <h5>City name : ${data.name}</h5>
    <p>Lattitude : ${data.coord.lat}&deg;</p>
    <p>Longitude : ${data.coord.lon}&deg;</p>
    <p>Temperature : ${data.main.temp}F | ${Math.round(data.main.temp-273.15)}&deg;C</p>
    <p>Humidity : ${data.main.humidity}%</p>
    <p>Air Pressure : ${data.main.pressure} hPa</p>
    <p>Weather : ${data.weather[0].description}<img src=${imgIcon} height=25 width=50/></p>
    <p>Wind Speed : ${data.wind.speed} m/s</p>
 </div>
    `;
}