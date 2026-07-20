let przyciski = document.querySelectorAll(".drum");
for (let i = 0; i < przyciski.length; i++) {
    przyciski[i].addEventListener("click", function(){
        let missic = this.innerHTML;
        miusic(missic);
        ssttyle(missic);
        
    }
        )
}
function miusic(miusic) {
            
            switch (miusic) {
                case "w":
                    let w = new Audio('./sounds/crash.mp3');
                    w.play();
                    break;
                case "a":
                    let a = new Audio('./sounds/kick-bass.mp3');
                    a.play();
                    break;
                case "s":
                    let s = new Audio('./sounds/snare.mp3');
                    s.play();
                    break;
                case "d":
                    let d = new Audio('./sounds/tom-1.mp3');
                    d.play();
                    break;
                case "j":
                    let j = new Audio('./sounds/tom-2.mp3');
                    j.play();
                    break;
                case "k":
                    let k = new Audio('./sounds/tom-3.mp3');
                    k.play();
                    break;
                case "l":
                    let l = new Audio('./sounds/tom-4.mp3');
                    l.play();
                    break;
            }
        }
document.addEventListener("keyup", function (event) {
    console.log(event);
   swiitche(event.key)
   ssttyle(event.key)


    }
);
function swiitche(keyys){
 switch (keyys) {
        case "s":
            let s = new Audio('./sounds/snare.mp3');
            s.play();
            break;

        case "w":
            let w = new Audio('./sounds/crash.mp3');
            w.play();
            break;
        case "a":
            let a = new Audio('./sounds/kick-bass.mp3');
            a.play();
            break;

        case "d":
            let d = new Audio('./sounds/tom-1.mp3');
            d.play();
            break;
        case "j":
            let j = new Audio('./sounds/tom-2.mp3');
            j.play();
            break;
        case "k":
            let k = new Audio('./sounds/tom-3.mp3');
            k.play();
            break;
        case "l":
            let l = new Audio('./sounds/tom-4.mp3');
            l.play();
            break;
}
}


function ssttyle(active){
    let przysik= document.querySelector(`.${active}`);
    przysik.classList.add("pressed");
    setTimeout(()=>{przysik.classList.remove("pressed")},300)
}
