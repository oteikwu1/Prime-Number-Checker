const searchInput = document.getElementById('search-input');
const recipeBtn = document.querySelector('.recipe-btn');
const displayContainer = document.querySelector('.display-container');


function  searchRecipe() {
    const query = searchInput.value;
searchInput.value = '';
   const url = `https://www.themealdb.com/api/json/v1/1/random.php?s=${query}`;
console.log(url)
   displayContainer.innerHTML = "<p>Searching for recipe.....</P>";

   fetch(url)
   .then(response => {
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
   })
   .then(data => {
    displayContainer.innerHTML = "";
    if (data.meal) {
        renderMeals(data.meal)
    } else{
       displayContainer.innerHTML = "<p>no meal found try another keywords</P>";  
    }
   })
   .catch(error => {
    displayContainer.innerHTML = `<p>Error: ${error.message}</p>`
   })
};

function renderMeals() {
    const mealDiv = document.createElement('newDiv')
    
   
}

recipeBtn.addEventListener('click', searchRecipe)
//  searchRecipe() 