function drawX (n){

    let stringVacio="";
    let arrayAModificar;
    let arrayRespaldo;

    if (n<=0 || typeof n !== "number"){
        return console.log("Ingrese numeros enteros mayores a 0");
    } else if (!Number.isInteger(n)){
        console.log(`Tu numero ${n} será aproximado a ${Math.floor(n)}`);
        n=Math.floor(n);
    }


    for(let i=0;i<n;i++){
        stringVacio += " ";
    }

    arrayAModificar = stringVacio.split("");
    arrayRespaldo=[...arrayAModificar];

    for(let i=0;i<arrayAModificar.length;i++){
        let cadenaAImprimir="";
        arrayAModificar[i]="*";
        arrayAModificar[arrayAModificar.length-1-i]="*";
        cadenaAImprimir = arrayAModificar.join("");
        console.log(cadenaAImprimir);
        arrayAModificar=[...arrayRespaldo];
    }

    return null;
}

drawX(13.77777);