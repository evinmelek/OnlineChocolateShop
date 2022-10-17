<template>
    <div class="header">
      <router-link to="/home" class="app-name">{{ name }}</router-link>
      <p class="app-motto">{{ motto }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "RÉGLER",
            motto: "Heal with delight!"
        }
    }
    
}
</script>

<style scoped>

.header{
  background-color: burlywood;
  width: 100%;
  height: 8%;
  top: 0px;
  position: absolute;
  z-index: 1;
  box-shadow: inset 1px 2px 40px 5px rgb(179, 125, 54);
}

.app-name{
  color: whitesmoke;
  font-size: 250%; 
  position: absolute;
  right: 50%; 
  margin-top: 0.5%;
  font-weight: bold;
  font-family: BlinkMacSystemFont;  
  text-shadow: 1px 2px 9px brown; 
  text-decoration: none;
}

.app-motto{
  margin-top: 3%;
  width: 100%;
  color: white;
  font-size: 100%;  
  position: absolute;
  bottom: -15px;
  right: 0%; 
  font-style: italic;
  font-family: BlinkMacSystemFont;  
  text-shadow: 1px 1px 3px brown;
}
</style>