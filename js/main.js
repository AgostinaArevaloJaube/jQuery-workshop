//DOM
const seccion = document.querySelector(".cards");

const apiKey = "djGmUVY2p7uVirNFUoIUDryw2UKKpLci";
let urlLatest =
  "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=" + apiKey;
let fetchNews = async (url, funcion) => {
  let datos = await fetch(url)
    .then((data) => data.json())
    .then((data) => data);
  console.log(datos);
  funcion(datos);
};

function llenarHTML(objeto) {
  console.log(objeto);
  seccion.innerHTML = "";
  for (let i = 0; i < objeto.results.length; i++) {
    let articulo = document.createElement("div");
    articulo.classList.add("card-body");
    let apendeame = `<img class="articleImg" src="${objeto.results[i].multimedia[2].url}" alt="">
  
    <div class="articleText">
      <a href="${objeto.results[i].url}" class="articleLink">
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
  `;
    articulo.innerHTML = apendeame;
    seccion.appendChild(articulo);
  }
}

function llenarHTMLSearch(objeto) {
  console.log(objeto.response.docs);
  seccion.innerHTML = "";
  for (let i = 0; i < objeto.response.docs.length; i++) {
    let articulo = document.createElement("div");
    articulo.classList.add("card-body");
    let apendeame = `
    
      <div class="articleText">
        <a href="${objeto.response.docs[1].web_url}" class="articleLink">
          <h3 class= "articleTitle">
            ${objeto.response.docs[i].headline.main}
          </h3>
        </a>
    
        <a href="#article.html" class="articleLink">
          <p>
          ${objeto.response.docs[i].abstract} 
          </p>
        </a>
    
      </div>
    `;
    articulo.innerHTML = apendeame;
    seccion.appendChild(articulo);
  }
}

function llenarHTMLPopular(objeto) {
  console.log(objeto);
  seccion.innerHTML = "";
  for (let i = 0; i < objeto.results.length; i++) {
    let articulo = document.createElement("div");
    articulo.classList.add("card-body");
    let apendeame = `<img class="articleImg" src="${objeto.results[i].media[0]["media-metadata"][2].url}" alt="">
    
      <div class="articleText">
        <a href="${objeto.results[i].url}" class="articleLink">
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
    `;
    articulo.innerHTML = apendeame;
    seccion.appendChild(articulo);
  }
}

const userSearch = () => {
  const searchInput = document.getElementById("searchInput").value;
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchInput}&api-key=${apiKey}`;
  fetchNews(url, llenarHTMLSearch);
};

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", userSearch);
const newest = document.getElementById("newest");
newest.addEventListener("click", () => fetchNews(urlLatest, llenarHTML));
const popular = document.getElementById("popular");
popular.addEventListener("click", () =>
  fetchNews(urlPopular, llenarHTMLPopular)
);
//most popular

const urlPopular =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=" + apiKey;

//results[0].media[0]["media-metadata"][0].url
