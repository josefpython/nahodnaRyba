function udelejRybovec(){
    let fishCount = prompt("Kolik ryb, KOLIK RYB", "12");

    fishCount = parseInt(fishCount);

    if(isNaN(fishCount)){
        document.getElementById("rybaci").innerHTML = "TAK TOHLE NENI ANI TROCHU CISLO NEDOSTANES ZADNOU RYBU A VYHLADOVIS"
    }else{
        let fishStrings = ['<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4yklH7zCXzVQ02vupRdckHiOnP5dwvUO2e9D6cTZh02LLHgFvdEj3WL9cdlmjbPaUlU&usqp=CAU">',
                            '<img src="https://obrazky.superia.cz/nahled-velky/ryba.png">',
                            '<img src="http://www.trapercz.cz/fotky37059/fotos/_vyr_11656sivan-americky-GABY-RYBA.png">',
                            '<img src="https://www.nicepng.com/png/detail/809-8094384_26-great-fish-meat-clipart-miruna-ryba-po.png">'];
        let finalString = "";
        
        for(let i=1;i<=fishCount;i++){
            finalString = finalString + fishStrings[Math.floor(Math.random()*fishStrings.length)]
        };
        
        document.getElementById("rybaci").innerHTML = finalString;
    }
}