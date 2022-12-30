<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="cart-content">
      <div class="cart-inside">
        <ul class="cart-products" v-for="product in products" :key="product.id">
          <li class="cart-each-product">
            <img :src="product.image" class="cart-product-img" />
            <router-link to="/product" class="cart-product-title">{{product.title}}</router-link>
            <p class="cart-product-price">{{ product.price }} TL</p>  
            <button class="cart-plus-button">+</button>
            <span class="cart-product-amount">{{product.quantity}}</span>
            <button class="cart-minus-button">-</button> 
          </li>  
        </ul>
      </div>      
    </div>  
    <div class="checkout">
      <h3>Total</h3>
      <p>{{total}} TL</p>
      <button class="checkout-button">Checkout</button>
    </div>
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
.cart-content{
  height: 80%;
  width: 66%;  
  float: left; 
  margin-left: 1%; 
  margin-top: 4.7%;
  overflow-x: hidden; 
  position: absolute;
  border-radius: 50px 5px 5px 50px;
  background-color: antiquewhite ;
}

.cart-inside {
  height: 100%; 
  width: 90%;  
  float: center;
  margin: 0%;  
} 

.cart-products {
  margin: 2%;
  float: center;
  padding: 1%; 
  list-style-type: none;
}

.cart-each-product {
  border: 1px solid peru;
  float: left;
  width: 100%;
  height: 20%;
  margin: 1%;
}
 
 .cart-product-img {
  height: 60%;
  width: 10%;
  margin: 1%;
  float: left;
 }
 
 .cart-product-title { 
  width: 30%;
  border-radius: 0;
  float: left;
  margin: 2.5%;
  text-decoration: none;
  color: brown;
 }

 .cart-product-price { 
  width: 10%;
  border-radius: 0;
  float: left;
  margin: 2.5%;
 }

.product-amount {
  border: 1px solid silver;
  padding: 1%;
}

.cart-plus-button, .cart-minus-button {
  background-color: brown;
  color: antiquewhite;
  padding: 1%;
  width: 5%;
  margin: 2%;
  border: 1px solid brown;
  border-radius: 10%;
}

.checkout{
  height: 40%;
  width: 30%;
  top: 20%;
  right: 1%;
  position: absolute; 
  font-size: 180%;
  border: 1px solid silver;
}

.checkout-button {
  margin: 2%;
  padding: 5%;
  border-radius: 10px;
  border: 1px solid brown;
  background-color: brown;
  color: antiquewhite;    
  font-size: 80%;
}
</style>