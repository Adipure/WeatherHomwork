const APIkey ="ae38efa85aa51a29d76f31334b912676"


function getWeather(cityName){
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&${APIkey}`
axios.get(url)  
 .then(res => {

  console.log(res.data) 
  const weather = res.data
  const latitude = weather.city.coord.lat
  const longtitude = weather.city.coord.lon
  
 axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${APIkey}`)
   .then(res => {

    const uvi =res.data.current.uvi
    const city = weather.city.name
    const date = weather.list[0].dt_txt
    let current = {
     date: weather.list[0].dt_txt,
     temp: weather.list[0].main.temp,
     humid: weather.list[0].main.humidity,
     windS: weather.list[0].wind.speed,
     icon: weather.list[0].weather[0].icon,
     uvi = uvi
    }
    let day1 = {
     date: weather.list[8].dt_txt,
     temp: weather.list[8].main.temp,
     humid: weather.list[8].main.humidity,
     windS: weather.list[8].wind.speed,
     icon: weather.list[8].weather[0].icon
    }

    let day2 = {
     date: weather.list[16].dt_txt,
     temp: weather.list[16].main.temp,
     humid: weather.list[16].main.humidity,
     windS: weather.list[16].wind.speed,
     icon: weather.list[16].weather[0].icon
    }
    let day3 = {
     date: weather.list[24].dt_txt,
     temp: weather.list[24].main.temp,
     humid: weather.list[24].main.humidity,
     windS: weather.list[24].wind.speed,
     icon: weather.list[24].weather[0].icon
    }
    let day4 = {
     date: weather.list[32].dt_txt,
     temp: weather.list[32].main.temp,
     humid: weather.list[32].main.humidity,
     windS: weather.list[32].wind.speed,
     icon: weather.list[32].weather[0].icon
    }
    let day5 = {
     date: weather.list[39].dt_txt,
     temp: weather.list[39].main.temp,
     humid: weather.list[39].main.humidity,
     windS: weather.list[39].wind.speed,
     icon: weather.list[39].weather[0].icon
    }
    console.log(res.data);
    
    const currentElm= document.createElement('div')
    currentElm.innerHTML = `
    
    
    
    
    `

    documet.getElementById().append(currentElm)

 })
}
 document.getElementById("search-btn").addEventListener("click", event => 
 {
 event.preventDefault()
 const cityName = document.getElementById("location").value
 getWeather(cityName)

 })





