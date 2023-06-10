const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
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

      addMealToDOM(meal);
    });
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


//uzlabojums 
var button = document.getElementById("myButton");
var list = document.getElementById("myList");
button.addEventListener("clikc", function(){
var listItem = document.createElement("li");
listItem.textContent = "New list item";
list.appendChild(listItem);
});
listItem.appendChild(createMenuItem('Napoleon no austiņam'));
listItem.appendChild(createMenuItem(''));
listItem.appendChild(createMenuItem(''));

/* function createMenuItem(name) {
  let li = document.createElement('li');
  li.textContent = name;
  return li;
}
// get the ul#menu
function button_onclickk(){const menu = document.querySelector('#menu');
// add menu item
menu.appendChild(createMenuItem('Home'));
menu.appendChild(createMenuItem('Services'));
menu.appendChild(createMenuItem('About Us'));};


 /*     <h1>Napoleon</h1>
      <img width="350" height="250" src="https://media.gardedis.lv/cache/61/13/6113365703dd87434310eb52d8c80072.jpg " 
      alt="Neceptā „Austiņu” – krēma kūka"> </img>
      
      <h2>Sastāvdaļas</h2>
      
<ul>
<li>600 g cepumi „Austiņas”</li>
<li>600 ml piena</li>
<li>3 olas</li>
<li>100 g cukura</li>
<li>2 ēdamkarotes cietes</li>
<li>2 ēdamkarotes miltu</li>
<li>1 paciņa vaniļas cukura</li>
<li>100 g saldkrējuma sviesta</li>
</ul>


    
    //  <h2>Pagatavošana</h2>
     
<li>Krēms: Ar putojamo slotiņu samaisa olas un cukuru.</li>
<li>Pakāpeniski pievieno miltus un cieti un, nepārtraucot putošanu, arī pienu.</li>
<li>Masu pārliek nelielā katliņā un karsē un nelielas uguns, nepārtraukti maisot.</li>
<li>Kad krēms sāk vārīties, pievieno sviestu un rūpīgi visu samaisa.</li>
<li>Pārklāj ar pārtikas plēvi un novieto atdzesēties.</li>
<li>Sevis izvēlētā kūkas formā, klāj kārtu ar cepumiem, pārklāj to ar krēmu.</li>
<li>Darbības atkārto līdz krēms un cepumi izlikti, atstājot nedaudz cepumu dekorēšanai un krēma kūkas virsmas un malu apziešanai.</li>
<li>Kūku dekorē pēc pašu gaumes un ievieto ledusskapī uz&nbsp; 2 - 4 stundām.</li>
</ol>*/
