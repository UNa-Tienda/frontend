<template>
  <div id="app">

    #Menu en el tope de la pagina
    <div class="top-menu">
      <img alt="Vue logo" src="./assets/logo.png" class="icon">
      <div class="navbar">
        <a href="#Inicio">Inicio</a>
        <a href="#Categorias">Categorias</a>
        <a href="#Mis_productos">Mis productos</a>
        <a href="#Historial">Historial</a>
        <a href="#Ayuda">Ayuda</a>
      </div>
    </div>

    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navbar {
  background-color: #2c3e50;
  align-content: end;
  overflow: hidden;
}

.navbar a {
  float: left;
  color: #dddddd;
  text-align: center;
  padding: 15px 20px;
  text-decoration: none;
  font-size: 17px;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}
.top-menu {
  background: beige;
  position: fixed;
  top: 0;
  width: 100%;
}

.icon{
  height: 50px;
  position: unset;
  left: 0px;
}

</style>
