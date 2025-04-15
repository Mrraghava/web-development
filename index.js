const apiKey = '7d61d4d';

document.getElementById('searchButton').addEventListener('click', async () => {
  const movieTitle = document.getElementById('movieSearchTitle').value.trim();
  if (movieTitle) {
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === 'True') {
        displayMovieData(data);
      } else {
        document.getElementById('movie-card-container').innerHTML = `<div class="alert alert-danger" role="alert">${data.Error}</div>`;
      }
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  }
});

function displayMovieData(data) {
  const container = document.getElementById('movie-card-container');
  container.innerHTML = `
    <div class="card">
      <img src="${data.Poster}" class="card-img-top" alt="${data.Title} poster">
      <div class="card-body">
        <h5 class="card-title">${data.Title} (${data.Year})</h5>
        <p class="card-text"><strong>Genre:</strong> ${data.Genre}</p>
        <p class="card-text"><strong>Director:</strong> ${data.Director}</p>
        <p class="card-text"><strong>Plot:</strong> ${data.Plot}</p>
      </div>
    </div>
  `;
}