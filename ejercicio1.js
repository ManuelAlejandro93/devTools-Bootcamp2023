function tratamientoPar(num){
    let string = num.toString();
    let arreglo = string.split("");
    for(let j=0;j<=(arreglo.length/2)-1;j++){
        if(arreglo[j]!==arreglo[arreglo.length-1-j]){
            return false
        } if (j===(arreglo.length/2)-1){
            return true
        }
    }
}


function tratamientoImpar(num){
    let string = num.toString();
    let arreglo = string.split("");
    
    for(let k=0;k<Math.floor(arreglo.length/2);k++)
    {
        if(arreglo[k]!==arreglo[(arreglo.length-1)-k]){
            return false
        } if (k===Math.floor(arreglo.length/2)){
            return true
        }
    }
}



function soyUnPalindromo (num){
    if(num%2===0){
        return tratamientoPar(num)
    } else {
        return tratamientoImpar(num)
    }   
}


function hallarSiguientePalindromo(n){
    for(let i=n;i>-1;i++){
        let sioNo=soyUnPalindromo(i);
        if(sioNo){
            return `El siguiente palindromo de ${n} es: ${i}`
        }
    }
}


console.log(tratamientoPar(11)); 
console.log(tratamientoImpar(188)); 
console.log(tratamientoImpar(191)); 
console.log(tratamientoPar(2541)); 
