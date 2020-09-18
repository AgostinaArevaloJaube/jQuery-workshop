<<<<<<< HEAD
let urlFull = "http://quotes.stormconsultancy.co.uk/quotes.json";

fetch(urlFull)
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

let randomQuote = async () => {
  let arr = await fetch(urlFull)
    .then((data) => data.json())
    .then((data) => data);
  let randomNum = Math.floor(Math.random() * arr.length);
  llenarHTML(arr[randomNum]);
};

randomQuote();
=======
>>>>>>> ce0b8f038de4743415fb64b9ac1d66880e6d229a
