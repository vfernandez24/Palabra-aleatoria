//! Variables y elementos del DOM

//Lista palabras
const palabras = [
  "manzana", "sol", "cielo", "luna", "estrella", "montaña", "río", "mar", "fuego", "agua", 
  "nieve", "flor", "bosque", "camino", "piedra", "arena", "hoja", "viento", "lluvia", "trueno",
  "relámpago", "desierto", "ciudad", "puente", "edificio", "ventana", "puerta", "casa", "carretera", 
  "coche", "tren", "avión", "bicicleta", "libro", "página", "palabra", "pluma", "cuaderno", "pintura", 
  "cuadro", "escultura", "reloj", "sombra", "sonido", "eco", "silencio", "música", "ruido", "grito", 
  "susurro", "voz", "teléfono", "computadora", "ratón", "pantalla", "teclado", "altavoz", "auriculares", 
  "cámara", "fotografía", "video", "película", "teatro", "escenario", "actor", "artista", "escritor", 
  "poeta", "historia", "novela", "cuento", "poesía", "idioma", "lengua", "traducción", "diccionario", 
  "gramática", "oración", "palabra", "letra", "signo", "número", "símbolo", "planeta", "galaxia", "universo", 
  "cometa", "asteroide", "luz", "oscuridad", "claridad", "sombra", "brillo", "fuerza", "energía", "átomo", 
  "molécula", "célula", "bacteria", "virus", "espejo", "cristal", "plástico", "metal", "madera", "papel"
];

//Lista colores background
const colores = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF6", "#F6FF33", "#8A33FF", "#FF3380", "#33FF8A", "#33A1FF",
    "#FF33E6", "#FF8A33", "#33FFE6", "#FF33F6", "#E6FF33", "#A133FF", "#FF3357", "#33FF80", "#33FFA1", "#5733FF",
    "#33FF57", "#FF33A1", "#F633FF", "#33FFB8", "#FF5733", "#A1FF33", "#33FFD1", "#FF33D6", "#33C8FF", "#E633FF",
    "#FF5733", "#3357FF", "#FF33C6", "#33F6FF", "#FF3370", "#A1FF33", "#57FF33", "#33FFA8", "#FF33B6", "#FF5733",
    "#33F6B8", "#33E633", "#FF3378", "#33D633", "#FF33C1", "#33FFDA", "#FF3350", "#33F633", "#FF5733", "#33A8FF",
    "#FF33E1", "#F6FF33", "#33FFCD", "#FF33E8", "#33F6D1", "#A1FF33", "#FF5733", "#33FFD6", "#FF33AA", "#33F8FF",
    "#FF3375", "#A133FF", "#33F6C8", "#FF33D1", "#33E6F6", "#FF5733", "#33C1FF", "#FF33E6", "#33FFB1", "#33F633",
    "#FF33B8", "#33FFE1", "#FF5733", "#33F6FF", "#FF33A8", "#E633FF", "#33FF75", "#FF33F8", "#33D1FF", "#FF3355",
    "#33FFA8", "#FF5733", "#A1FF33", "#33FF88", "#FF33B1", "#33FFE1", "#FF33E0", "#F6FF33", "#33FFD1", "#FF33AA",
    "#33F633", "#FF5733", "#33F8FF", "#33FF70", "#FF33C8", "#33FFD6", "#FF3375", "#F6FF33", "#FF33AA", "#33FFEA"
  ];

//Otras variables
const max = 100
min = 1;

let color = 0
palabra = 'Hello'
i = 0;
console.log(palabra, color)

//Elementos DOM
const background = document.getElementById('background')
h1 = document.getElementById('palabra')
btn = document.getElementById('button')


//!Funcionamiento y logica web

function change() {
  i = Math.floor(Math.floor(Math.random() * (max - min + 1)) + min)

  color = colores[i]
  palabra = palabras[i]
  let shadow = '0px 0px 20px' + color

  console.log(color, palabra)

  background.style.backgroundColor = color;
  btn.style.backgroundColor = color;
  btn.style.boxShadow = shadow;
  h1.textContent = palabra;
}

change();