const ludzie=["Henryk","Jacel","Daniel","Epstein","Tusk"];
let gosc= window.prompt(`Jak sie nazwyasz: `);
let truee=ludzie.includes(gosc);
if (truee){
    window.alert(`Witam na imprezie ${gosc}`);
}
else{
    window.alert(`${gosc} nie został zaproszony`);
}