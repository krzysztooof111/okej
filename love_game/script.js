function Love(){
    let a = document.getElementById("imie_jedno").value;
    let b = document.getElementById("imie_drugie").value;
    let n = Math.floor(Math.random()*100);
    let text= document.getElementById("ilove");
    

    text.innerHTML= `<div style=" align-items:center; display: flex; justify-content: center; flex-direction:column;" ><h2>Szansa na miłość to</h2><h2>${a}❤️‍🔥${b}</h2><h1>${n}%</h1></div> <div id="textytexty"></div>`;

    let textytexty= document.getElementById("textytexty");
    if(n>90){
        textytexty.textContent=`Nie musisz sie martwić. ${a} i ${b} to miłość obiecana. Nic ich nie rozlączy nic ich nie zatrzyma. Tylko kochac nawazjem i segz`
    }
    else if(n>50){
        textytexty.textContent=`Miłość nie musi być zawsze łatwa. ${a} i ${b} beda miec wiele wesołych chwil aale wieksza fala nie powina ich powstzrymać`;
    }
    else if(n>10){
        textytexty.textContent=`Może nie wyjść, ale jesli ${a}  ${b} beda próbować beda mieć długo miłość cieższa fala może ich zatrzymać ale może wytzrymaja`;
    }
    else{
        textytexty.textContent=`Daaaaj sej spokoj ${a} i ${b} to innne charektery`;
    }

}


