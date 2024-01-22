const apikey = '1a5887db70ceea3cc1d407c725daffb7';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector(".top input");
const searchBtn = document.querySelector(".top button")

async function checkwheather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    const imageChange=document.querySelector('.a-cloud-sun');

    if(data.weather[0].main=="Clear"){
        imageChange.src="images/sun.png"
    }
    else if(data.weather[0].main=="Mist"){
        imageChange.src="images/mist.png"
    }
    else if(data.weather[0].main=="Haze"){
        imageChange.src="images/haze.png"
    }
    else if(data.weather[0].main=="Rain"){
        imageChange.src="images/rain.png"
    }
    else if(data.weather[0].main=="Clouds"){
        imageChange.src="images/cloud.png"
    }


}


searchBtn.addEventListener('click', () => {
    checkwheather(searchBox.value);
})