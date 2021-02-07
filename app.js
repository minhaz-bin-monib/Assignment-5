const button = document.getElementById('button')

button.addEventListener('click', function () {
    const input = document.getElementById("input").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then(res => res.json())
        .then(data => displayFoods(data.meals));

})

const displayFoods = foods => {
    console.log(foods);
    const foodsDiv = document.getElementById('foods')
     foodsDiv.innerHTML = null;

    foods.forEach(food => {
        // const food = foods[i];
        const foodDiv = document.createElement('div')

        foodDiv.className = 'food';

        const foodInfo = `
        <div onclick = "displayFoodDetail(${food.idMeal})"> 
        <img class="pic-size" src="${food.strMealThumb}">
     
        <h3> ${food.strMeal} </h3>
        </div>
        
     
     
     `

        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);
    });

}

const displayFoodDetail = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i= ${name}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayIndividualFoodDetail(data.meals));

       }

      const AgainFoodDetail = document.getElementById('individualFood');

       function displayIndividualFoodDetail(individualIteam){
           const individualFoodItem = individualIteam[0];
           console.log(individualFoodItem);
           const againIndividualFoodDetail = `
           <img class="pic-size" src="${individualFoodItem.strMealThumb}">
           <h3> ${individualFoodItem.strMeal} </h3>
           
           <ul>
           <h5> Ingredients </h5>
             <li> ${individualFoodItem.strIngredient1}  </li>
             <li> ${individualFoodItem.strIngredient2}  </li>
             <li> ${individualFoodItem.strIngredient3}  </li>
             <li> ${individualFoodItem.strIngredient4}  </li>
             <li> ${individualFoodItem.strIngredient5}  </li>
             <li> ${individualFoodItem.strIngredient6}  </li>
             <li> ${individualFoodItem.strIngredient7}  </li>

           </ul>
           `
           
           AgainFoodDetail.innerHTML = againIndividualFoodDetail;
           document.getElementById('individualFood').style.display = 'block';

           

            
    }
