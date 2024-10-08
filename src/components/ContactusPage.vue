<template>
    <div id="app">
      <div class="row3a">
    <div class="container1">
  <h1>Contact Us</h1>
  <form action="#" method="post">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required>
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <div class="form-group">
        <label for="picture">Picture:</label>
        <input type="file" id="picture" name="picture">
      </div>

      <input type="submit" value="Submit">
  </form>
  </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.row3a
{
  top:180px;
  /*right:10px;*/
  left:250px;
  position:absolute;
  border-style: solid 2 ;
  width:1005px;
  height:700px;
}
h1 {
          color: #333;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
          text-align: center;
      }
      form {
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          margin: auto;
          max-width: 600px;
          padding: 30px;
      }
      label {
          display: block;
          margin-bottom: 10px;
      }
      input[type="text"],
      input[type="email"],
      input[type="tel"],
      select,
      textarea {
          border-radius: 3px;
          border: none;
          box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.1);
          display: block;
          font-size: inherit;
          margin-bottom: 20px;
          padding: 10px;
          width: 100%;
      }
      input[type="submit"] {
          background-color: #333;
          border-radius: 3px;
          border: none;
          color: #fff;
          cursor: pointer;
          font-size: inherit;
          padding: 10px;
      }
      
      .form-group{
          display:flex; 
          flex-direction : column; 
          margin-bottom :20px; 
      }
      .form-group label{
          font-weight : bold; 
          margin-bottom :5px; 
      }
      .form-group input{
          padding :10px; 
          border-radius :5px; 
          border :none; 
          box-shadow :inset 0 -2px rgba(0,0,0,.1); 
          font-size :inherit; 
      }
      .form-group input:focus{
          outline:none; 
      }
      .form-group textarea{
          padding :10px; 
          border-radius :5px; 
          border :none; 
          box-shadow :inset 0 -2px rgba(0,0,0,.1); 
          font-size :inherit; 
      }
      .form-group textarea:focus{
          outline:none; 
      }
      .form-group select{
          padding :10px; 
          border-radius :5px; 
          border :none; 
          box-shadow :inset 0 -2px rgba(0,0,0,.1); 
          font-size :inherit; 
      }
      .form-group select:focus{
          outline:none; 
      }
</style>