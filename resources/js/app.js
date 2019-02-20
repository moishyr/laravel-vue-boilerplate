
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from './Main.vue';
import c from './pages';

Object.keys(c).forEach(key => Vue.component(key, c[key]));

import routes from './routes';
const router = new VueRouter({ routes });

Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
    router,
    render: h => h(Main)
}).$mount('#app');
