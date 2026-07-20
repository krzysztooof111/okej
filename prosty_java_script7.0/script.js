function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    let outpout=[];
    //Write your code here:
    
    if(n===1){
        outpout.push(1);
        return outpout
    }
    else{
        if(n===2){
        outpout.push(1);
        outpout.push(2);
        return outpout
        }
        else{
            let x=0;
            let e=1;
            for(let i=0 ; i>=n; i++){
               outpout.push(x)
               outpout.push(e)
               x++;
               e++;
            }
            return outpout;
        }
    }
    let f=fibonacciGenerator(128)
    console.log(f)
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

