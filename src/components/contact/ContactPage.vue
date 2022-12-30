<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <NavbarComponent></NavbarComponent> 
    <ContactForm></ContactForm>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
 
import HeaderComponent from "../common/HeaderComponent.vue";
import FooterComponent from "../common/FooterComponent.vue";
import NavbarComponent from "../common/NavbarComponent.vue";
import ContactForm from "./ContactForm.vue"; 

export default {
    components: {
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ContactForm
}

}
</script>

<style>  
</style>