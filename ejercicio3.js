let arr=["Juan","Maria","Pedro","Juan","Maria","Maria","Eliecer"];
// console.log(arr);

function countNameRepetitions(a){
    let b=a;
    // console.log(a);//Primera prueba. //Pasa.
    let textoGenerico = "";
    // console.log(textoGenerico);//Segunda prueba. //Pasa.
    const output = {};
    // console.log(output); //Tercera prueba. //Pasa.
    for(let i=0;i<a.length;i++){
        textoGenerico=""; // console.log(textoGenerico); //Cuarta prueba. pasa.
        for(let j=0;j<b.length;j++){
            if(a[i]===b[j]){
                textoGenerico+="*";
            }
            output[`${a[i]}`]=textoGenerico;
        }   
    }
    return output;
}

console.log(countNameRepetitions(arr));