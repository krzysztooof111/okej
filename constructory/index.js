
function Pracownik(name,surnmae,age, job , wage){
    this.name= name;
    this.surnmae= surnmae
    this.age= age;
    this.job= job;
    this.wage= wage;
    this.clean =function Cleaning(){
    console.log("Sprzatanie w toku")
}

}
let Henryk = new Pracownik("Henryk", "Wiśielski", 25, ["projektuje","doradza nizszym", "wali konia"], 100);
Henryk.clean();