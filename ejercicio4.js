function fizzBuzz(n){
    if (typeof n!=="number" || !Number.isInteger(n)){
        return "Por favor ingrese un número válido.";
    }

    for(let i=1;i<=n;i++){
        if(i%3===0 && i%5===0){
            console.log("FizzBuzz"); 
        } else if(i%3===0){
            console.log("Fizz"); 
        } else if(i%5===0){
            console.log("Buzz");
        } else {
            console.log(i); 
        }
    }  
    return ""
}
 
console.log(fizzBuzz(1.6)); 