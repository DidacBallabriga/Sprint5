let reportAcudits: string[{}] = [];

const loadJokes = async () => {
    try{
        const response = await fetch('https://icanhazdadjoke.com/slack')
        let data = await response.json();
        showDom(data)
        console.log(data.attachments[0].text);
    } catch(error){
        console.log(error);
    }
}

const dayMonthYear = new Date();
let date = dayMonthYear.toISOString();
let dom:string = document.getElementById("joke")?.innerHTML;

function showDom(data:string){
    dom = document.getElementById("joke").innerHTML = data.attachments[0].text;
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
    loadJokes();
    return score;
}

