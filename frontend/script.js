const button = document.getElementById("btn-blague");
const container = document.getElementById("blague-container");

// const API_URL = "https://<TON-LIEN-RENDER>.onrender.com/api/v1/blagues/random"; // à modifier
const API_URL = "http://localhost:3000/api/v1/blagues/random"; // Local development URL

async function getRandomJoke() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    container.textContent = data.contenu;
  } catch (err) {
    container.textContent = "Oups ! Erreur de chargement 😥";
    console.error(err);
  }
}

button.addEventListener("click", getRandomJoke);
