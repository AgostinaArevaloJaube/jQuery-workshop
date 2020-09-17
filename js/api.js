let urlFull = "http://quotes.stormconsultancy.co.uk/quotes.json";

fetch(urlFull)
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
