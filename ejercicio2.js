let arregloNumerico = [3,1,4,3,4,1,5,1,3,1];

let arregloLiteral = arregloNumerico.map(
    n=>n.toString()
)

function formatear (arr){
    let telefonoNuevo = "";
    
    if(arr.length !== 10){
        return "Su telefono tiene un numero incorrecto de digitos."
    }

    else {
        let areTheyLessThan10 = arr.every(n=>n<10);
        let areTheyInteger= arr.every(n=>Number.isInteger(n))
        
        if((!areTheyLessThan10) || (!areTheyInteger)){
            return "Digitacion incorrecta, ingrese el numero nuevamente."
        }

        else {
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
        }
    }
    
    return telefonoNuevo;
}


console.log(formatear(arregloNumerico));

