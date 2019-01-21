import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Projects from './views/Projects.vue';
import About from './views/About.vue';
import AAnbieter from './views/AAnbieter.vue';
import Cars from './views/pages/Cars.vue';
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import Admin from './views/Admin.vue';
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: Dashboard
                },
                {
                    path: '/projects',
                    name: 'projects',
                    component: Projects
                },
                {
                    path: '/about',
                    name: 'about',
                    component: About
                },
                {
                    path: '/aanbieter',
                    name: 'aanbieter',
                    component: AAnbieter
                },
                {
                    path: '/cars',
                    name: 'cars',
                    component: Cars
                }
            ]
        },

        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
});
