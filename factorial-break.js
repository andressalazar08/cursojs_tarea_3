//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
var k=1;
var respuesta=1;
while(k<12){
    respuesta=respuesta*k;
    k++;
    if(k===11){
        break;
    }

}
console.log(respuesta);