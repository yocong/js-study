// 서버 URL
const URL = "https://yts.mx/api/v2/list_movies.json";

// 정렬 URL
const sortYear =
  "https://yts.mx/api/v2/list_movies.json?sort_by=year&order_by=desc";
const sortLike =
  "https://yts.mx/api/v2/list_movies.json?sort_by=like_count&order_by=desc";
const sortDownload =
  "https://yts.mx/api/v2/list_movies.json?sort_by=download_count&order_by=desc";

// 태그 가져오기
const $movieList = document.querySelector(".movie-list");

// 초기 영화정보 로딩하는 함수
const renderMovies = (movieList) => {
  $movieList.innerHTML = "";
  // forEach문을 통해 생성된 html 요소들이 $movieList에 담김
  movieList.forEach((movie) => {
    const $template = document.getElementById("movie-post");
    // 템플릿 태그에서 movie 클래스 태그 추출
    const $movie = document.importNode($template.content, true);

    $movie.querySelector(".img-box > img").src = movie.large_cover_image;
    $movie.querySelector(".inner .title").textContent = movie.title;
    $movie.querySelector(".inner .year").textContent = movie.year;
    $movie.querySelector(".inner .rating").textContent = movie.rating;
    $movieList.appendChild($movie);
  });
};

// 서버에서 게시물 정보 받아오기
fetch(URL)
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    // 게시물 정보 화면에 그리기
    renderMovies(json.data.movies);
  });

document.getElementById("s_rate").addEventListener("click", (e) => {
  fetch(sortDownload)
    .then((res) => res.json())
    .then((json) => {
      console.log(json.data.movies);
      renderMovies(json.data.movies);
    });
});

document.getElementById("s_year").addEventListener("click", (e) => {
  fetch(sortYear)
    .then((res) => res.json())
    .then((json) => {
      console.log(json.data.movies);
      renderMovies(json.data.movies);
    });
});

document.getElementById("s_like").addEventListener("click", (e) => {
  fetch(sortLike)
    .then((res) => res.json())
    .then((json) => {
      console.log(json.data.movies);
      renderMovies(json.data.movies);
    });
});
