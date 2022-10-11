import { ICity } from "./ICity";
import { IWeather } from "./IWeather";
import {fetchWeatherFrom} from "./weatherService.js"
const cities: Array<ICity> = [
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


export const fetchWeather = (lat:string, lon:string) => {
    let currentWeather:IWeather = fetchWeatherFrom(lat, lon);
    //temperatureText?.textContent = currentWeather.description + " ";
    console.log(currentWeather);
    
}

export const loadList = async () => {
    let cities_list: HTMLElement = document.getElementById("cities-list")!;
    cities.forEach((city:ICity) => {
        const liChild = document.createElement("li");
        const aChild = document.createElement("a");
        aChild.classList.add("dropdown-item");
        aChild.textContent = city.city;
        //aChild.setAttribute("onclick",`hello('${city.city}')`);
        //aChild.href = `hello(${city.city})`; 
        aChild.onclick = (event) => { fetchWeather(city.lat,city.long);};
        aChild.target = "_blank";
        liChild.appendChild(aChild);
        cities_list.appendChild(liChild);
    });
};

// export const fetch = () => {
//     fetchWeatherFrom(latitude, longitude);
// }

// export default function fetchWeatherFrom(lat:string, lon:string):void {
//     fetch("https://pokeapi.co/api/v2/pokemon")
//                .then(res => res.json())
//                .then(res => {
//                 console.log(JSON.stringify(res));
//                })
// }
loadList();
fetchWeatherFrom("1","2");