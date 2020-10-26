// DOM Elements
const $newsContainer = document.querySelector('#newsContainer');
const $searchBtn = document.getElementById('searchBtn');
const $newestSection = document.getElementById('newestSection');
const $mostPopularSection = document.getElementById('mostPopularSection');

// API
const apiKey = 'djGmUVY2p7uVirNFUoIUDryw2UKKpLci';
const newestUrl = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${apiKey}`;
const mostPopularUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${apiKey}`;

let fetchNews = async (url, funcion) => {
	let datos = await fetch(url)
		.then((data) => data.json())
		.then((data) => data);
	console.log(datos);
	funcion(datos);
};

// Display functions
const displayNewestNews = (objeto) => {
	console.log(objeto);
	$newsContainer.innerHTML = '';
	for (let i = 0; i < objeto.results.length; i++) {
		let $articulo = document.createElement('div');
		$articulo.classList.add('card-body');
		let articlesTemplate = `
    <img class="articleImg" src="${objeto.results[i].multimedia[2].url}" alt="">
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
		$articulo.innerHTML = articlesTemplate;
		$newsContainer.appendChild($articulo);
	}
};

const displaySearchNews = (objeto) => {
	console.log(objeto.response.docs);
	$newsContainer.innerHTML = '';
	for (let i = 0; i < objeto.response.docs.length; i++) {
		let $articulo = document.createElement('div');
		$articulo.classList.add('card-body');
		let articlesTemplate = `
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
		$articulo.innerHTML = articlesTemplate;
		$newsContainer.appendChild($articulo);
	}
};

const displayMostPopularNews = (objeto) => {
  console.log(objeto);
	$newsContainer.innerHTML = '';
	for (let i = 0; i < objeto.results.length; i++) {
		let $articulo = document.createElement('div');
		$articulo.classList.add('card-body');
		let articlesTemplate = `
    <img class="articleImg" src="${objeto.results[i].media[0]['media-metadata'][2].url}" alt="">
    
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
		$articulo.innerHTML = articlesTemplate;
		$newsContainer.appendChild($articulo);
	}
};

const userSearch = () => {
	const searchInput = document.getElementById('searchInput').value;
	const searchUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchInput}&api-key=${apiKey}`;
	fetchNews(searchUrl, displaySearchNews);
};

// DOM Events

$searchBtn.addEventListener('click', userSearch);

$newestSection.addEventListener('click', () =>
	fetchNews(newestUrl, displayNewestNews)
);

$mostPopularSection.addEventListener('click', () =>
	fetchNews(mostPopularUrl, displayMostPopularNews)
);

fetchNews(mostPopularUrl, displayMostPopularNews)
