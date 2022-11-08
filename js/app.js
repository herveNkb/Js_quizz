const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector(".quiz-form");
form.addEventListener("submit", handleSubmit);

// Prévient le comportement par défaut du formulaire.
function handleSubmit(event) {
  event.preventDefault();

  // Tableau pour stocker les résultats.
  const results = [];

  const radioButtons = document.querySelectorAll("input[type='radio']:checked");

  // Compare les valeurs des boutons choisis avec le tableau "responses"
  // et renvoie true ou false selon le résultat.
  radioButtons.forEach((radioButtons, index) => {
    if (radioButtons.value === responses[index]) {
      results.push(true);
    } else {
      results.push(false);
    }
  });

  showResults(results); // Montre les résultats
  addColors(results); // Ajoute les couleurs par rapport aux résultats
}

// Affichage dans le DOM
const titleResult = document.querySelector(".results h2");
const markResult = document.querySelector(".mark");
const helpResult = document.querySelector(".help");

function showResults(results) {
  // Retourne un nouveau tableau avec le nombre de tous les éléments qui sont false.
  const errorsNumber = results.filter((el) => el === false).length;
  console.log(errorsNumber);

  // Affiche le nombre d'erreurs
  switch (errorsNumber) {
    case 0:
      titleResult.textContent = `✔️ Bravo, c'est un sans faute ! ✔️`;
      helpResult.textContent = "Quelle culture ...";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>5 / 5</span>";
      markResult.style.display = "block";
      break;
    case 1:
      titleResult.textContent = `✨ Vous y êtes presque ! ✨`;
      helpResult.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>4 / 5</span>";
      markResult.style.display = "block";
      break;
    case 2:
      titleResult.textContent = `✨ Encore un effort ... 👀`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>3 / 5</span>";
      markResult.style.display = "block";
      break;
    case 3:
      titleResult.textContent = `👀 Il reste quelques erreurs. 😭`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>2 / 5</span>";
      markResult.style.display = "block";
      break;
    case 4:
      titleResult.textContent = `😭 Peut mieux faire ! 😭`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>1 / 5</span>";
      markResult.style.display = "block";
      break;
    case 5:
      titleResult.textContent = `👎 Peut mieux faire ! 👎`;
      helpResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      markResult.style.display = "block";
      markResult.innerHTML = "Score : <span>0 / 5</span>";
      break;

    default:
      titleResult.textContent = "Wops, cas innatendu.";
  }
}


// Colorise les questions selon le choix de réponse
const questions = document.querySelectorAll(".question-block");

function addColors(results) {
  results.forEach((responses, index) => {
    if (results[index]) {
      questions[index].style.backgroundImage = "linear-gradient(to right, #a8ff78, #78ffd6)";
    } else {
      questions[index].style.backgroundImage = "linear-gradient(to right, #f5567b, #fd674c)";
    }
  })
}



































