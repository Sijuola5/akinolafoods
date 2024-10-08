<template>
    
    <row5>
        <div class="container2">
    <form action="" method="get">
        <h1 class="main_heading"> Payment Form</h1>
        <h2>Contact Information</h2>
        <p>Required field are followed by *</p>
        <p>Name: *<input type="text" name="name" required placeholder="NAME"></p>
        <fieldset>
            <legend>Gender</legend>
            <p>
            Male <input type="radio" name="gender" id="male" required> Female <input type="radio" name="gender" id="female" required>
        </p>
    </fieldset>
    <p>Address: <textarea name="address" id="address" cols="80" rows="10"></textarea></p>
    <p>Email: *<input type="Email" name="email" id="email" required></p>
    <p>Pincode: <input type="number" name="pincode" id="pincode"></p>
    <p>Card Type: *
        <select name="card_type" id="card_type">
        <option value="">--Select a Card Type--</option>
        <option value="visa">Visa</option>
        <option value="rupay">Rupay</option>
        <option value="mastercard">Mastercard</option>
    </select>
    </p>
    <p>
        Card Number: * <input type="number" name="card_number" id="card_number" required>
    </p>
    <p>
        Expiration Date: <input type="date" name="exp_date" id="exp_date">
    </p>
    <p>CVV: *<input type="password" name="cvv" id="cvv" required></p>
    <router-link to="/Confermation"><button class="bubbly-button" input type="button" value="pay now"><span> pay now </span></button></router-link>
</form>
</div>
  
</row5>
  </template>
  
  <script>
  
 
  </script>
  
  <style>
  .col3a
  {
      top:180px;
      /*right:10px;*/
      left:250px;
      position:absolute;
      border-style: solid 2 ;
      width:1005px;
  }
      .yins{  
      top: 50%;
      left: 50%; 
      text-align: center;
      font-family: Arial, sans-serif;
      font-size: xx-small;
  }

.container2{
    margin-top: 5rem;
    width: 1000px;
    border-radius: 6px;
    padding-bottom: 5rem;
    padding-left: 18rem;
    
    
}
input[type="text"],
input[type="email"],
input[type="number"],
input[type="password"],
input[type="date"],
select,
.container2-fieldset{
    width: 90%;
    padding: 12px;
    border: 1px solidc#ccc;
    border-radius: 5px;
    margin: 10px;
    
}
.container2-fieldset{
    background-color: #ffff;
    border: 1px solid #ccc;
    
    
}
.container2-main_heading{
    text-align: center;
}
.container2 input [type="submit"]:hover{
    background-color: aqua;
}
.container2 input [type="submit"]{
    background-color: bisque;
    color: white;
    padding: 12px 12px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    width: 100%;
}

  </style>