<template>
    <!--Header row-->
<div class="row2">
   <div class="flash">
     <div  :class='Header' class="animation start-home" >
        <input type="checkbox" class="opensidebarMenu" id="opensidebarMenu">
        <label for="opensidebarMenu" class="sidebarIconToggle">
            <div class="spinner diagonal part-1"></div>
            <div class="spinner horizontal"></div>
            <div class="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
            <ul class="sidebarMenuInner">
                <li> AKINOLA FOODS <span> FEEDING LAGOS </span></li>
                <li><router-link to="/Spicy">Spicy Kitchen</router-link></li>
                <li><router-link to="/Okele">Okele Hub</router-link></li>
                <li><router-link to="/Cakesnack">Cake Snack Bar</router-link></li>
                <li><router-link to="/Faq">FAQ</router-link></li>
                <li><router-link to="/Tracking">Details</router-link></li>
                <li>
                    <div >
                        <label class="switch">
                        <input class="switch__toggle" type="checkbox">
                        <span class="switch__slider slider--round"></span>
                        </label>
                    </div>
                        <br>  </li></ul>



        </div>
            <div>
					<div>
						<nav>
							<a><router-link to="/">Home</router-link></a>
							<a><router-link to="/Branches">Branches</router-link></a>
							<a><router-link to="/Pathners">Partners</router-link></a>
							<a><router-link to="/Aboutus">About us</router-link></a>
							<a><router-link to="/Contactus">Contact Us</router-link></a>
                            <div class="animation start-home"></div>
						</nav>
					</div>
			</div>
        
    </div>
</div>

</div>
</template>

<script>
export default {
  data() {
    return {
      toggle: null,
      body: null
    }
  },
  mounted() {
    this.toggle = document.getElementsByClassName("switch__toggle")[0];
    this.body = document.body;

    this.toggle.addEventListener("click", this.toggleClickHandler);
  },
  beforeUnmount() {
    this.toggle.removeEventListener("click", this.toggleClickHandler);
  },
  methods: {
    toggleClickHandler() {
      if (this.toggle.checked === true) {
        this.body.style.backgroundColor = "#6E260E";
      } else {
        this.body.style.backgroundColor = "#F8C8DC";
      }
    },
    goToFacebook() {
      window.open("https://www.facebook.com/yourprofile", "_blank");
    },
    goToTelegram() {
      window.open("https://core.telegram.org/blackberry/login", "_blank");
    },
    goTolinkedin() {
      window.open("https://www.linkedin.com/company/login", "_blank");
    },
     goToX() {
      window.open("https://x.com/i/flow/login", "_blank");
    },
    goToInstagram() {
      window.open("https://www.instagram.com/accounts/login/", "_blank");
    },
  }
}
</script>

<style scoped>
.flash{
    margin-left: 400px;
}
.row2
{
	top:70px;
	/*right:10px;*/
	left:10px;
	position:absolute;
	border-style: solid 2 ;
	width:1000px;
	height:90px;

}
@media(max-width: 1000px){
  #app{
    max-width: 100%;
    padding: 0 15px;
  }
}

nav{
    margin:27px auto 0;
    position: relative;
    width: 520px;
    height: 50px;
    background-color: #FFFDD0;
    border-radius: 8px;
    font-size: 0;
    text-align: right 15px;
}
.navclass{
    width: 100%;
    position: absolute;
    top: 50px;
}
nav a{
    line-height: 50px;
    height: 100%;
    font-size: 15px;
    display: inline-block;
    position: relative;
    z-index: 1;
    text-decoration: none;
    text-transform: uppercase;
    text-align: left;
    color: black;
    cursor: pointer;
}
nav .animation{
    position: absolute;
    height: 100%;
    top: 0;
    z-index: 0;
    transform: all .5s ease 0s;
    border-radius: 8px;
}
a:nth-child(1){
    width: 100px;
}
a:nth-child(2){
    width: 110px;
}
a:nth-child(3){
    width: 100px;
}a:nth-child(4){
    width: 100px;
}
a:nth-child(5){
    width: 100px;
}
nav .start-home, a:nth-child(1):hover~.animation{
    width: 100px;
    left:0;
    background-color:#954535;
}
nav .start-home, a:nth-child(2):hover~.animation{
    width: 100px;
    left:100px;
    background-color:#954535;
}
nav .start-home, a:nth-child(3):hover~.animation{
    width: 100px;
    left:200px;
    justify-content: center;
    background-color:#954535;
}
nav .start-home, a:nth-child(4):hover~.animation{
    width: 100px;
    left:300px;
    background-color:#954535;
}
nav .start-home, a:nth-child(5):hover~.animation{
    width: 120px;
    left:400px;
    background-color:#954535;
}
body{
    font-size: 12px;
    font-family: sans-serif;
    background: #2c3e50;
}
span{
    color:#2BD6B4
}
@import url('https:fonts.googleapis.com/css? family=Varela+Round');
html,
body{
    overflow-x: hidden;
    height: 100%;
    box-sizing: border-box;
}

.header{
    display: block;
    margin: center;
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    background-color: #3F5EFB;
    position: fixed;
    height: 60px !important;
    overflow: hidden;
    z-index: 10;
    margin-left: 600px;
}
.Main{
    margin: 0 auto;
    display: block;
    height: 100%;
    margin-top:  60px;
}
.mainInner {
    display: table;
    height: 100%;
    width: 100%;
    text-align: center;
}
.mainInner div {
    display: table-cell;
    vertical-align: middle;
    font-size: 3em;
    font-weight: bold;
    letter-spacing: 1.25px;
}
#sidebarMenu {
    height: 100%;
    position: absolute;
    left: 0;
    width: 250px;
    margin-top: 60px;
    transform: translateX(-250px);
    transition: transform 250ms ease-in-out;
    background: #eed6c2;
}
.sidebarMenuInner{
    margin: 0;
    padding: 0;
    border-top: 1px solid rgba( 255, 255 255, 0.10);
    background: #eed6c2;
}
.sidebarMenuInner li {
    list-style: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid rgba( 255, 255 255, 0.10);
}
.sidebarMenuInner li span{
    display: block;
    font-size: 14px;
    color: rgba( 255, 255 255, 0.50);
}
.sidebarMenuInner li a {
    color:#9b59b6;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
}
input[type="checkbox"]:checked ~#sidebarMenu{
    transform: translateX(0);
}
input[type=checkbox] {
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;
}
.sidebarIconToggle{
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    z-index: 99;
    height: 100%;
    width: 100%;
    top: 3rem;
    left: 15px;
    height: 22px;
    width: 22px;
}
.spinner{
    transition: all 0,3s;
    box-sizing: border-box;
    position: relative;
    height: 3px;
    width: 100%;
    background-color: black;
    margin: 2px 0;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
.switch {
position: relative;
display: inline-block;
width: 4rem;
height: calc(3.5rem / 1.8);
/* Rounded sliders */
}
.switch__toggle {
opacity: 0;
width: 0;
height: 0;
}
.switch__toggle:checked + .switch__slider {
background-color: #6E260E;
}
.switch__toggle:focus + .switch__slider {
box-shadow: 0 0 1px #2196f3;
}
.switch__toggle:checked + .switch__slider:before {
transform: translate(calc(3.5rem - calc(calc(3.5rem / 1.8) / 1.4) - (calc(3.5rem / 1.8) - calc(calc(3.5rem / 1.8) / 1.4))), 50%);
background-color: #211b1b;
box-shadow: inset calc(-3.5rem / 7) 0 0 3px #F8C8DC;
}
.switch__slider {
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #00033f;
transition: 0.4s ease-in;
}
.switch__slider:before {
position: absolute;
content: "";
height: calc(calc(3.5rem / 1.8) / 1.4);
width: calc(calc(3.5rem / 1.8) / 1.4);
left: calc((calc(3.5rem / 1.8) - calc(calc(3.5rem / 1.8) / 1.4)) / 2);
bottom: 50%;
transform: translate(0, 50%);
background-color: #6E260E;
box-shadow: inset -12px 5px 0 20px transparent;
transition: 0.4s ease-in;
}
.switch .slider--round {
border-radius: calc(2rem / 1.8);
}
.switch .slider--round:before {
border-radius: 50%;
}
/*footer*/
footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    bottom: 0;
}
</style>