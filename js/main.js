let urlFull = "http://quotes.stormconsultancy.co.uk/quotes.json";
let textoFrase = document.getElementById("textoFrase");
let autorFrase = document.getElementById("autorFrase");
let randomQuote = async () => {
  let arr = await fetch(urlFull)
    .then((data) => data.json())
    .then((data) => data);
  let randomNum = Math.floor(Math.random() * arr.length);
  llenarHTML(arr[randomNum]);
};


function llenarHTML(objeto) {
    textoFrase.innerHTML = objeto.quote;
    console.log(objeto.quote)
    autorFrase.innerHTML = objeto.author; 
    console.log(objeto.author)
}
