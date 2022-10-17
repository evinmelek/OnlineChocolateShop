<template>
  <div class="content">
      <ul class="product-list">
        <li class="product-card" v-for="product in products" :key="product.id">
          <img  :src="product.image"/>
          <router-link to="/product" class="card-product-title scroll-text" @click="routeToDetail">{{ product.title }}</router-link>
          <p class="card-product-price scroll-text">{{ product.price }} TL</p> 
          <p class="product-stock scroll-text">({{product.inventory}})</p>
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
.content{
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

.product-list{
  border: 1px solid silver;
  float: right;
  margin: 2%;  
  width: 80%;   
  height: min-content;
  list-style-type: none;
  border-radius: 10px; 
}

li{
  float: left;
  list-style-type: none;
}

.product-card{
  margin: 2%;
  padding: 0%;
  height: 60%;
  width: 20%;
  border: 1px solid silver; 
  border-radius: 10px;
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

img{ 
  width: 60%;
  padding: 1%;
  margin: 4%;
  float: center; 
  border-radius: 15px;
  object-fit: fill;
}

.card-product-title{
  width: 90%;
  float: left;
  font-size: 120%;
  font-weight: bold;
  margin: 3%;
  padding: 0%; 
  color: black;
}

.card-product-title:hover{
  color: brown; 
  float: left;
  text-decoration: underline;
}

.card-product-price{
  float: right;
  width: 30%;
  margin: 3%;
  margin-right: 15%;
}

.product-stock{
  float: right;
  width: 50%;
  margin: 3%; 
}

.scroll-text{ 
  text-decoration: none;
  overflow-y:hidden;
  white-space: nowrap;  
}
</style>