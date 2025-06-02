// ==============================
// 🌱 Sélection des éléments
// ==============================

const btn = document.querySelector(".search");
const inputSearch = document.querySelector(`[type="text"]`);
const slidesHTML = document.querySelector(`.swiper-wrapper`);

// ==============================
// 🌍 Variables globales
// ==============================



// ==============================
// 🎊 Fonctionnalités
// ==============================

async function getMovie(query) {
	try {
		const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6631e5f1dc96088e0d26b86da29b5b6a&query=${query}&include_adult=false&language=en-US&page=1`);
	    const data = await response.json();
		console.log(data);
		return (data);
	}
	catch (error) {
		console.error('Erreur :', error);
	  }
}



function createSlide(movieList) {
    slidesHTML.innerHTML = "";
    movieList.results.forEach((movie, index)  => {
        const div = document.createElement("div");
        let poster;
        if (!movie.poster_path){
            poster = "http://image.tmdb.org/t/p/w200/hMJY00IB8h8F6i9Aj5neQkkpdzb.jpg";
        }
        else {
            poster = movie.poster_path;
        }
        div.className += "swiper-slide";
        div.innerHTML = `
        <div class="title">${movie.original_title}</div>
        <div class="img">
            <img src="http://image.tmdb.org/t/p/w200${poster}" alt="">
        </div>`
        slidesHTML.append(div);
    });
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// ==============================
// 🧲 Événements
// ==============================

// getMovie("home");

btn.addEventListener("click", async (e)=> {
    e.preventDefault();
    if (inputSearch.value) {
        const movieList = await getMovie(inputSearch.value);
        createSlide(movieList);
        swiper.update();
    }
})