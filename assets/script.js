const APIkey ="ae38efa85aa51a29d76f31334b912676"


document.getElementById("search-btn").addEventListener("click", event => {
  event.preventDefault()
  document.getElementById('today').innerHTML=""
  document.getElementById('future').innerHTML=""
  const cityName = document.getElementById("location").value

  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=ae38efa85aa51a29d76f31334b912676`)
 .then(res => {
   
  const weather = res.data
  console.log(res.data)
   let latitude = weather.city.coord.lat
   let longitude = weather.city.coord.lon

   axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=ae38efa85aa51a29d76f31334b912676`)
   .then(resp => {
    
    let today = resp.data
    const uvi = resp.data.current.uvi
    const city = weather.city.name
    
    let current = {
     date: weather.list[0].dt_txt,
     temp: weather.list[0].main.temp,
     humid: weather.list[0].main.humidity,
     winds: weather.list[0].wind.speed,
     icon: weather.list[0].weather[0].icon,
     uvi : uvi
    }
    let day1 = {
     date: weather.list[8].dt_txt,
     temp: weather.list[8].main.temp,
     humid: weather.list[8].main.humidity,
     winds: weather.list[8].wind.speed,
     icon: weather.list[8].weather[0].icon
    }

    let day2 = {
     date: weather.list[16].dt_txt,
     temp: weather.list[16].main.temp,
     humid: weather.list[16].main.humidity,
     winds: weather.list[16].wind.speed,
     icon: weather.list[16].weather[0].icon
    }
    let day3 = {
     date: weather.list[24].dt_txt,
     temp: weather.list[24].main.temp,
     humid: weather.list[24].main.humidity,
     winds: weather.list[24].wind.speed,
     icon: weather.list[24].weather[0].icon
    }
    let day4 = {
     date: weather.list[32].dt_txt,
     temp: weather.list[32].main.temp,
     humid: weather.list[32].main.humidity,
     winds: weather.list[32].wind.speed,
     icon: weather.list[32].weather[0].icon
    }
    let day5 = {
     date: weather.list[39].dt_txt,
     temp: weather.list[39].main.temp,
     humid: weather.list[39].main.humidity,
     winds: weather.list[39].wind.speed,
     icon: weather.list[39].weather[0].icon
    }
    console.log(res.data);
    
    const currentElm= document.createElement('div')
    currentElm.innerHTML = `
        <div class= "currentday">
            <h1>Current</h1>
            <h3>City: ${city} <img src="http://openweathermap.org/img/w/${current.icon}.png" alt="icon"></h3>
            <h3>Temperature: ${current.temp}</h3>
            <h3>Humidity: ${current.humid}</h3>
            <h3>Winds: ${current.winds}</h3>
            <h3>UVI: ${uvi}</h3>
          </div>
    `

    document.getElementById('today').append(currentElm)


    let forecasts = [day1, day2, day3, day4, day5]

    document.getElementById('forecast').innerHTML = ''
    forecasts.forEach(day => {
      const forecastElem = document.createElement('div')
      forecastElem.className = 'col-md-3 mb-3'
      forecastElem.innerHTML = `
            <div class="card" style="width: 10rem;">
            <img src="http://openweathermap.org/img/w/${day.icon}.png" class="card-img-top" alt="icon">
            <div class="card-body">
            <h5 class="card-title">${day.date}</h5>
            <p class="card-text">            
            <h3>temp: ${day.temp}</h3>
            <h3>humid: ${day.humid}<h3>
            <h3>wind: ${day.winds}</h3></p>
            </div>
            </div>
            </div>
        `
       document.getElementById('future').append(forecastElem)
      
     })
 })
})
})