function SearchWeather() {


let city = document.getElementById("search").value;



$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=65a2bcffc4a6717df9c1a7e298d9230f", 
function(data){
    console.log(data);

    document.getElementById("city").innerHTML = city;

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp) + "°";
    var weather = data.weather[0].description;
    var weather1 = weather.charAt(0).toUpperCase() + weather.slice(1);
    var feels_like = "Feels like " + Math.floor(data.main.feels_like) + "°";
    var minmax = Math.floor(data.main.temp_max) + "°/" + Math.floor(data.main.temp_min) + "°";

    $('.icon').attr("src",icon);            //ikonica
    $('.weather').append(weather1);          //opis
    $('.temp').append(temp);                //temperatura
    $('.feels_like').append(feels_like);    //subjetivni osjecaj
    $('.minmax').append(minmax);            //max_temp & min_temp

});

}

