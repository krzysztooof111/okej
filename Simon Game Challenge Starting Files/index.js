let levelup= new Audio('./sounds/universfield-level-up-06-370051.mp3')
let poziom=1;
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePatern = [];
function NextSequence() {
    let randomNumber = Math.floor((Math.random() * 4))
    let randomChosenColor = buttonColors[randomNumber];
    gamePatern.push(randomChosenColor);
    gamimg();

}
function gamimg() {
    for (let i = 0; i < gamePatern.length; i++) {
     setTimeout( function(){   $(`div #${gamePatern[i]}`).animate({ opacity: 0.1 }, 300).animate({ opacity: 1 }, 300)
        let audio = new Audio(`./sounds/${gamePatern[i]}.mp3`)
        audio.play();}, i*700);
       
    }
}

$("body").keyup(function (eventa) {
    if ($("h1").text() === "Press A Key to Start") {
        $("h1").animate({ opacity: 0.25 }).text(`Level ${poziom}`).animate({ opacity: 1 });
        NextSequence();
        console.log(gamePatern);

        let c = 0;

$(".btn").click(function () {
    let clickedId = this.id;
    
    $(`#${clickedId}`).animate({opacity:0.2},300).animate({opacity:1},300);
    
    if (clickedId === gamePatern[c]) {
        let message = new Audio(`./sounds/${gamePatern[c]}.mp3`);
        message.play();
        c++;
    } else {
        let error = new Audio("./sounds/wrong.mp3");
        error.play();
        $("h1").animate({ opacity: 0.25 }).text(`Przegrałeś zrefreszuj aby zagrac dalej`).animate({ opacity: 1 });
        c=-2000;
        return;
    }

    if (c === gamePatern.length) {
        poziom++;
        c = 0;

        $("h1").animate({ opacity: 0.25 },500).text(`Level ${poziom}`).animate({ opacity: 1 },500);
        levelup.play();

       setTimeout( NextSequence, 800)
       
    }
});


    }
})

