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
let reportAcudits = [];
const loadJokes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://icanhazdadjoke.com/slack');
        const data = yield response.json();
        showDom(data);
        console.log(data.attachments[0].text);
    }
    catch (error) {
        console.log(error);
    }
});
const dayMonthYear = new Date();
let date = dayMonthYear.toISOString();
var rang = "0";
function loadScore(score) {
    if (score === 1) {
        rang = "1";
    }
    else if (score === 2) {
        rang = "2";
    }
    else {
        rang = "3";
    }
    loadJokes();
    return rang;
}
function showDom(data) {
    var _a;
    let newJoke = new Joke(data.attachments[0].text, rang, date);
    reportAcudits.push(newJoke);
    return (_a = document.getElementById("joke")) === null || _a === void 0 ? void 0 : _a.innerHTML = data.attachments[0].text;
}
class Joke {
    constructor(joke, score, date) {
        this.joke = joke;
        this.score = score;
        this.date = date;
        return { joke, score, date };
    }
}
//# sourceMappingURL=index.js.map