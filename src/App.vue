<template>
  <div id="app">
    <div class="super">
    <img alt="Vue snack" src="./assets/logo.png">
  </div>
    

    <div class="poy">
      <router-link to="/Login"><button class="logo-button"><span> Log in </span></button></router-link>
    </div>
    <Navigation />
    <router-view />
    <FooterPage />
  </div>
</template>

<script>
import Navigation from './components/NavigationPage.vue'
import FooterPage from './components/FooterPage.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    FooterPage
    
  }
}

</script>

<style>
body {
  background-color: #F8C8DC;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  height: 800px;
}
.super {
  margin-top: 0px;
  width: 100px;
  height: 100px;
  display: flex;
  top: 0%;
  left: 0%;
}

.poy {
  position: absolute;
  top: 20px;
  right: 20px; /* adjust this value to 20px */
}

.Head {
  top: 20px;
  font-size: 30px;
  font-weight: bold;
  color: #1A1A1A;
  text-align: center;
  padding: 20px;
  margin: 0 auto; /* Changed to center the heading horizontally */
}

.logo-button {
  display: inline;
  border: 0.25em solid #1A1A1A;
  border-radius: 2em;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 1em 2.5em;
  text-align: center;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
}

/* Hover effect */
.logo-button:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.5) 0 10px 20px;
  transform: translateY(-2px);
}

/* Pressing effect */
.logo-button:active {
  box-shadow: none;
  transform: translateY(0);
}

</style>