// import * as dotenv from "dotenv";
// dotenv.config({ path: __dirname+'/.env' });
import { IWeather } from "./IWeather";
    const LINK: string = "api.openweathermap.org/data/2.5/weather?";
    const KEY: string = "5bcb14e4112b3edf06ab910aaff0768a";
    const KELVIN = 273;

    export const fetchWeatherFrom = async (lat:string, lon:string):Promise<IWeather> => {
        const CONNECTION_STRING = `https://${LINK}lat=${lat}&lon=${lon}&appid=${KEY}`;
        let result: IWeather = {
            city: "",
            temperature: "",
            iconId: "",
            description: "",
            country: "",
        };
        const promise = await fetch(CONNECTION_STRING);
        const res = await promise.json();
        result.city = res.name;
        result.iconId = res.weather[0].icon;
        result.description = res.weather[0].description;
        result.temperature = Math.floor(res.main.temp - KELVIN)+"";
        result.country = res.sys.country;
        return result;
    }

    //api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5bcb14e4112b3edf06ab910aaff0768a
    //[-17.8, -63.1667]
    //https://api.openweathermap.org/data/2.5/weather?lat=-17.3895&lon=-66.1568&appid=5bcb14e4112b3edf06ab910aaff0768a