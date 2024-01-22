const apikey = "dc16b1f9ceaf2ae6d6096349f910f2c6";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".top-content input");
const searchBtn = document.querySelector(".top-content  i");
const weatherImg = document.querySelector(".cloud-img");


async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp1").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".water-level").innerHTML = data.main.humidity + "%";
    document.querySelector(".kmph").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherImg.src = "image/clou7dy.png";
    } 
     else if(data.weather[0].main == "Clear"){
        weatherImg.src = "image/cloudy2.png";
     }
     else if(data.weather[0].main == "Rainfall"){
        weatherImg.src = "image/cloudy8.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherImg.src = "image/cloudy6.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherImg.src = "image/cloudy4.png";
    }
    else if(data.weather[0].main == "Haze"){
        weatherImg.src = "image/cloudy6.png";
    }
    else if(data.weather[0].main == "Cloudy"){
        weatherImg.src = "image/cloudy6.png";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();