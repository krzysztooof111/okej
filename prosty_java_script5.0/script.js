let liczby =[];
for(let i=1; i<=100; i++){
if(i%3===0 && i%5===0){
    liczby.push("FizzBuzz");
}
else if(i%5===0){
    liczby.push("Buzz");
}
else if(i%3===0){
    liczby.push("Fizz")
}
else{
    liczby.push(i);
}
}
console.log(liczby);