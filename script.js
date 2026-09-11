console.log("¡Mi portafolio está funcionando!");

const hora = new Date().getHours();
let saludo = "Hola";

if (hora < 12) {
    saludo = "Buenos días";
} else if (hora < 19) {
    saludo = "Buenas tardes";
} else {
    saludo = "Buenas noches";
}

console.log(saludo + ", bienvenido a mi portafolio");