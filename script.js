const button = document.getElementById("btn-blague");
const container = document.getElementById("blague-container");
const question = document.getElementById("question");
const answer = document.getElementById("answer");

const API_URL = "https://projet-api-blagues.onrender.com/api/v1/jokes/random";
// const API_URL = "http://localhost:3000/api/v1/jokes/random"; // Local development URL

async function getRandomJoke() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    
    // Affiche la blague dans le conteneur
    question.textContent = data.question;
    answer.textContent = data.answer;

  } catch (err) {
    question.textContent = "";
    answer.textContent = "Oups ! Erreur de chargement 😥";
    console.error(err);
  }
}

button.addEventListener("click", getRandomJoke);
