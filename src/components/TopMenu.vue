<template>
  <!-- Contenedor para el menu -->
  <b-container class="menu">
    <!-- Primera fila de items -->
    <b-row>

      <b-col sm="3">
        <img src="../assets/logo.png" style="width: 15vw; padding-top: 10px" >
      </b-col>

      <b-col sm="8">
        <b-input-group class="sm" style="padding-top: 20px;">
          <b-form-input placeholder="Buscar productos..."></b-form-input>
          <b-input-group-append>
            <b-button variant="">Buscar</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>

      <b-col sm="1">
        <div>
          <router-link :to="{ name: 'register' }"><img src="../assets/Shopping_cart.png" style="width: 5vw; padding-top: 10px" ></router-link>
        </div>
      </b-col>
    </b-row>

    <!-- Segunda fila de items -->
    <b-row>

      <b-col sm="6" offset="1">

        <b-navbar class="navbar">
          <b-navbar-nav>
            <b-nav-item>Inicio</b-nav-item>

            <!-- dropdowns de categorias -->
            <b-nav-item-dropdown text="Categorias" right>
              <b-dropdown-item href="#">Tecnologia</b-dropdown-item>
              <b-dropdown-item href="#">Electrodomesticos</b-dropdown-item>
              <b-dropdown-item href="#">Juguetes</b-dropdown-item>
              <b-dropdown-item href="#">Alimentos</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="#">Mis productos</b-nav-item>
            <b-nav-item href="#">Historial</b-nav-item>
            <b-nav-item href="#">Ayuda</b-nav-item>
          </b-navbar-nav>
        </b-navbar>

      </b-col>
      <b-col sm="2">
      </b-col>

    </b-row>


  </b-container>
</template>

<script>
export default {
  name: "TopMenu"
}
</script>

<style scoped>
.navbar {
  background: #43B0DF;
  top: 0;
  width: 100%;
  align-self: center;
}
.navbar a {
  color: azure;
  height: auto;
}
.menu {
  background: #43B0DF;
  margin-left: 0px;
  margin-right: 0px;
  max-width: inherit;
}
</style>