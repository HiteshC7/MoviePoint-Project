const API_KEY="api_key=d7b8d8b2cd01f97ecad088ec1cd1d15d";
const BASE_URL="https://api.themoviedb.org/3/";
const IMG_URL="https://image.tmdb.org/t/p/w500";
const START_URL=BASE_URL+"discover/movie?sort_by=popularity.desc&"+API_KEY;
const main=document.getElementById('main');
const button=document.getElementById("button");
const search=document.getElementById('search');
initializepage(START_URL);
function initializepage(url)
{
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data);
        showmovies(data.results);
    });
}

function showmovies(data)
{
    main.innerHTML=``;
    data.forEach(movie => {
        const {title,poster_path,vote_average,overview}=movie;
        const movieEl=document.createElement("div");
        movieEl.classList.add("movie");
        // movieEl.classList.add("col-lg-3");
        // movieEl.classList.add("col-sm-5");
        movieEl.innerHTML=`
        <img src="${IMG_URL+poster_path}" alt="${title}">
        <div class="info">
            <h3>${title}</h3>
            <p class="green">${vote_average}</p>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
        </div>`;
     
        main.appendChild(movieEl);
    });
}

button.addEventListener("click",(e)=>{
    e.preventDefault();
    const search_url=BASE_URL+"search/movie?"+API_KEY+"&query="+search.value;
    initializepage(search_url);
})