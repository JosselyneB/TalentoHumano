// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Empleado from './components/Empleado.vue';
import RolPago from './components/RolPago.vue';
import Licencias from './components/Licencias.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/empleados', component: Empleado },
  { path: '/rol-pago', component: RolPago },
  { path: '/licencias', component: Licencias },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
