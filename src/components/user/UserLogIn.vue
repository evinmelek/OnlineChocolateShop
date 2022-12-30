<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="login-content">
      <div class="login-form">
      <h2>Log In</h2>
        <input type="email"  placeholder="E-mail" class="login-input"/>
        <input type="password" placeholder="Password"  class="login-input"/>
        <button class="login-button">Login</button>
      </div>
      <div class="register">
        <div class="register-form">
        <h2>Or Register</h2>
            <div class="input-space">
                <a class="input-header">Name: </a> 
                <input type="text" maxlength="24" class="register-input" /> 
                <a class="input-header">Surname: </a>
                <input type="text" maxlength="24" class="register-input"/> 
                <a class="input-header">Email: </a>
                <input type="email" maxlength="24" class="register-input"/>
                <a class="input-header">Telephone: </a>
                <input type="number" maxlength="24" class="register-input"/> 
                <button class="register-button ">Register</button>
            </div> 
      </div>  
      </div>
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
.login-content {
  height: 92%;
  width: 100%; 
  bottom: 0px;
  position: absolute;
  background-color: antiquewhite;
}

.login-form{ 
  float: left;
  margin-left: 14%; 
  margin-top: 9%;
  padding: 2%;
  border-radius: 6px 52px ;
  opacity: 0.8;
  background-color: white;
}

.login-input{
  margin: 2%;
  border-radius: 6px 52px ;
  text-align: center;
}

.register-form{
  margin: 4%; 
  padding: 1%;
  width: 40%;
  height: auto;
  float: right;
  border-radius: 60px 5px ;
  opacity: 0.8;
  background-color: white;
  font-size: 120%;

}

.input-space{
  width: 50%;
  height: 20%;
  float: right;
  margin: 2%;
}

.register-input{
  float: right;
  padding: 1%;
  width: 100%;
  margin-right: 40%;
  height: 20px;
  border: 1px solid silver;
  border-radius: 60px 5px ;
  text-align: center; 
}

.input-header{
  float: left; 
  margin: 1%;
}

.login-button{
  border: 1px solid peru;
  color: white;
  background-color: peru;
  border-radius: 5px; 
  padding: 1%;
  margin: 2%;
}

.register-button{
  float: left;
  margin-top: 6%;  
  padding: 1.3%; 
  border: 1px solid peru;
  color: white;
  background-color: peru;
  border-radius: 5px;   
}
</style>