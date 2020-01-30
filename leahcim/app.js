var a = "Hola Mundo";
var b = "hola mundo 10";

var c = a.length;//10
var d = b.length;//13

var text = ["hola" , " mundo", "ya ", "casi"];
var text1 = ["Otra", "cosa", "nueva"]; 
var text2 = [["hola" , " mundo"], ["ya ", "casi"]];


if (a > b){
    console.log("El primero es mayor: " + c);
} else {
    console.log("El segundo es mayor: " + d);
}


//.lenght()
//.push()
//.pop()
//.concat()


function activar() {
    console.log(this.text2);
}
