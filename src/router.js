import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Projects from './views/Projects.vue';
import About from './views/About.vue';
import AAnbieter from './views/AAnbieter.vue';
import Cars from './views/pages/Cars.vue';
import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
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
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
});
