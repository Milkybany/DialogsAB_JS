const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  receipt = document.getElementById('receipt'),
  mealsEl = document.getElementById('meals'),
  resultHeading = document.getElementById('result-heading'),
  single_mealEl = document.getElementById('single-meal');

// Search meal and fetch from API
function searchMeal(e) {
  e.preventDefault();

  // Clear single meal
  single_mealEl.innerHTML = '';

  // Get search term
  const term = search.value;

  // Check for empty
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;

        if (data.meals === null) {
          resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              meal => `
            <div class="meal">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
              <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>
              </div>
            </div>
          `
            )
            .join('');
        }
      });
    // Clear search text
    search.value = '';
  } else {
    alert('Please enter a search term');
  }
}

// Fetch meal by ID
function getMealById(mealID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(res => res.json())
    .then(data => {
      const meal = data.meals[0];

      addMealToDOM(meal);
    });
}

// Fetch random meal from API
function getRandomMeal() {
  // Clear meals and heading
  mealsEl.innerHTML = '';
  resultHeading.innerHTML = '';

  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => {
      const meal = data.meals[0];
      console.log(meal);
      addMealToDOM(meal);
    });
}

function getConstantMeal() {
  mealsEl.innerHTML = '';
  resultHeading.innerHTML = '';

  const meal = {};
  meal[`strIngredient1`] = "cepumi „Austiņas";
  meal[`strMeasure1`] = "600 g";
  meal[`strIngredient2`] = "piena";
  meal[`strMeasure2`] = "600 ml";
  meal[`strIngredient3`] = "olas";
  meal[`strMeasure3`] = "3";
  meal[`strIngredient4`] = "cukura";
  meal[`strMeasure4`] = "100 g";
  meal[`strIngredient5`] = "cietes";
  meal[`strMeasure5`] = "2 ēdamkarotes";
  meal[`strIngredient6`] = "milti";
  meal[`strMeasure6`] = "2 ēdamkarotes";
  meal[`strIngredient7`] = "vaniļas cukura";
  meal[`strMeasure7`] = "1 paciņa";
  meal[`strIngredient8`] = "saldkrējuma sviesta";
  meal[`strMeasure8`] = "100 g";
  meal[`strMeal`] = 'Slinkais Napoleons';
  meal[`strMealThumb`] = "https://media.gardedis.lv/cache/61/13/6113365703dd87434310eb52d8c80072.jpg";
  meal[`strCategory`] = "kūka";
  meal[`strArea`] = "Latvija";
  meal[`strInstructions`] = "Pagatavošana       Krēms - Ar putojamo slotiņu samaisa olas un cukuru. Pakāpeniski pievieno miltus un cieti un, nepārtraucot putošanu, arī pienu. Masu pārliek nelielā katliņā un karsē un nelielas uguns, nepārtraukti maisot. Kad krēms sāk vārīties, pievieno sviestu un rūpīgi visu samaisa. Pārklāj ar pārtikas plēvi un novieto atdzesēties.Sevis izvēlētā kūkas formā, klāj kārtu ar cepumiem, pārklāj to ar krēmu. Darbības atkārto līdz krēms un cepumi izlikti, atstājot nedaudz cepumu dekorēšanai un krēma kūkas virsmas un malu apziešanai. Kūku dekorē pēc pašu gaumes un ievieto ledusskapī uz&nbsp; 2 - 4 stundām.";
 

  addMealToDOM(meal);
}


// Add meal to DOM
function addMealToDOM(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  single_mealEl.innerHTML = `
    <div class="single-meal">
      <h1>${meal.strMeal}</h1>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <div class="single-meal-info">
        ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
      </div>
      <div class="main">
        <p>${meal.strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
          ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

// Event listeners
submit.addEventListener('submit', searchMeal);
random.addEventListener('click', getRandomMeal);
receipt.addEventListener('click', getConstantMeal);

mealsEl.addEventListener('click', e => {
  const mealInfo = e.path.find(item => {
    if (item.classList) {
      return item.classList.contains('meal-info');
    } else {
      return false;
    }
  });

  if (mealInfo) {
    const mealID = mealInfo.getAttribute('data-mealid');
    getMealById(mealID);
  }
});


