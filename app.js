const apikey="6a849bcbf0ccc24358110d8bf9450eb0";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".ci");
const searchbtn=document.querySelector(".bt");
const weathericon=document.querySelector(".weathericon")
const heading=document.querySelector(".heading")
async function checkweather(city){
    const response= await fetch(apiurl + city +`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =data.wind.speed +"Km/hr";
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C";
    console.log(data.weather[0].main)
    if (data.weather[0].main=="Rain"){
        weathericon.src="rain.png";
        heading.innerHTML="It's Rainy"

    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="clear.png";
        heading.innerHTML="Clear Sunny"
    }
    else if(data.weather[0].main=="Clouds" && "Thunderstrom"){
        weathericon.src="clouds.png";
        heading.innerHTML="Cloudy and Thunderstrom"
    }
    else if(data.weather[0].main=="drizzle"){
        weathericon.src="drizzle.png";
        heading.innerHTML="Drizzling..."
    }
    else if(data.weather[0].main=="humidity"){
        weathericon.src="clear.png";
        heading.innerHTML="Humidity"
    }
    else if(data.weather[0].main=="mist"){
        weathericon.src="mist.png";
        heading.innerHTML="Mist"
    }
    else if(data.weather[0].main=="snow"){
        weathericon.src="snow.png";
        heading.innerHTML="Snow"
    }
    else if(data.weather[0].main=="Thunderstorm"){
        weathericon.src="weather-storm.png";
        heading.innerHTML="Thunderstrom"
    }
    

}
searchbtn.addEventListener("click",()=>{
 
    checkweather(searchbox.value);
})
 
 
