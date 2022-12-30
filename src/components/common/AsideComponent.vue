<template>
   <div class="aside">
      <menu class="aside-menu"><a class="material-icons aside-icon" @click="isHidden = !isHidden">menu</a></menu>
      <div class="menu-items" v-show="isHidden">
        <router-link to="/user" class="menu-item">Profile</router-link>
        <router-link to="/account" class="menu-item">Account</router-link>
        <router-link to="/user-orders" class="menu-item">Orders</router-link>
        <router-link to="/log-in" class="menu-item">Log Out</router-link>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isHidden: false
        }
    },
}
</script>

<style>
div{
    font-family: "Lato", sans-serif;
}

.aside{
  width: 13%;
  background-color: peru;
  height: 79%;
  position: absolute;
  top: 13%;
  left: 0px;
  z-index: 0;
}

.aside-icon{ 
  padding: 0%; 
  color: white;
}

.aside-menu{ 
  padding: 10%;  
  margin-top: 0%;
  list-style: none;  
  font-size: 120%;
  color: white;
  font-weight: bold;
} 

.aside-menu:hover{
  background-color: rgb(207, 143, 78);
}

.menu-items{ 
  color: #fff;  
  float: left;
  display:list-item;
  padding: 1%; 
  opacity: 0.8;
  background-color: rgb(207, 143, 78);
}

.menu-item{
  float: left;
  padding: 10%;
  margin: 5%; 
  text-decoration: none;
  color: white;
}

.menu-item:hover{
  background-color: peru;  
  width: 60%;
  opacity: 1;
}
</style>