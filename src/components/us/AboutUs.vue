<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <ContentComponent></ContentComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from '../common/HeaderComponent.vue';
import FooterComponent from '../common/FooterComponent.vue';
import ContentComponent from '../common/ContentComponent.vue';
export default {
    components: { HeaderComponent, FooterComponent, ContentComponent }
}
</script>

<style>

</style>