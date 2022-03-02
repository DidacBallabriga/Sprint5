"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
//nivell 1
let reportAcudits = [];
const loadJokes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://icanhazdadjoke.com/slack');
        let data = yield response.json();
        showDom(data);
        //console.log(data.attachments[0].text);
    }
    catch (error) {
        console.log(error);
    }
});
const dayMonthYear = new Date();
let date = dayMonthYear.toISOString();
let dom = (_a = document.getElementById("joke")) === null || _a === void 0 ? void 0 : _a.innerHTML;
function showDom(data) {
    dom = document.getElementById("joke").innerHTML = data.attachments[0].text;
    return dom;
}
class Joke {
    constructor(joke, score, date) {
        this.joke = joke;
        this.score = score;
        this.date = date;
        return { joke, score, date };
    }
}
var score = "0";
function loadScore(rang) {
    if (rang === 1) {
        score = "1";
    }
    else if (rang === 2) {
        score = "2";
    }
    else {
        score = "3";
    }
    if (dom !== undefined) {
        let newJoke = new Joke(dom, score, date);
        reportAcudits.push(newJoke);
    }
    loadJokes();
    return score;
}
// nivell 2
const loadTime = () => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const respon = yield fetch('https://www.metaweather.com/api/location/753692');
        const time = yield respon.json();
        const weatherState = time.consolidated_weather[0].weather_state_name;
        const actualTemp = time.consolidated_weather[0].the_temp;
        const iconWeather = time.consolidated_weather[0].weather_state_abbr;
        const iconUrl = "https://www.metaweather.com/static/img/weather/" + iconWeather + ".svg";
        console.log("weatherState ", weatherState);
        console.log("actualTemp ", actualTemp.toFixed(0));
        console.log("iconWeather ", iconWeather);
        let domTime = (_b = document.getElementById("timeApp")) === null || _b === void 0 ? void 0 : _b.innerHTML = `<img src="${iconUrl}"> <div class="h2"><h2>${actualTemp.toFixed(0)}°C</h2><br><h2>${weatherState}</h2></div>`;
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=index.js.map