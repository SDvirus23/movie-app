const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    const moviebox=document.querySelector("#moviebox");
     
    const getmovies= async (api)=>{
        const response=await fetch(api);
        const data=await response.json();
        showmovie(data.results);
        
    }
    const showmovie=(data)=>{
        moviebox.innerHTML="";
        data.forEach((item)=> {
           // console.log(item);
            const box=document.createElement("div");
            box.classList.add("box");
            box.innerHTML=`
                 <img src="${IMGPATH + item.poster_path  }" alt="">
            </div>
            <div class="overlay">
                <div class="title">
                    <h2>${item.original_title}</h2>
                    <span>${Math.round(item.vote_average*100)/100}</span>
                </div>
                <h2>overview:</h2>
                <p>${item.overview}

                </p>
                <h2>${item.release_date}`
                moviebox.appendChild(box);
        });

    }
    document.querySelector("#search").addEventListener("keyup",(evt)=>{
        if(evt.target.value!=""){
            getmovies(SEARCHAPI+evt.target.value);
        }else{
            getmovies(APIURL);
        }
    });

    //getmovies(APIURL);