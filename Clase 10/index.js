function sumar(a,b){
    var c = a + b;
    document.getElementById("resultado").innerHTML= "resultado: " + c;

    var a =4;
    console.log(a);
    console.log(typeof(a));

    var b ="4";
    console.log(b);
    console.log(typeof(b));
    return c;
}


document.write((20 == 20)&&(19==18) + "<br>");
document.write((20 === "20")||(19==19) + "<br>");
document.write(!(20 > 10) + "<br>");
document.write((2 < 10)+"<br>");
document.write((20 != "20") + "<br>");
document.write((20 !== "20") + "<br>");
/*ternario*/
var edad=14
var resultado = (edad>=18)? "mayor de edad <br>":"Menor de edad <br>";
document.write("Ramiro tiene edad " +edad+" años, es "+resultado)
/*condicionales*/
if(edad>=18){
    document.write("Ramiro tiene "+edad+" años, es mayor de edad <br>")
}
else if(edad>15 && edad<18){
    document.write("Ramiro tiene "+edad+" años, es adolescente <br>")
}

else{
    document.write("Ramiro tiene "+edad+" años, es menor de edad <br>")
}
/* Switch */
var arreglo = 3;
switch (arreglo){
    case 2:
        document.write("Solicito 2 arreglos florales <br>")
        document.write(sumar(2,2))
        break;

    case 3:
        document.write("Solicito 0 arreglos florales <br>")
        document.write(sumar(3,3))
        break;
}
/*Bucles*/
var datos = ["Juan", "Pedro", "Lucía", "Fernanda"];
edades = [22,32,26,28]
for(let index = 0;index< datos.length; index++){
    document.write("<p>Me encuentro en la repeticion "+ index + "</p>");
    document.write("<p>Alumno " + datos[index] + " diga presente </p>");
}

document.write('<h2 style="background-color: aqua";>For of </h2>')

for(const element of datos){
    document.write("<p>Estudiante: "+ element+ " </p>")
}

var producto = {
    codigo: "A23F01",
    nombre: "Televisor",
    precio:2499.99,
    colores:["negro","plata"],
    calculadorIgv: function(){
        return this.precio*0.19;
    }
};
for(const propiedad in producto){
    if(producto.hasOwnProperty(propiedad)){
        const elemente = producto[propiedad];
        document.write(elemento+"<br>");
    }
}