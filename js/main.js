//DOM
let tituloNoticia = document.getElementById("articleTitle");
let contenidoNoticia = document.getElementById("articleP");
let fotoNoticia = document.getElementById("articleIMG");


const apiKey = "djGmUVY2p7uVirNFUoIUDryw2UKKpLci";
let urlFull = "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=" + apiKey;
let randomQuote = async () => {
  let arr = await fetch(urlFull)
    .then((data) => data.json())
    .then((data) => data);
  let randomNum = Math.floor(Math.random() * arr.length);
  console.log(arr);
  llenarHTML(arr);
};

function llenarHTML(objeto) {
  tituloNoticia.innerHTML = objeto.results[0].title;
  console.log(objeto.title);
  contenidoNoticia.innerHTML = objeto.results[0].abstract;
  console.log(objeto.abstract);
  fotoNoticia.src = objeto.results[0].multimedia[2].url;
}

randomQuote();
