// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
  pepperoniButtonActive: true,
  mushroomsButtonActive: true,
  peppersButtonActive:true,
  whiteSauceButtonActive:false,
  glutenFreeButtonActive:false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }

  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }

  })
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach((oneSauce) => {
    if (!state.whiteSauce) {
      oneSauce.classList.remove(`sauce-white`);
    } else {
      oneSauce.classList.add(`sauce-white`);
    }

  })
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((oneCrust) => {
    if (!state.glutenFreeCrust) {
      oneCrust.classList.remove(`crust-gluten-free`);
    } else {
      oneCrust.classList.add(`crust-gluten-free`);
    }

  })
}

function renderButtons() {
  if(!state.pepperoniButtonActive) {
  document.querySelector('.btn-pepperoni').classList.remove(`active`);
    }
    else {
      document.querySelector('.btn-pepperoni').classList.add(`active`);
    } 
  
    if(!state.mushroomsButtonActive) {
      document.querySelector('.btn-mushrooms').classList.remove(`active`);
        }
        else {
          document.querySelector('.btn-mushrooms').classList.add(`active`);
        }  

    if(!state.peppersButtonActive) {
      document.querySelector('.btn-green-peppers').classList.remove(`active`);
          }
        else {
            document.querySelector('.btn-green-peppers').classList.add(`active`);
            } 
     if(!state.whiteSauceButtonActive) {
        document.querySelector('.btn-sauce').classList.remove(`active`);
                }
                else {
                  document.querySelector('.btn-sauce').classList.add(`active`);
                }    

  if(!state.glutenFreeButtonActive) {
            document.querySelector('.btn-crust').classList.remove(`active`);
                    }
              else {
                      document.querySelector('.btn-crust').classList.add(`active`);
                    }  
  }

function renderPrice() {
  let totalPrice=10;
  if(state.pepperoni){
    document.getElementById('pepperoni-price').style.visibility = "visible";
    totalPrice+=1;
  } else {
    document.getElementById('pepperoni-price').style.visibility = "hidden";
  }
  if(state.mushrooms){
    document.getElementById('mushrooms-price').style.visibility = "visible";
    totalPrice+=1;
  } else {
    document.getElementById('mushrooms-price').style.visibility = "hidden";
  }
  if(state.greenPeppers){
    document.getElementById('green-peppers-price').style.visibility = "visible";
    totalPrice+=1;
  } else {
    document.getElementById('green-peppers-price').style.visibility = "hidden";
  }
  if(state.whiteSauce){
    document.getElementById('white-sauce-price').style.visibility = "visible";
    totalPrice+=3;
  } else {
    document.getElementById('white-sauce-price').style.visibility = "hidden";
  }

  if(state.glutenFreeCrust){
    document.getElementById('gluten-free-price').style.visibility = "visible";
    totalPrice+=5;
  } else {
    document.getElementById('gluten-free-price').style.visibility = "hidden";
  }
  document.getElementById('total-price').innerHTML = `${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  state.pepperoniButtonActive = !state.pepperoniButtonActive;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function (){
  state.mushrooms = !state.mushrooms;
  state.mushroomsButtonActive = !state.mushroomsButtonActive;
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', function (){
  state.greenPeppers = !state.greenPeppers;
  state.peppersButtonActive = !state.peppersButtonActive;
  renderEverything()
})
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', function (){
  state.whiteSauce = !state.whiteSauce;
  state.whiteSauceButtonActive = !state.whiteSauceButtonActive;
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', function (){
  state.glutenFreeCrust = !state.glutenFreeCrust;
  state.glutenFreeButtonActive = !state.glutenFreeButtonActive;
  renderEverything()
})

