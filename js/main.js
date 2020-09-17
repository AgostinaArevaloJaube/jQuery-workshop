let urlFull = "http://quotes.stormconsultancy.co.uk/quotes.json";

let randomQuote = async () => {
  let arr = await fetch(urlFull)
    .then((data) => data.json())
    .then((data) => data);
  let randomNum = Math.floor(Math.random() * arr.length);
  llenarHTML(arr[randomNum]);
};
