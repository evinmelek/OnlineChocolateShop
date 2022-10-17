<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div>
      <img src="https://cdn.picpng.com/person/person-individually-alone-icon-49284.png"/>
    </div>
    <div class="user-info">
      <p class="user">User Name:</p> <input class="info"> 
      <p class="user">User Mail:</p> <input class="info">
      <p class="user">User Phone:</p> <input class="info">
      <button class="save-button">Save</button>
    </div> 
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from '../common/HeaderComponent.vue';
import FooterComponent from '../common/FooterComponent.vue'; 
export default {
    components: { HeaderComponent, FooterComponent }
}
</script>

<style>
img{
  height: 10%;
  width: 10%;
  border: 2px solid peru;
  margin: 10%;
  border-radius: 50%; 
  float: left;
}

.user{
  padding: 2%;
  float: left; 
  width: 50%;
  border: 1px solid peru;
}

.info{ 
  padding: 2%;
  float: right; 
  width: 38%;
  margin-top: 2.6%;
  border: 1px solid peru;
}

.user-info{
  float: left;
  margin: 8%;
  border: 1px solid peru;
  padding: 2%;
  width: 40%;
  margin-left: 1%;
}

.save-button{
  padding: 2%;
  margin: 3%;
  width: 15%;
  background-color: brown ;
  color: antiquewhite;
  border-radius: 15px;
  border: 1px solid brown;

}

.save-button:hover{
  background-color: antiquewhite;
  color: brown;
}

.save-button:active{
  width: 13%;
}
</style>