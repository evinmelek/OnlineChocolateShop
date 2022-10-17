<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <ContentComponent></ContentComponent>
    <NavbarComponent></NavbarComponent>
    <ul>
        <li>
           Product Name
        </li>
    </ul>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from '../common/HeaderComponent.vue';
import FooterComponent from '../common/FooterComponent.vue';
import NavbarComponent from '../common/NavbarComponent.vue';
import ContentComponent from '../common/ContentComponent.vue';
export default {
    components: { HeaderComponent, FooterComponent, NavbarComponent, ContentComponent }
}
</script>

<style>

</style>