<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="content">
      <div class="cart">
        <ul class="cart-products" v-for="product in products" :key="product.id">
          <li class="cart-product">
            <img :src="product.image" class="cart-product-img" />
            <router-link to="/product" class="card-product-title">{{product.title}}</router-link>
            <p class="card-product-price">{{ product.price }} TL</p>  
            <button class="plus-button">+</button>
            <span class="product-amount">{{product.quantity}}</span>
            <button class="minus-button">-</button> 
          </li>  
        </ul>
      </div>      
    </div>  
    <button class="checkout-button">Checkout</button>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import HeaderComponent from '../common/HeaderComponent.vue';
import FooterComponent from '../common/FooterComponent.vue'; 
export default {
    components: { HeaderComponent, FooterComponent },
    computed: {
    ...mapState({
      products: state => state.products.items
    }),

    ...mapGetters({
      products: "cart/cartProducts",
      total: "cart/cartTotal",
      productIsInStock: "products/productIsInStock"
    }),

    ...mapState("cart", {
      checkoutStatus: state => state.checkoutStatus,
      removeFromCart: state => state.removeFromCart
    })
  },

  methods: {
    ...mapActions("cart", {
      checkout: "checkout",
      increase: "increaseFromCart",
      decrease: "decreaseFromCart",
      remove: "removeFromCart",
    })
  }
}
</script>

<style> 
.cart {
  height: auto; 
  width: 100%;  
}

.content{
  height: 75%;
  width: 70%;
  margin-top: 5%;
  margin-left: 5%; 
  border-radius: 20px;
  overflow-y: scroll; 
  position: absolute;
  background-color: antiquewhite ;
}

.cart-products {
  margin: 2%;
  float: center;
  padding: 1%;
  width: 80%;
  height: 80%;
  list-style-type: none;
}

.cart-product {
  border: 1px solid peru;
  float: left;
  width: 100%;
  height: 20%;
  margin: 0.6%;
}
 
 .cart-product-img {
  height: 60%;
  width: 10%;
  margin: 1%;
  float: left;
 }
 
 .card-product-title { 
  width: 30%;
  border-radius: 0;
  float: left;
  margin: 2.5%;
  text-decoration: none;
 }

 .card-product-price { 
  width: 10%;
  border-radius: 0;
  float: left;
  margin: 2.5%;
 }

.product-amount {
  border: 1px solid silver;
  padding: 1%;
}

.plus-button, .minus-button {
  background-color: brown;
  color: antiquewhite;
  padding: 1%;
  width: 5%;
  margin: 2%;
  border: 1px solid brown;
  border-radius: 10%;
}

.checkout-button {
  padding: 1.6%;
  font-size: 120%;
  border-radius: 20px;
  border: 1px solid brown;
  background-color: brown;
  color: antiquewhite;   
  float: right;
}
</style>