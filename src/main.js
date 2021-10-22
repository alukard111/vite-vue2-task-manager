import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'

import { initializeApp } from "firebase/app";

import './index.css'


const firebaseConfig = {
  apiKey: "AIzaSyCyEpE-qHPZ-A7Jbpy4qIGmlV82xBaRRqs",
  authDomain: "todo-vue2-vite.firebaseapp.com",
  projectId: "todo-vue2-vite",
  storageBucket: "todo-vue2-vite.appspot.com",
  messagingSenderId: "526687491441",
  appId: "1:526687491441:web:ab29c0937f8ab6028c12d0",
  databaseURL: 'todo-vue2-vite-default-rtdb.firebaseio.com',

};


initializeApp(firebaseConfig)


new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
