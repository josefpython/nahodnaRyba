function udelejRybovec(){
    let fishCount = prompt("Kolik ryb, KOLIK RYB", "12");

    fishCount = parseInt(fishCount);

    if(isNaN(fishCount)){
        document.getElementById("rybaci").innerHTML = "TAK TOHLE NENI ANI TROCHU CISLO NEDOSTANES ZADNOU RYBU A VYHLADOVIS"
    }else{
        let fishStrings = ['<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4yklH7zCXzVQ02vupRdckHiOnP5dwvUO2e9D6cTZh02LLHgFvdEj3WL9cdlmjbPaUlU&usqp=CAU">','<img src="https://obrazky.superia.cz/nahled-velky/ryba.png">'];
        let finalString = "";
        
        for(let i=1;i<=fishCount;i++){
            finalString = finalString + fishStrings[Math.floor(Math.random()*2)]
        };
        
        document.getElementById("rybaci").innerHTML = finalString;
    }
}