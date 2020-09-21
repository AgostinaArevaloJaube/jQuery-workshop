//DOM
const seccion = document.querySelector(".cards");


const apiKey = "djGmUVY2p7uVirNFUoIUDryw2UKKpLci";
let urlFull = "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=" + apiKey;
let fetchNews = async () => {
  let arr = await fetch(urlFull)
    .then((data) => data.json())
    .then((data) => data);
  console.log(arr);
  llenarHTML(arr);
};

function llenarHTML(objeto) {
  for (let i = 0; i < objeto.results.length; i++) {
    let articulo = document.createElement("div");
    articulo.classList.add("card-body");
    let apendeame = `<img class="articleImg" src="${objeto.results[i].multimedia[2].url}" alt="">
  
    <div class="articleText">
      <a href="article.html" class="articleLink">
        <h3 class= "articleTitle">
          ${objeto.results[i].title}
        </h3>
      </a>
  
      <a href="#article.html" class="articleLink">
        <p>
        ${objeto.results[i].abstract} 
        </p>
      </a>
  
    </div>
  `
    articulo.innerHTML = apendeame;
    seccion.appendChild(articulo);
  }
}

fetchNews();
