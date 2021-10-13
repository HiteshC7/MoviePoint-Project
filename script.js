const API_KEY="api_key=d7b8d8b2cd01f97ecad088ec1cd1d15d";
const BASE_URL="https://api.themoviedb.org/3/";
const IMG_URL="https://image.tmdb.org/t/p/w500";
const START_URL=BASE_URL+"discover/movie?sort_by=popularity.desc&"+API_KEY;
const main=document.getElementById('main');
const button=document.getElementById("button");
const search=document.getElementById('search');
const action=document.getElementById("action");
const adventure=document.getElementById("adventure");
const comedy=document.getElementById("comedy");
const crime=document.getElementById("crime");
const horror=document.getElementById("horror");
const thriller=document.getElementById("thriller");
const romance=document.getElementById("romance");
const temp=document.getElementById("container");
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
        movieEl.innerHTML=`
        <img src="${IMG_URL+poster_path}" alt="${title}">
        <div class="info">
            <h3>${title}</h3>
            <p class="${find_color(vote_average)}">${vote_average}</p>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
        </div>`;
     
        main.appendChild(movieEl);
    });
}
function find_color(vote)
{
    if(vote>=7)
    {
        return "green";
    }
    else
    {
        if(vote>=5)
        {
            return "yellow";
        }
        else
        {
            return "red";
        }
    }

}
button.addEventListener("click",(e)=>{
    e.preventDefault();
    const search_url=BASE_URL+"search/movie?"+API_KEY+"&query="+search.value;
    
    if(temp)
    {
        temp.remove();
    }
    const text=document.getElementById("after-intro");
    text.innerHTML="We found these for you...";
    initializepage(search_url);
});
action.addEventListener("click",(e)=>{
    e.preventDefault();
    const newurl=START_URL+"&with_genres=28";
    if(temp)
    {
        temp.remove();
    }
    const text=document.getElementById("after-intro");
    text.innerHTML="Action movies for you...";
    initializepage(newurl);

});
adventure.addEventListener("click",(e)=>{
    e.preventDefault();
    const newurl=START_URL+"&with_genres=12";
    if(temp)
    {
        temp.remove();
    }
    const text=document.getElementById("after-intro");
    text.innerHTML="Adventure movies for you...";
    initializepage(newurl);

});
crime.addEventListener("click",(e)=>{
    e.preventDefault();
    const newurl=START_URL+"&with_genres=80";
    if(temp)
    {
        temp.remove();
    }
    const text=document.getElementById("after-intro");
    text.innerHTML="Crime movies for you...";
    initializepage(newurl);

});
comedy.addEventListener("click",(e)=>{
    e.preventDefault();
    const newurl=START_URL+"&with_genres=35";
    if(temp)
    {
        temp.remove();
    }
    const text=document.getElementById("after-intro");
    text.innerHTML="Comedy movies for you...";
    initializepage(newurl);

});
horror.addEventListener("click",(e)=>{
    e.preventDefault();
    const newurl=START_URL+"&with_genres=27";
    if(temp)
    {
        temp.remove();
    }
    const text=document.getElementById("after-intro");
    text.innerHTML="Horror movies for you...";
    initializepage(newurl);

});
romance.addEventListener("click",(e)=>{
    e.preventDefault();
    const newurl=START_URL+"&with_genres=10749";
    if(temp)
    {
        temp.remove();
    }
    const text=document.getElementById("after-intro");
    text.innerHTML="Romance movies for you...";
    initializepage(newurl);

});
thriller.addEventListener("click",(e)=>{
    e.preventDefault();
    const newurl=START_URL+"&with_genres=53";
    if(temp)
    {
        temp.remove();
    }
    const text=document.getElementById("after-intro");
    text.innerHTML="Thriller movies for you...";
    initializepage(newurl);

});
