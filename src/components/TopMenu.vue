<template>
  <!-- Contenedor para el menu -->
  <b-container class="menu">
    <!-- Primera fila de items -->
    <b-row>
      <b-col>

      </b-col>
      <b-col>
        <b-input-group class="sm">
          <b-form-input></b-form-input>
          <b-input-group-append>
            <b-button variant="">Search</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
      <b-col>

      </b-col>

    </b-row>

    <!-- Segunda fila de items -->
    <b-row>
    <b-navbar class="navbar">
      <b-navbar-nav>
        <b-nav-item href="#"><span class="fa fa-home"></span>Inicio</b-nav-item>

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
  left: 0;

}
.navbar a {

}
.menu {
  background: #43B0DF;
  margin-left: 0px;
  margin-right: 0px;
  max-width: inherit;
}
</style>