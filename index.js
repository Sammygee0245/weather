let h = document.querySelector("#hum");
let p = document.querySelector("#pres");
let w = document.querySelector("#wind");
let tz = document.querySelector("#timezone");
let lat = document.querySelector("#lat");
let lon = document.querySelector("#lon");
let tem = document.querySelector("#temp");
let cld = document.querySelector("#cloud");
let count = document.querySelector("#count");

let searchBtn = document.querySelector("#search_btn");

searchBtn.addEventListener("click", () => {
  let searchBox = document.querySelector("#search_box");
  let name1 = searchBox.value;

  async function getData() {
    const respond = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        name1 +
        "&appid=839a87cd2bf3ab32dbfde327d4b8cfa0&units=metric"
    );

    const data4 = await respond.json();

    console.log(data4);

    let wind_speed = `${data4.wind.speed}`;
    w.innerHTML = wind_speed + "m/s";

    let humidity = `${data4.main.humidity}`;
    h.innerHTML = humidity + "%";

    let pressure = `${data4.main.pressure}`;
    p.innerHTML = pressure + "N/" + "&#x33A1";

    let name = `${data4.name}`;
    tz.innerHTML = name;

    let coordlat = `${data4.coord.lat}`;
    lat.innerHTML = coordlat;
    let coordlon = `${data4.coord.lon}`;
    lon.innerHTML = coordlon;

    let temperature = `${data4.main.temp}`;
    tem.innerHTML = temperature + "&degC";
    document.querySelector("#wi").innerHTML = name1;

    let icon4 = `${data4.weather[0].icon}`;

    let iconurl = "https://openweathermap.org/img/w/" + icon4 + ".png";

    cld.setAttribute("src", iconurl);
    console.log(iconurl);

    let country = `${data4.sys.country}`;
    count.innerHTML = country;

    document.body.style.backgroundImage =
      "url('http://source.unsplash.com/1600x900/?" + name1 + "')";
  }

  getData();
});
