<template>
  <!-- Contenedor para el menu -->
  <b-container class="menu" fluid="true">
    <!-- Primera fila de items -->
    <b-row>
      <b-col class="col-lg-1" style="padding: 0"></b-col>
      <b-col class="col-11 col-sm-2" align-self="center" style="padding: 0">
        <img src="../assets/logo.png" style="width: 100%;padding-top: 10px">
      </b-col>
      
      <b-col class="col-7 col-sm-7" align-self="center">
        <b-input-group class="sm">
          <b-form-input placeholder="Buscar productos..."></b-form-input>
          <b-input-group-append>
            <b-button variant="">Buscar</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>

      <b-col class="col-2 col-sm-1" align-self="center">
        <div>
          <router-link :to="{ name: 'Shopping_cart' }"><img src="../assets/Shopping_cart.png"
                                                            style="width: 100%;max-width: 80px"></router-link>
        </div>
      </b-col>


    <!-- Segunda fila de items -->


      <b-col class="col-2 col-lg-12">

        <b-navbar toggleable="lg" class="navbar">

          <b-navbar-toggle target="nav-collapse" style="background-color: azure;"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav class="test">
            <b-navbar-nav style="justify-content: space-between; margin-left: 25%; display: flex;width: 60%;flex-direction: row">
              <router-link :to="{ name: 'Inicio' }" class="menufont">Inicio</router-link>

              <b-nav-item-dropdown right>
                <template v-slot:button-content>
                <a style="color: azure!important; padding-top: 0">Categorias</a>
                </template>
                <b-dropdown-item href="#">Tecnologia</b-dropdown-item>
                <b-dropdown-item href="#">Alimentos</b-dropdown-item>
                <b-dropdown-item href="#">Muebles</b-dropdown-item>
                <b-dropdown-item href="#">Otros</b-dropdown-item>
              </b-nav-item-dropdown>

              <router-link :to="{ name: 'produtcos' }" class="menufont">Mis productos</router-link>
              <router-link :to="{ name: 'historial' }" class="menufont">Historial</router-link>
              <router-link :to="{ name: 'ayuda' }" class="menufont">Ayuda</router-link>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
            <router-link :to="{ name: 'register' }"
                         style="color: azure;border: 1px solid #2c3e50; padding: 11px; margin-right: 5%; border-radius: 16px; background-color: #2c3e50">
              Registarse
            </router-link>

            <router-link :to="{ name: 'iniciar_sesion' }"
                         style="color: azure;border: 1px solid #2c3e50; padding: 11px; border-radius: 16px; background-color: #42b983">
              Ingresar
            </router-link>
            </b-navbar-nav>

          </b-collapse>
        </b-navbar>



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
  top: 0;
  align-self: center;
}

.menufont {
  color: azure !important;
  padding-left: 5vw;
  padding-right: 5vw;
}

.menu {
  background: #012433;
  margin-left: 0;
  margin-right: 0;
  max-width: inherit;
  width: border-box;
}
</style>