//ARRAY DE QUOTES
var arrayQuotes = [];

//DOM
let textoFrase = document.getElementById("textoFrase");
let autorFrase = document.getElementById("autorFrase");

//PRUEBA
textoFrase.innerHTML = "HOLA";
autorFrase.innerHTML = "sdfsdfsdf";

//
textoFrase.innerHTML = "HOLA";

autorFrase.innerHTML = "HOLA";



//
let urlFull = "http://quotes.stormconsultancy.co.uk/quotes.json";

fetch(urlFull)
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
