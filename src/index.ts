//nivell 1
let reportAcudits: string[{}] = [];

const loadJokesApi = async () => {
    try{
        const response = await fetch('https://icanhazdadjoke.com/slack')
        let data = await response.json();
        let dataJoke = data.attachments[0].text;
        showDom(dataJoke)
        //console.log(data.attachments[0].text);
    } catch(error){
        console.log(error);
    }
}

const dayMonthYear = new Date();
let date = dayMonthYear.toISOString();
let dom:string = document.getElementById("joke")?.innerHTML;

function showDom(data:string){
    dom = document.getElementById("joke").innerHTML = data;
    return dom;
}

class Joke{
    joke: string;
    score: string;
    date: string;
    constructor(joke:string,score:string,date:string){
       this.joke = joke;
       this.score = score;
       this.date = date;
       return {joke,score,date};
    }
}

var score:string ="0";
function loadScore(rang:number){
    if(rang===1){
        score = "1";
    }else if(rang===2){
        score = "2";
    }else{
        score = "3";
    }
    if(dom!==undefined){
    let newJoke = new Joke(dom,score,date);
    reportAcudits.push(newJoke)   
    }
    aleatorio();
    return score;
}

// nivell 2
const loadTime = async () => {
    try{
        const respon = await fetch('https://www.metaweather.com/api/location/753692');
        const time = await respon.json();
        const weatherState = time.consolidated_weather[0].weather_state_name;
        const actualTemp = time.consolidated_weather[0].the_temp;
        const iconWeather = time.consolidated_weather[0].weather_state_abbr;
        const iconUrl = "https://www.metaweather.com/static/img/weather/"+iconWeather+".svg"
        let domTime=document.getElementById("timeApp")?.innerHTML = `<img src="${iconUrl}"> <div class="h2"><h2>${actualTemp.toFixed(0)}°C</h2><br><h2>${weatherState}</h2></div>`;
    } catch(error){
        console.log(error);
    }
}
loadTime();
//Chuck Norris API
const chuckNorrisApi = async () => {
    try{
        const respon = await fetch('http://api.icndb.com/jokes/random');
        const joke = await respon.json();
        const chuckNorrisJoke = joke.value.joke;
        showDom(chuckNorrisJoke);
    } catch(error){
        console.log(error);
    }
}
//Geek Joke API
const geekJokeApi = async () => {
    try{
        const respon = await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
        const joke = await respon.json();
        const geekJoke = joke.joke;
        showDom(geekJoke);
    } catch(error){
        console.log(error);
    }
}

function aleatorio(){
    let number:number = Math.random()*3;
    if(number<1){
        chuckNorrisApi();
    } else if(number>1&&number<2){
        geekJokeApi();
    }
    else {
        loadJokesApi();
    }
}

