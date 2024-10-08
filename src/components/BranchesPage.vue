<template>
    <row3>
     <section id="branches">
         <h2>Our Branches</h2>
         <div class="branches-container">
             <div class="branch">
                 <h3>Ikorodu</h3>
                 <p>5 Ijede Road</p>
                 <div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.755444115441!2d3.533333!3d6.633333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2a4f6685%3A0x7f4f4f4f4f4f4f4f!2s5%20Ijede%20Rd%2C%20Ikorodu%2C%20Lagos!5e0!3m2!1sen!2sus!4v1643723905623" width="950px" height="400px" frameborder="0" style="border: none" allowfullscreen=""></iframe> </div>
             </div>
             <div class="branch">
                 <h3>ikeja</h3>
                 <p>10 Allen Avenue</p>
                 <div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.755444115441!2d3.406333!3d6.453333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2a4f6685%3A0x7f4f4f4f4f4f4f4f!2s10%20Allen%20Ave%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sus!4v1643723905623" width="950px" height="400px" frameborder="0" style="border: none" allowfullscreen=""></iframe> </div>
             </div>
             <div class="branch">
                 <h3>Ikoyi</h3>
                 <p>18 Norman Williams</p>
                 <div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.755444115441!2d3.433333!3d6.433333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2a4f6685%3A0x7f4f4f4f4f4f4f4f!2s18%20Norman%20Williams%2C%20Ikoyi%2C%20Lagos!5e0!3m2!1sen!2sus!4v1643723905623" width="950px" height="400px" frameborder="0" style="border: none" allowfullscreen=""></iframe> </div>
             </div>
         </div>
     </section>
   </row3>
   </template>
 
 <script>
 
 </script>
 
 <style>
.branch h3 {
  text-align: center;
}
 
 section {
     padding: 2rem;
     text-align: center;
 }
 
 .branches-container {
     display: flex;
     justify-content: space-around;
     flex-wrap: wrap;
 }
 
 .branch {
     background-color: #fff;
     margin: 1rem;
     padding: 1rem;
     border: 1px solid #ddd;
     width: 1000px;
     box-sizing: border-box;
 }
 
 .map {
     width: 400px;
     height: 400px;
     margin-top: 1rem;
 }
 </style>