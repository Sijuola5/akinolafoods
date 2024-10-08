<template>
    <div id="app">
        <row3>
            <div class="col1"> 
                <img src="@/assets/spicykitchen.jpg" alt="Rice image" width="290px" height="300px"/>
                <br/>
                <router-link to="/Spicy"><button class="button2"><span> SPICY KITCHEN </span></button></router-link>
            </div>		
            <div class="col2">
				<img src="@/assets/okelehub.jpg" alt="okele image" width="290px" height="300px" />
                <br/>
                <router-link to="/Okele"><button class="button2"><span> OKELE HUB </span></button></router-link>
            </div>	
			<div class="col3" allign="center">
				<img src="@/assets/cakesnack.jpg" alt="snacks image" width="290px" height="300px" />
           <br/>
           <router-link to="/Cakesnack"><button class="button2"><span> CAKE SNACKS BAR </span></button></router-link> 
              </div>
            </row3>
    </div>
</template>

<script>

</script>

<style scoped>
#app {
  margin-top: 0px;
	display: flex;
}
.col1
{
	top:250px;
	/*right:10px;*/
	left:330px;
	position:absolute;
	width:300px;
	height:500px;
	
}
.col2
{
	top:250px;
	/*right:10px;*/
	left:730px;
	position:absolute;
	width:300px;
	height:500px;
	
}
     .col3
{
	top:250px;
	/*right:10px;*/
	left:1130px;
	position:absolute;
	width:300px;
	height:500px;
	
}
button{
    display:inline;
    border: 0.25em solid #1A1A1A;
    border-radius: 2em;
    box-sizing:border-box;
    color: #3B3B3B;
    cursor:pointer;
    font-size: 16px;
    font-weight: 600;
    padding: 1em 2.5em;
    text-align: center;
    transition: all 300ms cubic-bezier(.23,1,0.32,1);
}
/*hover effect*/
button:hover{
    color:#fff;
    background-color: #1A1A1A;
    box-shadow: rgba(0, 0, 0, 0.5) 0 10px 20px;
    transform: translateY(-2px);
}
/*button pressing effect*/
button:active{
    box-shadow: none;
    transform: translateY(0);
}
.container .card .face{
    width: 300px;
    height: 200px;
    transition: .4s;
    top: -120px;
}
.container .card .face.face1{
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
}
.container .card:hover .face .face1{
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
.container .card .face.face1 .content{
    opacity: .5;
    transition: 0.5s;
    text-align: center;
    padding-bottom: 10px;
    
}
.container .card:hover .face.face1 .content{
    opacity: 995.5;
    
}
.container .card .face.face1 .content i{
    font-size: 3em;
    color: white;
    display: inline-block;
}
.container .card .face.face1 .content h3{
    font-size: 0em;
    color: white;
    text-align: center;
}
.container .card .face.face1 .content a{
    transition: .5s;
}
.container .card .face.face2{
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
.container .card:hover .face.face2{
    transform: translateY(100px);
}
.container .card .face.face2 .content p, a{
    font-size: 10pt;
    margin: 0;
    padding: 0;
    color: #333;
}
.container .card .face.face2 .content a{
text-decoration: none;
color: black;
box-sizing: border-box;
outline: 1px dashed #333;
padding: 10px;
margin: 15px 0 0;
display: inline-block;
}
.container .card .face.face2 .content a:hover{
background: #333;
color: whitesmoke;
box-shadow: inset 0px 0px 10px #00000080;
}
</style>
