const currentWeatherDetails = document.getElementById('apiData');


function process(){
    var typed = document.getElementById("category").value;
    var link =`https://api.openweathermap.org/data/2.5/weather?q=${typed}&units=metric&appid=9b92a815e8ac59826a4ab16c1f308f93`;
    fetch (link)
    .then (res => res.json() )
    .then (data => showSearchedResult (data) );
}

function showSearchedResult(data){
    console.log (data.main);

    var city = document.getElementById("category").value;
let {humidity, feels_like, pressure, temp, temp_max, temp_min} = data.main;
let {main} = data.weather[0];

currentWeatherDetails.innerHTML = `   
<div class="card mx-auto" style="width: 18rem;">
<img src="`+ weatherImg(main)+`" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title text-center">${city}</h5>
  <p class="card-text">Feels Like: ${feels_like} <br>
               Humidity:  ${humidity} <br>
             Pressure: ${pressure} <br>
             Temperature: ${temp} <br>
             Maximum Temperature:  ${temp_max} <br>
             Minimum Temperature:  ${temp_min} <br>
             Weather: ${main} </p></p>
</div>
</div>`;

function weatherImg(main){
    if(main=="Clear"){
        image = "Images/clear.png"
        return image;
    }
    else if(main =="Clouds"){
        image = "/Images/clouds.png"
        return image;
    }
    else if(main =="Mist"){
        image = "/Images/mist.jpg"
        return image;
    }
    else if(main =="Smoke" ){
        image = "/Images/smoke.png"
        return image;
    }
    else{
        image="/Images/rain.svg"
        return image;
    }
}
    

}

var url = `https://api.openweathermap.org/data/2.5/weather?q=Dhaka&units=metric&appid=9b92a815e8ac59826a4ab16c1f308f93`;

function callAPI(){
    fetch (url)
    .then (res => res.json() )
    .then (data => showByDefault (data) );
   
}

callAPI();


function showByDefault(data){
    let {humidity, feels_like, pressure, temp, temp_max, temp_min} = data.main;
    let {main} = data.weather[0];

    currentWeatherDetails.innerHTML = `   
    <div class="card mx-auto" style="width: 18rem;">
    <img src="`+ weatherImg(main)+`" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title text-center">Dhaka</h5>
      <p class="card-text">Feels Like: ${feels_like} <br>
                   Humidity:  ${humidity} <br>
                 Pressure: ${pressure} <br>
                 Temperature: ${temp} <br>
                 Maximum Temperature:  ${temp_max} <br>
                 Minimum Temperature:  ${temp_min} <br>
                 Weather: ${main}</p></p>
    </div>
    </div>`;

    function weatherImg(main){
        if(main=="Clear"){
            image = "Images/clear.png"
            return image;
        }
        else if(main =="Clouds"){
            image = "/Images/clouds.png"
            return image;
        }
        else if(main =="Mist"){
            image = "/Images/mist.jpg"
            return image;
        }
        else if(main =="Smoke" ){
            image = "/Images/smoke.png"
            return image;
        }
        else{
            image="/Images/rain.svg"
            return image;
        }
    }
}