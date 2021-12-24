const currentWeatherItemsEl = document.getElementById('apiData');


function process(){

    var typed = document.getElementById("category").value;

    var link =`https://api.openweathermap.org/data/2.5/weather?q=${typed}&appid=9b92a815e8ac59826a4ab16c1f308f93`;

    fetch (link)
    .then (res => res.json() )
    .then (data => showResult (data) );
   

}


function showResult(data){
    console.log (data.main);

let {humidity, feels_like, pressure, temp, temp_max, temp_min} = data.main;

currentWeatherItemsEl.innerHTML = `
        Feels Like: ${feels_like} <br>
        Humidity:  ${humidity} <br>
       Pressure: ${pressure} <br>
       Temperature: ${temp} <br>
       Maximum Temperature:  ${temp_max} <br>
       Minimum Temperature:  ${temp_min} <br> 
        ` ;
    

}

var url = `https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=9b92a815e8ac59826a4ab16c1f308f93`;

function callAPI(){
    fetch (url)
    .then (res => res.json() )
    .then (data => showDefault (data) );
   
}

callAPI();


function showDefault(data){
    let {humidity, feels_like, pressure, temp, temp_max, temp_min} = data.main;

    currentWeatherItemsEl.innerHTML = `   
    <div class="card mx-auto" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Feels Like: ${feels_like} <br>
                   Humidity:  ${humidity} <br>
                 Pressure: ${pressure} <br>
                 Temperature: ${temp} <br>
                 Maximum Temperature:  ${temp_max} <br>
                 Minimum Temperature:  ${temp_min} <br></p></p>
    </div>
    </div>`;
       
}