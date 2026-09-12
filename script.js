console.log("¡Portafolio cargado correctamente!");

// Animación suave al hacer click en los enlaces
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mensaje de bienvenida personalizado según la hora
const hora = new Date().getHours();
let saludo = "Hola";

if (hora < 12) {
    saludo = "Buenos días";
} else if (hora < 19) {
    saludo = "Buenas tardes";
} else {
    saludo = "Buenas noches";
}

console.log(saludo + ", bienvenido a mi portafolio de Juan Daniel Zelada");