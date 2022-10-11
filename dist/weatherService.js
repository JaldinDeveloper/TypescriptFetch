var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const LINK = "api.openweathermap.org/data/2.5/weather?";
const KEY = "5bcb14e4112b3edf06ab910aaff0768a";
const KELVIN = 273;
export const fetchWeatherFrom = (lat, lon) => __awaiter(void 0, void 0, void 0, function* () {
    const CONNECTION_STRING = `https://${LINK}lat=${lat}&lon=${lon}&appid=${KEY}`;
    let result = {
        city: "",
        temperature: "",
        iconId: "",
        description: "",
        country: "",
    };
    const promise = yield fetch(CONNECTION_STRING);
    const res = yield promise.json();
    result.city = res.name;
    result.iconId = res.weather[0].icon;
    result.description = res.weather[0].description;
    result.temperature = Math.floor(res.main.temp - KELVIN) + "";
    result.country = res.sys.country;
    return result;
});
