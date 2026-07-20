let imie= window.prompt('Podaj swoje imie: ');
let nowe = imie.slice(0,1).toUpperCase() + imie.slice(1).toLowerCase();
window.alert(nowe);