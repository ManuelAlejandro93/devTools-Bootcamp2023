function drawX (n){

    let stringVacio="";
    let arrayAModificar;
    let arrayRespaldo;

    if(n%2===0){
        n--;
        console.log(`Tu numero fue aproximado a ${n}.`);
    } else if (n<=0){
        return "Ingrese numeros enteros mayores a 0"
    } else if (!Number.isInteger(n)){
        n=Math.floor(n);
        if(n%2===0){
            n--;
        }

        console.log(`Tu numero fue aproximado a ${n}`);
    }


    for(let i=0;i<n;i++){
        stringVacio += " ";
    }

    arrayAModificar = stringVacio.split("");
    arrayRespaldo=[...arrayAModificar];


    for(let i=0;i<arrayAModificar.length;i++){
        let cadenaAImprimir="";
        arrayAModificar[i]="X";
        arrayAModificar[arrayAModificar.length-1-i]="X";
        cadenaAImprimir = arrayAModificar.join("");
        console.log(cadenaAImprimir);
        arrayAModificar=[...arrayRespaldo];
    }

    return null;
}

drawX(21);