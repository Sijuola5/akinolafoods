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
                               <h3><img src="@/assets/jollof rice.jpeg" alt="jollof rice image" width="300px" height="200px"/></h3>
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
                                                      <h2>JOLLOF RICE AND TURKEY </h2>
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
                                          <h3 class="lol" >Rice, Tomatoes,Tomato paste,Onions,Red bell peppers,Scotch bonnet peppers,Garlic,Ginger,Vegetable oil,Chicken or vegetable broth,Bay leaves,Thyme,Curry powder,Salt and Turkey</h3>
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
                               <h3><img src="@/assets/fried rice.jpeg" alt="fried rice image" width="300px" height="200px"/>.</h3>
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
                                                      <h2>FRIED RICE AND TURKEY</h2>
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
                                          <h3 class="lol" >Rice, Carrots ,Green peas, Sweet corn, Green beans, Bell peppers (red, green, or yellow), Onions, Spring onions, Garlic, Soy sauce, Vegetable, oil, Curry powder, Thyme, Salt, Black pepper and turkey</h3>
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
                               <h3><img src="@/assets/ofada rice.jpeg" alt="ofada rice image" width="300px" height="200px"/>.</h3>
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
                                                      <h2>OFADA RICE AND CHICKEN </h2>
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
                                          <h3 class="lol" >Green bell peppers, Scotch bonnet peppers, Onions, Locust beans (iru), Palm oil, Ground crayfish, Assorted meats (optional), Stockfish (optional), Bouillon cubes, Salt, Smoked fish (optional) and turkey</h3>
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
                               <h3><img  src="@/assets/Coconut rice.jpeg" alt="Coconut rice image" width="300px" height="200px"/>.</h3>
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
                                                      <h2>COCONUT RICE AND CHICKEN </h2>
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
                                          <h3 class="lol" >Rice, Coconut milk, Fresh or desiccated coconut (optional),Onions, Garlic, Ginger, Bell peppers, Scotch bonnet peppers, Carrots, Green peas, Vegetable oil, Chicken or vegetable broth, Curry powder, Thyme, Salt, Black pepper and chicken</h3>
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
                               <h3><img src="@/assets/white rice.jpeg" alt="white rice image" width="300px" height="200px"/>.</h3>
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
                                                      <h2>RICE WITH PLANTAIN AND TURKEY </h2>
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
                                          <h3 class="lol" >Rice, water, salt, Ripe plantains, vegetable oil, salt (optional), Turkey pieces, onions, garlic, ginger, thyme, bay leaves, paprika, black pepper, salt, chicken seasoning, vegetable oil.</h3>
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
                               <h3><img src="@/assets/basmati rice.jpeg" alt="basmati rice image" width="300px" height="200px"/>.</h3>
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
                                                      <h2>BASMATI RICE & PLANTAIN AND CHICKEN </h2>
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
                                          <h3 class="lol" >Basmati rice, water, salt, vegetable oil (optional), butter (optional), Chicken pieces, onions, garlic, ginger, thyme, paprika, black pepper, salt, chicken seasoning, vegetable oil.</h3>
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
                               <h3><img src="@/assets/spaggetti.jpeg" alt="spaggetti image" width="300px" height="200px"/>.</h3>
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
                                                      <h2>SPAGETTI AN FISH SAUSE </h2>
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
                                          <h3 class="lol" >Spaghetti, water, salt, vegetable oil, Fish (mackerel, sardines, or any preferred type), tomatoes, tomato paste, onions, bell peppers, scotch bonnet peppers, garlic, ginger, vegetable oil, thyme, curry powder, bay leaves, salt, black pepper, bouillon cubes.</h3>
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
                               <h3><img src="@/assets/porage.jpeg" alt="porage image" width="300px" height="200px"/>.</h3>
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
                                                      <h2>PORAGE WITH FRIED FISH</h2>
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
                                          <h3 class="lol" >Yam or unripe plantains, palm oil, onions, scotch bonnet peppers, ground crayfish, spinach or ugu (optional), seasoning cubes, salt, dried fish or smoked fish (optional), water, Fish (tilapia, catfish, or mackerel), salt, black pepper, garlic powder, ginger powder, paprika, vegetable oil.</h3>
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
                               <h3><img src="@/assets/jollofspag.jpeg" alt="jollofspag image" width="300px" height="200px"/></h3>
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
                                                      <h2>JOLLOF SPAGETTI AND CHICKEN </h2>
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
                                          <h3 class="lol" >Spaghetti, tomatoes, tomato paste, onions, red bell peppers, scotch bonnet peppers, garlic, ginger, vegetable oil, chicken or vegetable broth, thyme, curry powder, bay leaves, salt, black pepper, Chicken pieces, onions, garlic, ginger, thyme, paprika, black pepper, salt, chicken seasoning, vegetable oil.</h3>
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
                               <h3><img src="@/assets/stir-fry.jpeg" alt="stir-fry image" width="300px" height="200px"/></h3>
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
                                                      <h2>STIR-FRY SPAGETTI WITH PLANTAIN AND TURKEY</h2>
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
                                          <h3 class="lol" >Spaghetti, bell peppers, carrots, onions, garlic, ginger, soy sauce, vegetable oil, salt, black pepper, ripe plantains, vegetable oil, salt  turkey pieces, onions, garlic, paprika, thyme, salt, black pepper, vegetable oil.</h3>
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
                               <h3><img src="@/assets/yam.jpeg" alt="yam image" width="300px" height="200px"/></h3>
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
                                                      <h2>BOILED YAM WITH FRIED EGGS </h2>
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
                                          <h3 class="lol" >Yam, water, salt (optional), eggs, onions, bell peppers, tomatoes, salt, black pepper, vegetable oil</h3>
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
                               <h3><img src="@/assets/indomie.jpeg" alt="indomie image" width="300px" height="200px"/></h3>
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
                                                      <h2>INDOMIE WITH TURKEY AND EGGS </h2>
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
                                          <h3 class="lol" >Indomie noodles, water, seasoning packets (included with noodles), vegetable oil (optional)., turkey pieces, onions, garlic, paprika, thyme, salt, black pepper, vegetable oil, eggs, salt, black pepper, vegetable oil</h3>
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

  /*hover effect*/
  .container9 .card .face{
      width: 300px;
      height: 200px;
      transition: .4s;
      top: -120px;
  }
  .container9 .card .face.face1{
      position: relative;
      background: #333;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      z-index: 1;
      transform: translateY(100px);
  }
  .container9 .card:hover .face .face1{
      transform: translateY(0)
      box-showdow
      inset 0 0 60px whitesmoke,
      inset 20px 0 80px #f0f,
      inset -20px 0 80px #0ff,
      inset 20px 0 300px #f0f,
      inset -20px 0 300px #0ff,
      0 0 50px #fff,
      -10px 0 80px #f0f,
      10px 0 80px #0ff;
  }
  .container9 .card .face.face1 .content{
      opacity: .5;
      transition: 0.5s;
      text-align: center;
      padding-bottom: 10px;
      
  }
  .container9 .card:hover .face.face1 .content{
      opacity: 995.5;
      
  }
  .container9 .card .face.face1 .content i{
      font-size: 3em;
      color: white;
      display: inline-block;
  }
  .container9 .card .face.face1 .content h3{
      font-size: 0em;
      color: white;
      text-align: center;
  }
  .container9 .card .face.face1 .content a{
      transition: .5s;
  }
  .container9 .card .face.face2{
      position: relative;
      background: whitesmoke;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 5px;
      box-sizing: border-box;
      box-shadow: 0 20px 50px rgba(0,0,0,.8);
      transform: translateY(-100px);
  }
  .container9 .card:hover .face.face2{
      transform: translateY(100px);
  }
  .container9 .card .face.face2 .content p, a{
      font-size: 10pt;
      margin: 0;
      padding: 0;
      color: #333;
  }
  .container9 .card .face.face2 .content a{
  text-decoration: none;
  color: black;
  box-sizing: border-box;
  outline: 1px dashed #333;
  padding: 10px;
  margin: 15px 0 0;
  display: inline-block;
  }
  .container9 .card .face.face2 .content a:hover{
  background: #333;
  color: whitesmoke;
  box-shadow: inset 0px 0px 10px #00000080;
  }
  /*cart*/

  .cart1 {
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 100%;
      background-color: #3300FF;
      padding: 10px;
      height: 300px;
  }
  .cart1 button {
      background-color: #4CAF50; /* Green */
      border: none;
      color: white;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin-left: auto;
  }
  
  
  </style>