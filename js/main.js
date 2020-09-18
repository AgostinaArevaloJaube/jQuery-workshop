let urlFull = "http://quotes.stormconsultancy.co.uk/quotes.json";
<<<<<<< HEAD

=======
let textoFrase = document.getElementById("textoFrase");
let autorFrase = document.getElementById("autorFrase");
>>>>>>> ce0b8f038de4743415fb64b9ac1d66880e6d229a
let randomQuote = async () => {
  let arr = await fetch(urlFull)
    .then((data) => data.json())
    .then((data) => data);
  let randomNum = Math.floor(Math.random() * arr.length);
  llenarHTML(arr[randomNum]);
};
<<<<<<< HEAD
=======


function llenarHTML(objeto) {
    textoFrase.innerHTML = objeto.quote;
    console.log(objeto.quote)
    autorFrase.innerHTML = objeto.author; 
    console.log(objeto.author)
}
>>>>>>> ce0b8f038de4743415fb64b9ac1d66880e6d229a
