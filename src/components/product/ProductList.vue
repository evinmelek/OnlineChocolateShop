<template>
  <div class="home-content">
      <ul class="home-product-list">
        <li class="home-product-card" v-for="product in products" :key="product.id">
          <img  class="home-product-image" :src="product.image"/>
          <router-link to="/product" class="home-card-product-title scroll-text" @click="routeToDetail">{{ product.title }}</router-link>
          <p class="home-card-product-price scroll-text">{{ product.price }} TL</p> 
          <p class="home-product-stock scroll-text">({{product.inventory}})</p>
          <button class="add-to-cart-button" :disabled="!productIsInStock(product)"
                  @click="addProductToCart(product)">Add</button> 
        </li>  
      </ul>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex"

  export  default {

    data() {
      return {
        loading: false
      }
    },

    computed: {
        ...mapState({
      products: state => state.products.items
      }),

      ...mapGetters("products", {
        productIsInStock: "productIsInStock"
      })
    },

    methods: {
      ...mapActions({
        fetchProducts: "products/fetchProducts",
        addProductToCart: "cart/addProductToCart",
      }),
    },

    created() {
      this.loading = true
      this.fetchProducts()
          .then(() => this.loading = false)
    },

  }
</script>

<style>
.home-content{
  background: antiquewhite;
  position: absolute;
  top: 13%;
  float: center;
  right: 0px;
  width: 100%;
  right: 0px;
  height: 78%;
  z-index: 0;
  overflow: auto;
  display:inline;
}

.home-product-list{
  border: 1px solid silver;
  float: right;
  margin: 2%;  
  width: 80%;   
  height: min-content;
  list-style-type: none;
  border-radius: 10px; 
} 

.home-product-card{
  margin: 2%;
  padding: 0%;
  height: 60%;
  width: 20%;
  border: 1px solid silver; 
  border-radius: 10px; 
  float: left;
  list-style-type: none;
}

.add-to-cart-button{
  bottom: 0px;  
  width: 25%;
  margin: 4%;
  background-color: saddlebrown;
  border: 1px solid saddlebrown;
  border-radius: 10px;
  padding: 1%;
  color: white;
}

.add-to-cart-button:hover{
    background-color: rgb(151, 119, 77);
}

.home-product-image{ 
  width: 60%;
  padding: 1%;
  margin: 4%;
  float: center; 
  border-radius: 15px;
  object-fit: fill;
}

.home-card-product-title{
  width: 90%;
  float: left;
  font-size: 120%;
  font-weight: bold;
  margin: 3%;
  padding: 0%; 
  color: black;
}

.home-card-product-title:hover{
  color: brown; 
  float: left;
  text-decoration: underline;
}

.home-card-product-price{
  float: right;
  width: 30%;
  margin: 3%;
  margin-right: 15%; 
}

.home-product-stock{
  float: right;
  width: 50%;
  margin: 3%;  
}

.scroll-text{ 
  text-decoration: none;
  overflow: hidden; 
  white-space: nowrap; 
}
</style>