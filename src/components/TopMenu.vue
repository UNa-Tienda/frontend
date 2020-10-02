<template>
  <!-- Contenedor para el menu -->
  <b-container class="menu">
    <!-- Primera fila de items -->
    <b-row>

      <b-col sm="2" offset="1" align-self="center" class="col-xs-12">
        <img src="../assets/logo.png" style="width: 10vw;">
      </b-col>

      <b-col sm="7" align-self="center" xs="12">
        <b-input-group class="sm">
          <b-form-input placeholder="Buscar productos..."></b-form-input>
          <b-input-group-append>
            <b-button variant="">Buscar</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>

      <b-col sm="1" align-self="center">
        <div>
          <router-link :to="{ name: 'Shopping_cart' }"><img src="../assets/Shopping_cart.png" style="width: 3vw;" ></router-link>
        </div>
      </b-col>
    </b-row>

    <!-- Segunda fila de items -->
    <b-row>

      <b-col sm="6" offset="3">
        <div class="navbar">
          <router-link :to="{ name: 'Inicio' }" class="menufont">Inicio</router-link>

          <!-- dropdowns de categorias -->
          <b-dropdown text="Categorias" variant="primary">
            <b-dropdown-item href="#">Tecnologia</b-dropdown-item>
            <b-dropdown-item href="#">Electrodomesticos</b-dropdown-item>
            <b-dropdown-item href="#">Juguetes</b-dropdown-item>
            <b-dropdown-item href="#">Alimentos</b-dropdown-item>
          </b-dropdown>

          <router-link :to="{ name: 'produtcos' }" class="menufont">Mis productos</router-link>
          <router-link :to="{ name: 'historial' }" class="menufont">Historial</router-link>
          <router-link :to="{ name: 'ayuda' }" class="menufont">Ayuda</router-link>

        </div>

      </b-col>

      <b-col sm="1" offset="1" align-self="center">
        <div>
          <router-link :to="{ name: 'register' }" class="menufont">Registarse</router-link>
        </div>
      </b-col>

      <b-col sm="1" align-self="center">
        <router-link :to="{ name: 'iniciar_sesion' }" class="menufont">Ingresar</router-link>
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
  align-self: center;
}
.menufont {
  color: azure;
  height: auto;
  padding-left: 5px;
  padding-left: 5px;
}

.menu {
  background: #43B0DF;
  margin-left: 0;
  margin-right: 0;
  max-width: inherit;
  width: border-box;
}
</style>