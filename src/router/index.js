
import { createWebHistory,createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import SopCategoryPage from "../pages/SopCategoryPage.vue";


const routes = [
    {
        path:"/",
        name:"Home",
        component : Home
    },
    {
        path:"/sop/:category",
        name:"SopCategory",
        component : SopCategoryPage,
        props: true
    },

]

const router = createRouter({
    history:createWebHistory('/'),
    routes
})

export default router