<template> 
   <div class="container">
      <header>
        <HeaderComponent></HeaderComponent>
      </header>
      <navbar>
        <NavbarComponent></NavbarComponent>
      </navbar>
      <content>
        <ProductList></ProductList>
      </content>
      <footer>
        <div></div>
      </footer>
  </div> 
  <div>
    <aside v-show="true">
      <AsideComponent></AsideComponent>
    </aside>
  </div>
  <footer>
    <FooterComponent></FooterComponent>
  </footer>
</template>

<script>
import NavbarComponent from "../common/NavbarComponent.vue";
import AsideComponent from "../common/AsideComponent.vue";
import HeaderComponent from "../common/HeaderComponent.vue";
import ProductList from "../product/ProductList.vue";
import FooterComponent from "../common/FooterComponent.vue";
export default {
  
    components: { NavbarComponent, AsideComponent, HeaderComponent, ProductList, FooterComponent }
}
</script>

<style scoped>
.container { 
  height: 100%;
  width: auto;
  z-index: 0;
}
</style> 
