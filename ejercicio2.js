let arregloNumerico = [3,1,4,3,4,1,5,1,3,1];

let arregloLiteral = arregloNumerico.map(
    n=>n.toString()
)

function darFormatoAlNumero (arr){
    let telefonoNuevo = "";
    for(let i=0;i<arr.length;i++){
        if(i===0){
            telefonoNuevo+="(";
            telefonoNuevo+=arr[i];            
        } else if (i===3){
            telefonoNuevo+=")";
            telefonoNuevo+=" ";
            telefonoNuevo+=arr[i];
        } else if (i===6){
            telefonoNuevo+="-";
            telefonoNuevo+=arr[i];
        } else {
            telefonoNuevo+=arr[i];
        }
    }
    return telefonoNuevo;
}

console.log(darFormatoAlNumero(arregloLiteral));