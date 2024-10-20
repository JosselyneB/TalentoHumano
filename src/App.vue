<!-- src/App.vue -->
<template>
    <div id="app">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/empleados">Empleados</router-link>
        <router-link to="/rol-pago">Rol de Pago</router-link>
        <router-link to="/licencias">Licencias</router-link>
      </nav>
      <router-view />
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  };
  </script>
  
  <style>
  /* Agrega tus estilos aquí */
  nav {
    margin-bottom: 20px;
  }
  nav a {
    margin: 0 10px;
    text-decoration: none;
  }
  </style>
  