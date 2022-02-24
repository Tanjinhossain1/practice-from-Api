

function getFood(){
    const input = document.getElementById('input');
    const inputValue = input.value;
    input.value = '';
    if(inputValue == ''){
        alert("It's Not Working")
    }else{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(res => res.json())
        .then(data => displayShow(data.meals))
    }
 
}
const displayShow = meals =>{
    const container = document.getElementById('container');
    const contsiners = document.getElementById('containers');
    contsiners.textContent = '';
    container.textContent = '';
   for(const meal of meals){
//    console.log(meal)
       const div = document.createElement('div');
       div.classList.add('card-style')
       div.innerHTML = `
       <div class="col ">
             <div  onclick="mealId('${meal.idMeal}')"  class="card h-100 ">
                         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                             <h5 class="card-title">${meal.strMeal}</h5>
                          <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
                    </div>
             </div>
        </div>
       `
       container.appendChild(div)
   }  
}
const mealId = useId =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${useId}`)
    .then(res => res.json())
    .then(data => displayCard(data))
}
const displayCard = meal =>{
    const contsiners = document.getElementById('containers');
    contsiners.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card mx-auto  mt-5" style="width: 30rem;">
        <img src="${meal.meals[0].strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body ">
          <h5 class="card-title">${meal.meals[0].strMeal}</h5>
          <p class="card-text">${meal.meals[0].strInstructions.slice(0,200)}</p>
          <a href="${meal.meals[0].strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `;
    contsiners.appendChild(div);
}