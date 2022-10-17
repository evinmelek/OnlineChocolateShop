import cart from "./modules/cart";
import products from "./modules/products";
import productDetail from "./modules/productDetail";
import { createStore } from "vuex";

const store = createStore({
    modules: {
        cart,
        products,
        productDetail
    }
})

export default store