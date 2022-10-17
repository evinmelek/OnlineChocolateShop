<template>
    <div class="navbar">
        <div class="nav-routers">
            <router-link to="/home" class="nav-router">|Home</router-link>
            <router-link to="/home" class="nav-router">|Brands</router-link>
            <router-link to="/home" class="nav-router">|Campaigns</router-link>
            <router-link to="/us" class="nav-router">|Us</router-link>
            <router-link to="/contact" class="nav-router">|Contact</router-link>
            <router-link to="/cart" class="nav-router right">|Cart</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
    
}
</script>

<style scoped>
  .navbar{
  height: 5%;
  width: 100%;
  background-color: brown;
  z-index: 9;
  top: 8%;
  right: 0px;
  position: absolute;
  overflow: hidden;
  display: inline;
}

.nav-routers{
  width: auto; 
  text-align: start;
  margin-left: 4%; 
  color: white;
  list-style-type: none;
  margin: 0;
  padding: 1%;
} 

.nav-router{
  float: left;
  margin-left: 0%; 
  color: white;
  width: 10%;
  height: 10%; 
  overflow: hidden; 
  text-decoration: none;
  overflow-y:hidden;
  white-space: nowrap;  
}

.nav-router:hover{
  background-color: peru;
  height: 5%;
  display: block;
  color: white;
  text-align: center;
  padding: 0%;
  text-decoration: none;
}

.right{
  float: right;
  margin-right: 1%;
}
</style>