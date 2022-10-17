import {createRouter, createWebHistory} from "vue-router"; 

const router = createRouter({
    routes: [
        {
            name: "empty",
            path: "/",
            component: () => import("@/components/home/ContainerComponent.vue") 
        },
        {
            name: "home",
            path: "/home",
            component: () => import("@/components/home/ContainerComponent.vue") 
        },

        {
            name: "contact",
            path: "/contact",
            component: () => import("@/components/contact/ContactPage.vue")
        },

        {
            name: "contact",
            path: "/contact",
            component: () => import("@/components/contact/ContactPage.vue")
        },

        {
            name: "us",
            path: "/us",
            component: () => import("@/components/us/AboutUs.vue")
        },
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

        {
            name: "log-in",
            path: "/log-in",
            component: () => import("@/components/user/UserLogIn.vue")
        },

        {
            name: "profile",
            path: "/user",
            component: () => import("@/components/user/UserProfile.vue")
        }, 

        {
            name: "account",
            path: "/account",
            component: () => import("@/components/user/UserAccount.vue")
        },

        {
            name: "orders",
            path: "/user-orders",
            component: () => import("@/components/user/UserOrders.vue")
        }
    ],
    history: createWebHistory(process.env.BASE_URL)

})

export default router