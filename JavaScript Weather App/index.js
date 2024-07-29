let search = document.getElementById("search")
let searchButton = document.getElementById("search-button")
let cityName = document.getElementById("city-name")
let cityTemp = document.getElementById("city-temp")
let apiKey = "api"
let weatherInfo = document.querySelector(".weather-info")


let fetchWeather = async(city) => {
    try{
        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; // GET THE INFORMATION API
        let response = await fetch(weatherUrl) // GET THE INFORMATION FROM THE API
        if(!response.ok){ // IF RESPONSE IS OVER 200
            throw new Error("Could not find this information") // CREATES A NEW ERROR
        }
        let data = await response.json() // CREATE READABLE DATA
        cityName.innerText = `${data.name}`;
        cityTemp.innerText = `${Math.floor(data.main.temp - 273.15)}°C`;
    }
    catch(error){
        console.error(error)
        weatherInfo.innerHTML = `<img src="images/404.png" alt="404 Image"> <p>Could not find what you are looking for.</p>`
    }
};



searchButton.addEventListener("click", () =>{
    let city = search.value
    if(city){
        fetchWeather(city)
    }else{
        cityName.innerText = "Please enter a city";
        cityTemp.innerText = "";
    }
})