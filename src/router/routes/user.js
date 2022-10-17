import {createRouter, createWebHistory} from "vue-router";

const user = createRouter({
    routes: [ 

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
        }, 
    ],
    history: createWebHistory(process.env.BASE_URL)

})

export default user