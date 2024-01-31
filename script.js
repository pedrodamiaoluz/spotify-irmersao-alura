const searchInput = document.querySelector("input#search-input");
const resultArtist = document.querySelector("div#result-artist");
const resulPlaylist = document.querySelector("div#result-playlists");

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`
  fetch(url)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(results) {
    resulPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImagem = document.getElementById('artist-img');

    results.forEach(element => {
         artistName.innerText = element.name;
         artistImagem.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener("input", function(){
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === '') {
    resulPlaylist.classList.add("hidden");
    resultArtist.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});