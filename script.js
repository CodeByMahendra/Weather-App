let api_key ="e89b405bd3bd2313deca9f80990836c2"


const search = document.querySelector("#search")
const btn = document.querySelector("#btn")
const wea = document.querySelector("#wea")




 async function  fetchWeatherData(city){

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`);
    var data = await response.json();
    console.log(data)
 

    updateWeatherUI(data)
}



const city_name = document.querySelector("#city");
const temp = document.querySelector("#temp")
const wind_speed = document.querySelector("#wind-speed")
const humidity =document.querySelector("#humidity")
const vis =document.querySelector("#visibility")

const img = document.querySelector("#image")
const dat = document.querySelector(".dat");


function updateWeatherUI(data){

    city_name.textContent =data.name
    temp.textContent = `${Math.round(data.main.temp)}°C`;
    wind_speed.textContent = `${data.wind.speed} km/h`
    humidity.textContent = `${data.main.humidity}%`
    vis.innerHTML = `${data.visibility / 1000}km`;
   

    const currentDate = new Date();
    console.log(currentDate)
    dat.innerHTML = currentDate.toDateString();
    

   wea.innerHTML =`
   <span id="decs">${data.weather[0].description}</span>
   <div id="image">
   <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">

</div>
   
   `

}






btn.addEventListener("click",(e)=>{
    fetchWeatherData(search.value);
    console.log(search.value)

    e.preventDefault();


   

})
