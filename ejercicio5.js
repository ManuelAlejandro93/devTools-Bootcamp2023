let n = 3;
let stringVacio="";

for(let i=0;i<n;i++){
    stringVacio += " ";
}

// pasa.


let arrayVacio = stringVacio.split("");
//pasa.

let arrayRespaldo=[...arrayVacio];
//pasa.


for(let i=0;i<arrayVacio.length;i++){
    let cadenaAImprimir;
    arrayVacio[i]="X";
    arrayVacio[arrayVacio.length-1-i]="X";
    cadenaAImprimir = arrayVacio.join("");
    console.log(cadenaAImprimir);
    arrayVacio=[...arrayRespaldo];
}