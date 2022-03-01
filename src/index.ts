let reportAcudits: string[] = [];

const loadJokes = async () => {
    try{
        const response = await fetch('https://icanhazdadjoke.com/slack')
        const data = await response.json();
        showDom(data)
        console.log(data.attachments[0].text);
    } catch(error){
        console.log(error);
    }
}

const dayMonthYear = new Date();
let date = dayMonthYear.toISOString();

var rang:String ="0";
function loadScore(score:number){
    if(score===1){
        rang = "1";
    }else if(score===2){
        rang = "2";
    }else{
        rang = "3";
    }
    loadJokes();
    return rang;
}

function showDom(data){
    let newJoke = new Joke(data.attachments[0].text,rang,date);
    reportAcudits.push(newJoke)
    return document.getElementById("joke")?.innerHTML = data.attachments[0].text;
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

