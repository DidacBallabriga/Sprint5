const loadJokes = async () => {
    try{
        const response = await fetch('https://icanhazdadjoke.com/slack')
        const data = await response.json();
        console.log(data.attachments[0].text);
        document.getElementById("joke")?.innerHTML = data.attachments[0].text;
    } catch(error){
        console.log(error);
    }
}



