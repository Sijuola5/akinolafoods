<template>
    <footer class="footer">
   <div class="container09">
    <div class="row">
      <div class="footer-col">
        <h4>Contact Info</h4>
        <p class="vl"> </p> 
          <ul>
            <li>
              <p class="loy">Email: <a href="mailto:akinolafoods@gmail.com">akinolafoods@gmail.com</a></p>
            </li>
            <li>
              <p class="loy">Whatsapp No: <a href="tel:+2349013890306">+234 9013890306</a></p>
            </li>
            <li>
            <p class="loy">Phone No: <a href="tel:+2348140462059">+234 8140462059</a></p>
            </li>
           </ul>
      </div>
      <div class="footer-col">
        <h4>get help</h4>
        <p class="vl vl-2"> </p>
        <ul>
          <li><router-link to="/Faq">FAQ</router-link></li>
          <li><router-link to="/Tracking">Details</router-link></li>
          <li><router-link to="/Terms">Terms and Conditons</router-link></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <p class="vl"> </p> 
        <ul>
          <li><router-link to="/Aboutus">about us</router-link></li>
          <li><router-link to="/Branches">Branches</router-link></li>
          <li><router-link to="/Contactus">Contact us</router-link></li>
          <li><router-link to="/Pathners">Partners</router-link></li>
          </ul>
      </div>
      <div class="footer-col">
        <h4>follow us</h4>
        <p class="vl vl-3"> </p>
        <div class="social-links">
          <a @click="goToFacebook"><i class="fab fa-facebook-f"></i></a>
          <a @click="goToX"><i class="fab fa-twitter"></i></a>
          <a @click="goToThreads"><i class="fab fa-threads"></i></a>
          <a @click="goToInstagram"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
   </div>
  </footer>
</template>

<script>
export default {
name: 'FooterPage',
methods: {
goToFacebook() {
window.open("https://www.facebook.com/yourprofile", "_blank");
},
goToTelegram() {
window.open("https://t.me/yourtelegramhandle", "_blank");
},
goToX() {
window.open("https://x.com/yourxhandle", "_blank");
},
goToInstagram() {
window.open("https://www.instagram.com/yourinstagramhandle", "_blank");
},
goToThreads() {
window.open("https://www.threads.net/login/", "_blank");
},
},
}
</script>

<style scoped>
.loy {
  font-size: 18px; /* adjust the font size as needed */
  color: blue; /* change the color to blue */
}



*{
margin: 0;
padding: 0;
box-sizing: border-box;
}    
.container09{
max-width: 1000px;
margin: auto;

}
.row{
display: flex;

}  
ul{
list-style: none;
}
.footer{
background-color: #24262b;
padding: 70px 0;
}
.footer-col{
width: 25%;
/* padding: 0 15px; */

}

.footer-col h4{
/*content:'' ;
position: absolute;
left: 0;
bottom: -10px;
background-color: #e91e63;
height: 2px;
box-sizing: border-box;
width: 50px;*/
top: 0;
color: #ffffff;
font-weight: 500;
margin-bottom: 2px;
text-transform: capitalize;
/* padding-bottom: 10px;
border-bottom: 2px solid red; */
}
.vl{
width: 5rem;
background: red;
height: 2px;
display: block;
margin-right: 1.5rem;
margin-left: 5.1rem;
margin-bottom: 10px;
}
.vl-2{
margin-left: 5.9rem;
width: 4rem;
}
.vl-3{
margin-left: 5.6rem;
width: 4rem;
}
.footer-col ul li:not(:last-child){
margin-bottom: 10px;
}
.footer-col ul li a{
font-size: 16px;
text-transform: capitalize;
color: #ffffff;
text-decoration: none;
font-weight: 300;
color: #bbbbbb;
display: block;
transition: all 0.3s ease;
}
.footer-col ul li a:hover{
color: #ffffff;
padding-left: 8px;
}
.footer-col .social-links a{
display: inline-block;
height: 40px;
width: 40px;
background-color: rgba(255,255,255,0.2);
margin:0 10px 10px 0;
text-align: center;
line-height: 40px;
border-radius: 50%;
color: #ffffff;
transition: all 0.3s ease;
}
.footer-col .social-links a:hover{
color: #24262b;
background-color: #ffffff;
}
/*responsive*/
@media(max-width: 1000px){
.footer-col{
  width: 50%;
  margin-bottom: 30px;
}
}
@media(max-width: 500px){
.footer-col{
  width: 100%;
}
}
</style>
