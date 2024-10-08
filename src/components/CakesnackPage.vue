<template>
    <footer class="content45">
  <div class="container99">
   <div class="row09">
     <div class="content-col"> 
         <ul>
           <li>
               <div class="container9">
                   <div class="card" ref="card">
                       <div class="face face1">
                           <div class="content">
                               <i class="fab fabe-windows"></i>
                               <h3><img src="@/assets/cupcake.jpeg" alt="cupcake image" width="300px" height="200px"/></h3>
                           </div>
                       </div>
                       <div class="face face2">
                           <div class="card8">
                               <div class="content">
                                <div class="card" :class="{ flipped: isFlipped }">
                                      <div class="card_side2 card_side--front">
                                          <div class="content">
                                
                                              <div class="menu">
                                                  <div class="menu-item">                                        
                                                      <h2>CUPCAKES </h2>
                                                      <p> ₦7000</p>
                                                      <input type="number" min="0" value="0">
                                                      <button class="custom-button">Add to cart</button>
                                                      <button class="btn" id="front-button" @click="flipCard">Ingredients</button>
                                                  </div>
                                              </div>

                                          </div>
                                  
                                      </div>
                                      <div class="card_side1 card_side--back">
                                          <h2>INGREDENTS:</h2>
                                          <h3 class="lol" >Cupcakes:<br>
                                              All-purpose flour, granulated sugar, baking powder, salt, unsalted butter (softened), large eggs, milk, vanilla extract.<br>
                                              Optional Frosting:<br>
                                              Unsalted butter (softened), powdered sugar, milk, vanilla extract, food coloring (optional)</h3>
                                          <button class="btn" id="back-button" @click="flipCard">Back</button>
                                      </div>
                                  </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </li>
           <li>
               <div class="container9">
                   <div class="card" ref="card">
                       <div class="face face1">
                           <div class="content">
                               <i class="fab fabe-windows"></i>
                               <h3><img src="@/assets/fruit tart.jpeg" alt="fruit tart image" width="300px" height="200px"/>.</h3>
                           </div>
                       </div>
                       <div class="face face2">
                           <div class="card8">
                               <div class="content">
                                <div class="card" :class="{ flipped: isFlipped }">
                                      <div class="card_side2 card_side--front">
                                          <div class="content">
                                
                                              <div class="menu">
                                                  <div class="menu-item">                                        
                                                      <h2> FRUIT TART</h2>
                                                      <p> ₦7000</p>
                                                      <input type="number" min="0" value="0">
                                                      <button class="custom-button">Add to cart</button>
                                                      <button class="btn" id="front-button" @click="flipCard">Ingredients</button>
                                                  </div>
                                              </div>

                                          </div>
                                  
                                      </div>
                                      <div class="card_side1 card_side--back">
                                          <h2>INGREDENTS:</h2>
                                          <h3 class="lol" >
                                            All-purpose flour, powdered sugar, unsalted butter, egg yolk, heavy cream, vanilla extract, cream cheese, assorted fresh fruits, fruit glaze (optional)</h3>
                                          <button class="btn" id="back-button" @click="flipCard">Back</button>
                                      </div>
                                  </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </li>
           <li>
               <div class="container9">
                   <div class="card" ref="card">
                       <div class="face face1">
                           <div class="content">
                               <i class="fab fabe-windows"></i>
                               <h3><img src="@/assets/shrimp.jpeg" alt="shrimp image" width="300px" height="200px"/>.</h3>
                           </div>
                       </div>
                       <div class="face face2">
                           <div class="card8">
                            <div class="content">
                                  <div class="card" :class="{ flipped: isFlipped }">
                                      <div class="card_side2 card_side--front">
                                          <div class="content">
                                
                                              <div class="menu">
                                                  <div class="menu-item">                                        
                                                      <h2>SHRIMP COCKTAILS </h2>
                                                      <p> ₦7000</p>
                                                      <input type="number" min="0" value="0">
                                                      <button class="custom-button">Add to cart</button>
                                                      <button class="btn" id="front-button" @click="flipCard">Ingredients</button>
                                                  </div>
                                              </div>

                                          </div>
                                  
                                      </div>
                                      <div class="card_side1 card_side--back">
                                          <h2>INGREDENTS:</h2>
                                          <h3 class="lol" >Shrimp, lemon juice, cocktail sauce, Worcestershire sauce, hot sauce, garlic, salt, pepper, lettuce, lemon wedges (for garnish).</h3>
                                          <button class="btn" id="back-button" @click="flipCard">Back</button>
                                      </div>
                                  </div>
                              </div>
                           </div>
                       </div>
                   </div>
               </div>
           </li>
           <li>
               <div class="container9">
                   <div class="card" ref="card">
                       <div class="face face1">
                           <div class="content">
                               <i class="fab fabe-windows"></i>
                               <h3><img src="@/assets/pig.jpeg" alt="pig image" width="300px" height="200px"/>.</h3>
                           </div>
                       </div>
                       <div class="face face2">
                           <div class="card8">
                            <div class="content">
                                  <div class="card" :class="{ flipped: isFlipped }">
                                      <div class="card_side2 card_side--front">
                                          <div class="content">
                                
                                              <div class="menu">
                                                  <div class="menu-item">                                        
                                                      <h2>PIG IN BLANKET  </h2>
                                                      <p> ₦7000</p>
                                                      <input type="number" min="0" value="0">
                                                      <button class="custom-button">Add to cart</button>
                                                      <button class="btn" id="front-button" @click="flipCard">Ingredients</button>
                                                  </div>
                                              </div>

                                          </div>
                                  
                                      </div>
                                      <div class="card_side1 card_side--back">
                                          <h2>INGREDENTS:</h2>
                                          <h3 class="lol" >Mini sausages, puff pastry, egg (for egg wash), salt, pepper, mustard (optional, for serving)</h3>
                                          <button class="btn" id="back-button" @click="flipCard">Back</button>
                                      </div>
                                  </div>
                              </div>
                           </div>
                       </div>
                   </div>
               </div>
           </li>
          </ul>
     </div>
     <div class="content-col">
       <ul>
           <li>
               <div class="container9">
                   <div class="card" ref="card">
                       <div class="face face1">
                           <div class="content">
                               <i class="fab fabe-windows"></i>
                               <h3><img src="@/assets/puff.jpeg" alt="puff image" width="300px" height="200px"/>.</h3>
                           </div>
                       </div>
                       <div class="face face2">
                           <div class="card8">
                            <div class="content">
                                  <div class="card" :class="{ flipped: isFlipped }">
                                      <div class="card_side2 card_side--front">
                                          <div class="content">
                                
                                              <div class="menu">
                                                  <div class="menu-item">                                        
                                                      <h2>PUFF PUFF </h2>
                                                      <p> ₦7000</p>
                                                      <input type="number" min="0" value="0">
                                                      <button class="custom-button">Add to cart</button>
                                                      <button class="btn" id="front-button" @click="flipCard">Ingredients</button>
                                                  </div>
                                              </div>

                                          </div>
                                  
                                      </div>
                                      <div class="card_side1 card_side--back">
                                          <h2>INGREDENTS:</h2>
                                          <h3 class="lol" >All-purpose flour, sugar, yeast, warm water, salt, nutmeg, milk (optional), eggs (optional), vegetable oil (for frying), vanilla extract (optional)</h3>
                                          <button class="btn" id="back-button" @click="flipCard">Back</button>
                                      </div>
                                  </div>
                              </div>
                           </div>
                       </div>
                   </div>
               </div>
           </li>
           <li>
               <div class="container9">
                   <div class="card" ref="card">
                       <div class="face face1">
                           <div class="content">
                               <i class="fab fabe-windows"></i>
                               <h3><img src="@/assets/hotdog.jpeg" alt="hotdog image" width="300px" height="200px"/>.</h3>
                           </div>
                       </div>
                       <div class="face face2">
                           <div class="card8">
                            <div class="content">
                                  <div class="card" :class="{ flipped: isFlipped }">
                                      <div class="card_side2 card_side--front">
                                          <div class="content">
                                
                                              <div class="menu">
                                                  <div class="menu-item">                                        
                                                      <h2>HOTDOGS </h2>
                                                      <p> ₦7000</p>
                                                      <input type="number" min="0" value="0">
                                                      <button class="custom-button">Add to cart</button>
                                                      <button class="btn" id="front-button" @click="flipCard">Ingredients</button>
                                                  </div>
                                              </div>

                                          </div>
                                  
                                      </div>
                                      <div class="card_side1 card_side--back">
                                          <h2>INGREDENTS:</h2>
                                          <h3 class="lol" >Hot dog sausages, hot dog buns, mustard, ketchup, onions (chopped), relish, sauerkraut (optional), cheese (optional)</h3>
                                          <button class="btn" id="back-button" @click="flipCard">Back</button>
                                      </div>
                                  </div>
                              </div>
                           </div>
                       </div>
                   </div>
               </div> 
           </li>
           <li>
               <div class="container9">
                   <div class="card" ref="card">
                       <div class="face face1">
                           <div class="content">
                               <i class="fab fabe-windows"></i>
                               <h3><img src="@/assets/cheese.jpeg" alt="cheese image"  width="300px" height="200px"/>.</h3>
                           </div>
                       </div>
                       <div class="face face2">
                           <div class="card8">
                            <div class="content">
                                  <div class="card" :class="{ flipped: isFlipped }">
                                      <div class="card_side2 card_side--front">
                                          <div class="content">
                                
                                              <div class="menu">
                                                  <div class="menu-item">                                        
                                                      <h2>FRIED GOAT CHEESE </h2>
                                                      <p> ₦7000</p>
                                                      <input type="number" min="0" value="0">
                                                      <button class="custom-button">Add to cart</button>
                                                      <button class="btn" id="front-button" @click="flipCard">Ingredients</button>
                                                  </div>
                                              </div>

                                          </div>
                                  
                                      </div>
                                      <div class="card_side1 card_side--back">
                                          <h2>INGREDENTS:</h2>
                                          <h3 class="lol" >Goat cheese, all-purpose flour, eggs, breadcrumbs (preferably panko), salt, pepper, vegetable oil (for frying), honey (optional, for drizzling), fresh herbs (optional, for garnish).</h3>
                                          <button class="btn" id="back-button" @click="flipCard">Back</button>
                                      </div>
                                  </div>
                              </div>
                           </div>
                       </div>
                   </div>
               </div>
           </li>
           <li>
               <div class="container9">
                   <div class="card" ref="card">
                       <div class="face face1">
                           <div class="content">
                               <i class="fab fabe-windows"></i>
                               <h3><img src="@/assets/crostini.jpeg" alt="crontini image" width="300px" height="200px"/>.</h3>
                           </div>
                       </div>
                       <div class="face face2">
                           <div class="card8">
                            <div class="content">
                                  <div class="card" :class="{ flipped: isFlipped }">
                                      <div class="card_side2 card_side--front">
                                          <div class="content">
                                
                                              <div class="menu">
                                                  <div class="menu-item">                                        
                                                      <h2>CROSTINI</h2>
                                                      <p> ₦7000</p>
                                                      <input type="number" min="0" value="0">
                                                      <button class="custom-button">Add to cart</button>
                                                      <button class="btn" id="front-button" @click="flipCard">Ingredients</button>
                                                  </div>
                                              </div>

                                          </div>
                                  
                                      </div>
                                      <div class="card_side1 card_side--back">
                                          <h2>INGREDENTS:</h2>
                                          <h3 class="lol" >Baguette, olive oil, salt, pepper, garlic (optional), toppings (such as tomatoes, basil, cheese, or pâté).</h3>
                                          <button class="btn" id="back-button" @click="flipCard">Back</button>
                                      </div>
                                  </div>
                              </div>
                           </div>
                       </div>
                   </div>
               </div>
           </li> 
       </ul>
     </div>
     <div class="content-col"> 
       <ul>
           <li>
               <div class="container9">
                   <div class="card" ref="card">
                       <div class="face face1">
                           <div class="content">
                               <i class="fab fabe-windows"></i>
                               <h3><img src="@/assets/buns.jpeg" alt="buns image" width="300px" height="200px"/></h3>
                           </div>
                       </div>
                       <div class="face face2">
                           <div class="card8">
                            <div class="content">
                                  <div class="card" :class="{ flipped: isFlipped }">
                                      <div class="card_side2 card_side--front">
                                          <div class="content">
                                
                                              <div class="menu">
                                                  <div class="menu-item">                                        
                                                      <h2>BUNS </h2>
                                                      <p> ₦7000</p>
                                                      <input type="number" min="0" value="0">
                                                      <button class="custom-button">Add to cart</button>
                                                      <button class="btn" id="front-button" @click="flipCard">Ingredients</button>
                                                  </div>
                                              </div>

                                          </div>
                                  
                                      </div>
                                      <div class="card_side1 card_side--back">
                                          <h2>INGREDENTS:</h2>
                                          <h3 class="lol" >All-purpose flour, yeast, sugar, salt, milk, water, butter, egg (optional).</h3>
                                          <button class="btn" id="back-button" @click="flipCard">Back</button>
                                      </div>
                                  </div>
                              </div>
                           </div>
                       </div>
                   </div>
               </div>
           </li>
           <li>
               <div class="container9">
                   <div class="card" ref="card">
                       <div class="face face1">
                           <div class="content">
                               <i class="fab fabe-windows"></i>
                               <h3><img src="@/assets/deviled.jpeg" alt="deviled image" width="300px" height="200px"/></h3>
                           </div>
                       </div>
                       <div class="face face2">
                           <div class="card8">
                            <div class="content">
                                  <div class="card" :class="{ flipped: isFlipped }">
                                      <div class="card_side2 card_side--front">
                                          <div class="content">
                                
                                              <div class="menu">
                                                  <div class="menu-item">                                        
                                                      <h2>DEVILED EGGS </h2>
                                                      <p> ₦7000</p>
                                                      <input type="number" min="0" value="0">
                                                      <button class="custom-button">Add to cart</button>
                                                      <button class="btn" id="front-button" @click="flipCard">Ingredients</button>
                                                  </div>
                                              </div>

                                          </div>
                                  
                                      </div>
                                      <div class="card_side1 card_side--back">
                                          <h2>INGREDENTS:</h2>
                                          <h3 class="lol" >Eggs, mayonnaise, mustard, vinegar, salt, pepper, paprika (for garnish), fresh herbs (optional, for garnish)</h3>
                                          <button class="btn" id="back-button" @click="flipCard">Back</button>
                                      </div>
                                  </div>
                              </div>
                           </div>
                       </div>
                   </div>
               </div>
           </li>
           <li>
               <div class="container9">
                   <div class="card" ref="card">
                       <div class="face face1">
                           <div class="content">
                               <i class="fab fabe-windows"></i>
                               <h3><img src="@/assets/rolls.jpeg" alt="rolls image" width="300px" height="200px"/></h3>
                           </div>
                       </div>
                       <div class="face face2">
                           <div class="card8">
                            <div class="content">
                                  <div class="card" :class="{ flipped: isFlipped }">
                                      <div class="card_side2 card_side--front">
                                          <div class="content">
                                
                                              <div class="menu">
                                                  <div class="menu-item">                                        
                                                      <h2>SAUSAGE ROLLS </h2>
                                                      <p> ₦7000</p>
                                                      <input type="number" min="0" value="0">
                                                      <button class="custom-button">Add to cart</button>
                                                      <button class="btn" id="front-button" @click="flipCard">Ingredients</button>
                                                  </div>
                                              </div>

                                          </div>
                                  
                                      </div>
                                      <div class="card_side1 card_side--back">
                                          <h2>INGREDENTS:</h2>
                                          <h3 class="lol" >Sausage meat, puff pastry, onion (optional), garlic (optional), salt, pepper, egg (for egg wash), herbs (optional, like thyme or sage)</h3>
                                          <button class="btn" id="back-button" @click="flipCard">Back</button>
                                      </div>
                                  </div>
                              </div>
                           </div>
                       </div>
                   </div>
               </div>
           </li>
           <li>
               <div class="container9">
                   <div class="card" ref="card">
                       <div class="face face1">
                           <div class="content">
                               <i class="fab fabe-windows"></i>
                               <h3><img src="@/assets/stinks.jpeg" alt="stinks image" width="300px" height="200px"/></h3>
                           </div>
                       </div>
                       <div class="face face2">
                           <div class="card8">
                            <div class="content">
                                  <div class="card" :class="{ flipped: isFlipped }">
                                      <div class="card_side2 card_side--front">
                                          <div class="content">
                                
                                              <div class="menu">
                                                  <div class="menu-item">                                        
                                                      <h2>MOZZERELLA STICKS </h2>
                                                      <p> ₦7000</p>
                                                      <input type="number" min="0" value="0">
                                                      <button class="custom-button">Add to cart</button>
                                                      <button class="btn" id="front-button" @click="flipCard">Ingredients</button>
                                                  </div>
                                              </div>

                                          </div>
                                  
                                      </div>
                                      <div class="card_side1 card_side--back">
                                          <h2>INGREDENTS:</h2>
                                          <h3 class="lol" >Mozzarella cheese, all-purpose flour, eggs, breadcrumbs (preferably Italian seasoned), salt, pepper, garlic powder (optional), vegetable oil (for frying).</h3>
                                          <button class="btn" id="back-button" @click="flipCard">Back</button>
                                      </div>
                                  </div>
                              </div>
                           </div>
                       </div>
                   </div>
               </div>
           </li>
       </ul>
     </div>
     <div>
   </div>
   </div>
           <div class="superb">
               <div class="cart">
                 <p>Items in Cart:</p>
                 <ul></ul>
                 <router-link to="/Payment"><button class="bubbly-button"><span> Check out </span></button></router-link>
               </div>
           </div>
  </div>

 </footer>
</template>

<script>
export default {
 mounted() {
   const menuItems = document.querySelectorAll('.menu-item');
   const cart = document.querySelector('.cart > ul');
   const totalPriceElement = document.querySelector('.cart > div > p:nth-child(2)');
   let total = 0;

   function updateTotalPrice() {
 if (totalPriceElement) {
   totalPriceElement.textContent = ' ₦' + total.toFixed(2);
 }
}

function handleAddToCartButtonClick(item) {
 const button = item.querySelector('button');
 const input = item.querySelector('input');
 const price = parseFloat(item.querySelector('p').textContent.replace(' ₦', ''));
 const name = item.querySelector('h2').textContent;
 const id = item.getAttribute('id'); // Use getAttribute instead of dataset

 button.addEventListener('click', () => {
   const quantity = parseInt(input.value);
   if (quantity > 0) {
     let found = false;

     cart.querySelectorAll('li').forEach((li) => {
       if (li.getAttribute('id') === id) { // Use getAttribute instead of dataset
         li.setAttribute('quantity', parseInt(li.getAttribute('quantity')) + quantity);
         const span = li.querySelector('span');
         span.textContent = `${li.getAttribute('quantity')} x ${name}  ₦${(price * li.getAttribute('quantity')).toFixed(2)}`;
         found = true;

         total += price * quantity;
         updateTotalPrice();
       }
     });

     if (!found) {
       const li = document.createElement('li');
       li.setAttribute('id', id); // Set the id attribute
       li.setAttribute('quantity', quantity);

       const span = document.createElement('span');
       span.textContent = `${quantity} x ${name}  ₦${(price * quantity).toFixed(2)}`;

       li.appendChild(span);
       cart.appendChild(li);

       total += price * quantity;
       updateTotalPrice();
     }

     input.value = 0; // Reset input value
   }
 });

   }

   menuItems.forEach((item) => {
     handleAddToCartButtonClick(item);
   });

   cart.addEventListener('input', (event) => {
 if (event.target.tagName === 'INPUT') {
   const input = event.target;
   const priceText = input.closest('li').querySelector('span').textContent;
   const price = parseFloat(priceText.replace(' ₦', '')); // Remove currency symbol
   const name = input.closest('li').querySelector('span').textContent.split(' x ')[1];
   const quantity = parseInt(input.value);

   if (quantity >= 0) {
     const li = input.closest('li');
     li.setAttribute('quantity', quantity);
     li.querySelector('span').textContent = `${quantity} x ${name}  ₦${(price * quantity).toFixed(2)}`; // Update the text content here

     total = 0;
     cart.querySelectorAll('li').forEach((li) => {
       const priceText = li.querySelector('span').textContent;
       const price = parseFloat(priceText.replace(' ₦', '')); // Remove currency symbol
       total += price * li.getAttribute('quantity');
     });

     updateTotalPrice();

     if (quantity === 0) {
       li.remove();
     }
   }
 }
});
 },
 data() {
   return {
     isFlipped: false
   }
 },
 methods: {
   flipCard() {
     this.isFlipped = !this.isFlipped;
   }
 }
}
</script>

<style>

.cart1 {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    background-color: #3300FF;
    padding: 10px;
    height: 300px;
}
.custom-button {
  --color: #954535;
  --color-hover: #954535;
  --color-active: #a34;
  position: absolute;
  top: 145px;
  left: 126px;
  transform: translate(-50%, -50%);
  border: 1px solid #0000;
  width: 133px;
  height: 15px;
  font-size: 1.1em;
  font-family: 'Fira Sans', Roboto, Helvetica, sans-serif;
  transition: clip-path 0.25s, background 0.33s;
  background: var(--color);
  color: #fff;
  box-shadow: 0 0 0 16px var(--color-hover);
  clip-path: path("M0,0 C 25,0 225,0 250,0 250,25 250,55 250,80 225,80 25,80 0,80 0,55 0,25 0,0");
}

/* Firefox doesn't support nesting, so this goes outside for now */
.custom-button:hover {
  background: var(--color-hover);
  clip-path: path("M0,0 C 25,-10 225,-10 250,0 260,25 260,55 250,80 225,90 25,90 0,80 -10,55 -10,25 0,0");
}

.custom-button:active {
  background: var(--color-active);
  clip-path: path("M0,0 C 25,10 225,10 250,0 240,25 240,55 250,80 225,70 25,70 0,80 10,55 10,25 0,0");
}
/*bubbly button*/
.bubbly-button {
  font-family: "Helvetica", "Arial", sans-serif;
  display: inline-block;
  font-size: 1em;
  padding: 1em 2em;
  margin-top: 0px;
  margin-bottom: 00px;
  -webkit-appearance: none;
  appearance: none;
  background-color: #6E260E;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);
}
.bubbly-button:focus {
  outline: 0;
}
.bubbly-button:before, .bubbly-button:after {
  position: absolute;
  content: "";
  display: block;
  width: 140%;
  height: 100%;
  left: -20%;
  z-index: -1000;
  transition: all ease-in-out 0.5s;
  background-repeat: no-repeat;
}
.bubbly-button:before {
  display: none;
  top: -75%;
  background-image: radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, transparent 20%, #ff0081 20%, transparent 30%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
}
.bubbly-button:after {
  display: none;
  bottom: -75%;
  background-image: radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
}
.bubbly-button:active {
  transform: scale(0.9);
  background-color: #6E260E;
  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
}
.bubbly-button.animate:before {
  display: block;
  animation: topBubbles ease-in-out 0.75s forwards;
}
.bubbly-button.animate:after {
  display: block;
  animation: bottomBubbles ease-in-out 0.75s forwards;
}

@keyframes topBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
  }
  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
  }
  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}
@keyframes bottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
  }
  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
  }
  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}
h3 {
  text-align: left;
}
</style>