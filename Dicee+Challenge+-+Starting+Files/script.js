function Losuj() {
    let zdj1 = document.querySelector(".img1");
    let zdj2 = document.querySelector(".img2");
    let winner = document.querySelector("#winner p");

    let n = Math.floor(Math.random() * 6 + 1);
    let p = Math.floor(Math.random() * 6 + 1);
    console.log(n);
    console.log(p);
    zdj1.src = `./images/dice${n}.png`;

    zdj2.src = `./images/dice${p}.png`;

    if(n>p){
        winner.textContent="The Player One Wins"
    }
    else if(p>n){
        winner.textContent="The Player TWo Wins"
    }
    else{
        winner.textContent="The Draw"
    }
}
