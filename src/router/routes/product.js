import {createRouter, createWebHistory} from "vue-router";

const product = createRouter({
    routes: [
        {
            name: "products",
            path: "/products",
            component: () => import("@/components/product/ProductList.vue")
        },

        {
            name: "cart",
            path: "/cart",
            component: () => import("@/components/cart/ShoppingCart.vue")
        },

        {
            name: "product-detail",
            path: "/product",
            component: () => import("@/components/product/ProductDetail.vue")
        },
    ],
    history: createWebHistory(process.env.BASE_URL)

})

export default product