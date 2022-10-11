const LINK = "api.openweathermap.org/data/2.5/weather?";
const KEY = "5bcb14e4112b3edf06ab910aaff0768a";
const KELVIN = 273;
export const fetchWeatherFrom = (lat, lon) => {
    const CONNECTION_STRING = `https://${LINK}lat=${lat}&lon=${lon}&appid=${KEY}`;
    console.log(CONNECTION_STRING);
    let result = {
        city: "Weather",
        temperature: "Temperature",
        iconId: "weather-icon-weather",
        description: "Temperature",
        country: "Weather",
    };
    fetch(CONNECTION_STRING)
        .then(res => res.json())
        .then(res => {
        result.city = res.name;
        result.iconId = res.weather[0].icon;
        result.description = res.weather[0].description;
        result.temperature = Math.floor(res.main.temp - KELVIN) + "";
        result.country = res.sys.country;
        return result;
    });
    return result;
};
