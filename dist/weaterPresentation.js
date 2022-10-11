var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchWeatherFrom } from "./weatherService.js";
const cities = [
    {
        id: 1,
        city: "Santa Cruz",
        lat: "-17.8",
        long: "-63.1667"
    },
    {
        id: 2,
        city: "La Paz",
        lat: "-16.5",
        long: "-68.15"
    },
    {
        id: 3,
        city: "Cochabamba",
        lat: "-17.3895",
        long: "-66.1568"
    },
    {
        id: 4,
        city: "Oruro",
        lat: "-17.9833",
        long: "-67.15"
    },
    {
        id: 5,
        city: "Potosi",
        lat: "-19.5836",
        long: "-65.7531"
    },
    {
        id: 6,
        city: "Sucre",
        lat: "-19.0333",
        long: "-65.2627"
    },
    {
        id: 7,
        city: "Beni",
        lat: "-14",
        long: "-65.5"
    },
    {
        id: 8,
        city: "Tarija",
        lat: "-21.5",
        long: "-64"
    },
    {
        id: 9,
        city: "Pando",
        lat: "-11.3333",
        long: "-67.6667"
    },
];
const temperatureText = document.getElementById("temperature");
export const fetchWeather = (lat, lon) => {
    let currentWeather = fetchWeatherFrom(lat, lon);
    console.log(currentWeather);
};
export const loadList = () => __awaiter(void 0, void 0, void 0, function* () {
    let cities_list = document.getElementById("cities-list");
    cities.forEach((city) => {
        const liChild = document.createElement("li");
        const aChild = document.createElement("a");
        aChild.classList.add("dropdown-item");
        aChild.textContent = city.city;
        aChild.onclick = (event) => { fetchWeather(city.lat, city.long); };
        aChild.target = "_blank";
        liChild.appendChild(aChild);
        cities_list.appendChild(liChild);
    });
});
loadList();
fetchWeatherFrom("1", "2");
