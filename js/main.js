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
