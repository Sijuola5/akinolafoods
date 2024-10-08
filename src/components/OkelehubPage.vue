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
                                <h3><img src="@/assets/ground rice.jpeg" alt="grouund rice image" width="300px" height="200px"/></h3>
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
                                                        <h2 >GROUND RICE<br> WITH EWEDU</h2>
                                                        <p> ₦7000</p>
                                                        <input type="number" min="0" value="0">
                                                        <button class="custom-button">Add to cart</button>
                                                        <button class="btn" id="front-button" @click="flipCard">flip</button>
                                                    </div>
                                                </div>
  
                                            </div>
                                    
                                        </div>
                                        <div class="card_side1 card_side--back">
                                            <h2>INGREDIENTS:</h2>
                                            <h3 class="lol" >Grounded rice, pepper, Ewedu,goat meat, Maggi,salt.</h3>
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
                                <h3><img src="@/assets/semovita.jpeg" alt="semovita image" width="300px" height="200px"/>.</h3>
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
                                                        <h2 >SEMOVITA WITH VEGITABLE SOUP </h2>
                                                        <p> ₦7000</p>
                                                        <input type="number" min="0" value="0">
                                                        <button class="custom-button">Add to cart</button>
                                                        <button class="btn" id="front-button" @click="flipCard">flip</button>
                                                    </div>
                                                </div>
  
                                            </div>
                                    
                                        </div>
                                        <div class="card_side1 card_side--back">
                                            <h2>INGREDIENTS:</h2>
                                            <h3 class="lol" >semovita,stockfish, Scotch bonnets (atarado), tatashe (red bell pepper), onions crayfish, water, palm oil, red onion, leaf vegetables, other vegetables, seasonings, meat.</h3>
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
                                <h3><img src="@/assets/semovita.jpeg" alt="semovita image" width="300px" height="200px"/>.</h3>
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
                                                        <h2>SEMOVITA WITH VEGITABLE SOUP </h2>
                                                        <p> ₦7000</p>
                                                        <input type="number" min="0" value="0">
                                                        <button class="custom-button">Add to cart</button>
                                                        <button class="btn" id="front-button" @click="flipCard">flip</button>
                                                    </div>
                                                </div>
  
                                            </div>
                                    
                                        </div>
                                        <div class="card_side1 card_side--back">
                                            <h2>INGREDIENTS:</h2>
                                            <h3 class="lol" >semovita,stockfish, Scotch bonnets (atarado), tatashe (red bell pepper), onions crayfish, water, palm oil, red onion, leaf vegetables, other vegetables, seasonings, meat.</h3>
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
                                <h3><img src="@/assets/eba.jpeg" alt="eba image" width="300px" height="200px"/>.</h3>
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
                                                        <h2>EBA WITH EFOELEGUSI</h2>
                                                        <p> ₦7000</p>
                                                        <input type="number" min="0" value="0">
                                                        <button class="custom-button">Add to cart</button>
                                                        <button class="btn" id="front-button" @click="flipCard">flip</button>
                                                    </div>
                                                </div>
  
                                            </div>
                                    
                                        </div>
                                        <div class="card_side1 card_side--back">
                                            <h2>INGREDIENTS:</h2>
                                            <h3 class="lol" >Grounded cassava(EBA),stockfish, Scotch bonnets (atarado), tatashe (red bell pepper), onions crayfish, water, palm oil, red onion, leaf vegetables, other vegetables, seasonings, meat.</h3>
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
                                <h3><img src="@/assets/pounded yam.jpeg" alt="pounded yam image" width="300px" height="200px"/>.</h3>
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
                                                        <h2>POUNDED YAM EFOELEGUSI </h2>
                                                        <p> ₦7000</p>
                                                        <input type="number" min="0" value="0">
                                                        <button class="custom-button">Add to cart</button>
                                                        <button class="btn" id="front-button" @click="flipCard">flip</button>
                                                    </div>
                                                </div>
  
                                            </div>
                                    
                                        </div>
                                        <div class="card_side1 card_side--back">
                                            <h2>INGREDIENTS:</h2>
                                            <h3 class="lol" >Pounded yam,stockfish, Scotch bonnets (atarado), tatashe (red bell pepper), onions crayfish, water, palm oil, red onion, leaf vegetables, other vegetables, seasonings, meat.</h3>
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
                                <h3><img src="@/assets/potato.jpeg" alt="potato image" width="300px" height="200px"/>.</h3>
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
                                                        <h2>POUNDED POTATO  WITH SOUP </h2>
                                                        <p> ₦7000</p>
                                                        <input type="number" min="0" value="0">
                                                        <button class="custom-button">Add to cart</button>
                                                        <button class="btn" id="front-button" @click="flipCard">flip</button>
                                                    </div>
                                                </div>
  
                                            </div>
                                    
                                        </div>
                                        <div class="card_side1 card_side--back">
                                            <h2>INGREDIENTS:</h2>
                                            <h3 class="lol" >Pounded Potato, pepper,goat meat, Maggi,salt, Ewedu(optional).</h3>
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
                                <h3><img src="@/assets/fufu.jpeg" alt="fufu image" width="300px" height="200px"/>.</h3>
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
                                                        <h2>FUFU WITH EFOELEGUSI </h2>
                                                        <p> ₦7000</p>
                                                        <input type="number" min="0" value="0">
                                                        <button class="custom-button">Add to cart</button>
                                                        <button class="btn" id="front-button" @click="flipCard">flip</button>
                                                    </div>
                                                </div>
  
                                            </div>
                                    
                                        </div>
                                        <div class="card_side1 card_side--back">
                                            <h2>INGREDIENTS:</h2>
                                            <h3 class="lol" >Pounded cassava(FUFU),stockfish, Scotch bonnets (atarado), tatashe (red bell pepper), onions crayfish, water, palm oil, red onion, leaf vegetables, other vegetables, seasonings, meat.</h3>
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
                                <h3><img src="@/assets/lafun.jpeg" alt="lafun image" width="300px" height="200px"/>.</h3>
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
                                                        <h2>LAFUN WITH SOUP AND EWEDU </h2>
                                                        <p> ₦7000</p>
                                                        <input type="number" min="0" value="0">
                                                        <button class="custom-button">Add to cart</button>
                                                        <button class="btn" id="front-button" @click="flipCard">flip</button>
                                                    </div>
                                                </div>
  
                                            </div>
                                    
                                        </div>
                                        <div class="card_side1 card_side--back">
                                            <h2>INGREDIENTS:</h2>
                                            <h3 class="lol" >Cassava flour(LAFUN),pepper,goat meat, Maggi,salt, Ewedu(optional)</h3>
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
                                <h3><img src="@/assets/coco.jpeg" alt="coco image" width="300px" height="200px"/></h3>
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
                                                        <h2>POUNDED COCO WITH KWONKALONG </h2>
                                                        <p> ₦7000</p>
                                                        <input type="number" min="0" value="0">
                                                        <button class="custom-button">Add to cart</button>
                                                        <button class="btn" id="front-button" @click="flipCard">flip</button>
                                                    </div>
                                                </div>
  
                                            </div>
                                    
                                        </div>
                                        <div class="card_side1 card_side--back">
                                            <h2>INGREDIENTS:</h2>
                                            <h3 class="lol" >Cocoyam,Palm oil,crayfish,Assorted meats(beaf,fishand chiken),periwinkles,vegetables,pepper and onions</h3>
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
                                <h3><img src="@/assets/plantain.jpeg" alt="plantain image" width="300px" height="200px"/></h3>
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
                                                        <h2>POUNDED PLANTAIN WITH EFO </h2>
                                                        <p> ₦7000</p>
                                                        <input type="number" min="0" value="0">
                                                        <button class="custom-button">Add to cart</button>
                                                        <button class="btn" id="front-button" @click="flipCard">flip</button>
                                                    </div>
                                                </div>
  
                                            </div>
                                    
                                        </div>
                                        <div class="card_side1 card_side--back">
                                            <h2>INGREDIENTS:</h2>
                                            <h3 class="lol" >Pounded Plantain,stockfish, Scotch bonnets (atarado), tatashe (red bell pepper), onions crayfish, water, palm oil, red onion, leaf vegetables, other vegetables, seasonings, meat</h3>
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
                                <h3><img src="@/assets/towo.jpeg" alt="towo image" width="300px" height="200px"/></h3>
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
                                                        <h2>TUWON SHINKAFA </h2>
                                                        <p> ₦7000</p>
                                                        <input type="number" min="0" value="0">
                                                        <button class="custom-button">Add to cart</button>
                                                        <button class="btn" id="front-button" @click="flipCard">flip</button>
                                                    </div>
                                                </div>
  
                                            </div>
                                    
                                        </div>
                                        <div class="card_side1 card_side--back">
                                            <h2>INGREDIENTS:</h2>
                                            <h3 class="lol" >Short grain rice (local Nigerian rice, preferably soft),Water,Salt,Miyan Kuka (Baobab leaf soup),Miyan Taushe (Pumpkin soup),Miyan Zogale (Moringa soup)</h3>
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
                                <h3><img src="@/assets/moin.jpeg" alt="moin image" width="300px" height="200px"/></h3>
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
                                                        <h2>MOIN MOIN </h2>
                                                        <p> ₦7000</p>
                                                        <input type="number" min="0" value="0">
                                                        <button class="custom-button">Add to cart</button>
                                                        <button class="btn" id="front-button" @click="flipCard">flip</button>
                                                    </div>
                                                </div>
  
                                            </div>
                                    
                                        </div>
                                        <div class="card_side1 card_side--back">
                                            <h2>INGREDIENTS:</h2>
                                            <h3 class="lol" >peeled beans and onions, fresh red peppers,<br> spices, and often fish, eggs,chicken <br> and/or crayfish.</h3>
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
.lol {
  font-size: 12px; /* or any other size you prefer */
}
.card_side--back h2 {
  font-size: 14px; /* adjust the font size to your liking */
}
ul {
  list-style: none;
}

.content-col{
width: 33.3%;
}
.content-col li {
padding-bottom: 40px;
text-decoration: none;
}
.row09{
display: flex;

}  
.content45{
padding: 50px 0;

}
.container99{
max-width: 1000px;
margin: auto;

}
.pop h2 {
  text-align: left;
  font-size: 18px;
}
.load{
    font-family: Arial, sans-serif;
    font-size: xx-small;
}
/*layout*/
.row4a
  {
      top:1700px;
      position:absolute;
      background: #2c3e50;
      border-style: solid 2 ;
      width:1270px;
      height:300px;
      display: flex;
      justify-content: space-between;
  }
.lastrow
{
    top:800px;
    position:absolute;
    
    border-style: solid 2 ;
    width:100%;
    height:320px;
    display: flex;
    justify-content: space-between;
}
.lastrow0
{
    top:500px;
    position:absolute;
    
    border-style: solid 2 ;
    width:100%;
    height:320px;
    display: flex;
    justify-content: space-between;
}
.lastrow1
{
    top:2175px;
    position:absolute;
    
    border-style: solid 2 ;
    width:100%;
    height:320px;
    display: flex;
    justify-content: space-between;
}
.lastrow9
{
    top:1000px;
    position:absolute;
    
    border-style: solid 2 ;
    width:100%;
    height:320px;
    display: flex;
    justify-content: space-between;
}
.right{
    margin: auto 20px;
}
.left{
    margin: auto 50px;
}
/*hover effect*/
.container9s .card .face{
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
.container9 .card:hover .face .face1 {
  transform: translateY(0);
  box-shadow: 0 0 60px whitesmoke, 0 20px 80px #f0f, 0 -20px 80px #0ff, 0 20px 300px #f0f, 0 -20px 300px #0ff, 0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
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
.container9 .face.face2 .content input[type="number"] {
  display: block;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 100px;
  width: 50px; /* adjust the width to your liking */
}
/*cart*/

.menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.menu-item {
    width: 200px;
    height: 150PX;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 0px;
}

.menu-item h2 {
    padding-top: 16px;
    font-size: 14px; /* reduce font size */
    line-height: 1.2; /* reduce line height */
    margin-bottom: 3px; /* reduce padding at the bottom */
}
.menu-item p {
    margin-bottom: 0;
}



.load{
    font-family: Arial, sans-serif;
    font-size: xx-small;
}

.right{
    margin: auto 20px;
}
.left{
    margin: auto 50px;
}
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

/*.card*/


.card8 {
  perspective: 1000px;
  position: relative;
  width: 300px;
  height: 200px;
  margin: 40px auto;
  left: 0px;
  top: -38px;
  display: flex;
}
.card_side {
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.6s;
}
.card8 .card_side1 {
  position: absolute;
  top: 40px;
  left: 0px;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.6s;
}

.card8 .card_side2 {
  position: absolute;
  top: 40px;
  left: 0px;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.6s;
  /* Add these properties to center the text */
  display: center;
  justify-content: center;
  align-items: center;
  text-align: center;
 
}
.card_side--front {
  background-color: #FFFDD0;
  transform: rotateY(0deg);
}

.card_side--back {
  background-color:	#FFFDD0;
  transform: rotateY(180deg);
}

.flipped .card_side--front {
  transform: rotateY(-180deg);
}

.flipped .card_side--back {
  transform: rotateY(0deg);
}
.content1{
    width: 300px;
    height: 200px;
 
    top: -120px;
    left: 90px;
}
/*btn */
.btn {
  display: inline-block;
  position: absolute;
  text-decoration: none;
  background-color: #954535;
  color: #fff;
  height: 20px;
  width: 150px;
  top: 170px;
  left: 60px;
  border: 1px solid #fff;
  letter-spacing: 1px;
  border-image: linear-gradient(to right, #fff 15%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, #fff 85%) 1;
  transition: all 0.2s;
}
.btn:hover {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
}
.btn:hover {
  transition: all 0.2s;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #fff;
}
.container9 .card .face.face2 .content h3 {
  font-style: italic;
}
</style>