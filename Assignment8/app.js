let text = document.querySelector("input");
let btn = document.getElementById("btn");
let weather = document.getElementById("weather");
let loc = document.getElementById("location");
let speed = document.getElementById("speed");
let temp = document.getElementById("temp");
let minmax = document.getElementById("minmax");
let time = document.getElementById("time");
let body = document.querySelector("body");
start();
function start() {
  getweather("delhi");
}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let input = text.value;
  getweather(input);
  text.value = "";
});
function getweather(input) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=2ecb730b54cc0e1000d571b42c1733b9`
  )
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      let txt = data.weather[0].description;
      weather.innerHTML = txt;
      txt = data.sys.country;
      loc.innerHTML = input.toUpperCase() + "," + txt;
      txt = data.wind.speed;
      speed.innerHTML = txt + " km/hr ";
      txt = parseInt(data.main.temp - 273);
      temp.innerHTML = txt + "°C";
      txt = parseInt(data.main.temp_min - 273);
      let txt2 = parseInt(data.main.temp_max - 273);
      minmax.innerHTML = txt + "°C(min) | " + txt2 + "°C(max)";

      const str = weather.innerHTML;
      console.log(str);

      if (str.includes("cloud")) {
        body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1585088767603-ee684c611b0c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3VkeSUyMHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
      } else if (str.includes("mist") || str.includes("fog")) {
        body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1438803235109-d737bc3129ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGZvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
      } else if (str.includes("clear")) {
        body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80')";
      } else if (str.includes("snow")) {
        body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1522434152110-15f9d8292543?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c25vd2ZhbGx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
      } else if (str.includes("drizzle") || str.includes("sand")) {
        body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1616272963049-da2d8efc0c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHNhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')";
      } else if (str.includes("thunderstorm") || str.includes("tornado")) {
        body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bmRlcnN0b3JtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
      } else if (str.includes("rain")) {
        body.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
      } else if (str.includes("haze") || str.includes("smoke")) {
        body.style.backgroundImage =
          "url('https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF6ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
}
