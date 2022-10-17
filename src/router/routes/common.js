import {createRouter, createWebHistory} from "vue-router";

const common = createRouter({
    routes: [
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
        }
    ],
    history: createWebHistory(process.env.BASE_URL)

})

export default common