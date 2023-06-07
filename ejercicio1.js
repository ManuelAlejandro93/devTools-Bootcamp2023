function buscarPalindromos(num){
    let string = num.toString();
    let arreglo = string.split("");
    for(let j=0;j<arreglo.length;j++){
        if(arreglo[j]!==arreglo[arreglo.length-1-j]){
            return false
        } 
    }
    return true;
}


function next_pal(n){
   if(n<=0 || (Number.isInteger(n)===false)){
        return "Por favor ingrese un numero entero positivo."
    }
    
    for(let i=n+1;i>-1;i++){
        let sioNo=buscarPalindromos(i);
        if(sioNo){
            return `El siguiente palindromo de ${n} es: ${i}`
        }
    }
}


console.log(next_pal(-6));
