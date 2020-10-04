<template>
  <!-- Contenedor para el menu -->
  <b-container class="menu" fluid="true">
    <!-- Primera fila de items -->
    <b-row align-content="">

      <b-col class="col-12 col-sm-2 col-lg-2" align-self="center">
        <img src="../assets/logo.png" style="width: 100%;padding: 10px">
      </b-col>
      
      <b-col class="col-8 col-sm-7" align-self="center">
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


      <b-col class="col-1 col-lg-12">

        <b-navbar toggleable="lg" class="navbar">

          <b-navbar-toggle target="nav-collapse" style="background-color: azure;"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav class="test">
            <b-navbar-nav>
              <router-link :to="{ name: 'Inicio' }" class="menufont">Inicio</router-link>

              <b-nav-item-dropdown text="Categorias" right>
                <b-dropdown-item href="#">Tecnologia</b-dropdown-item>
                <b-dropdown-item href="#">Alimentos</b-dropdown-item>
                <b-dropdown-item href="#">Muebles</b-dropdown-item>
                <b-dropdown-item href="#">Otros</b-dropdown-item>
              </b-nav-item-dropdown>

              <router-link :to="{ name: 'produtcos' }" class="menufont">Mis productos</router-link>
              <router-link :to="{ name: 'historial' }" class="menufont">Historial</router-link>
              <router-link :to="{ name: 'ayuda' }" class="menufont">Ayuda</router-link>
            </b-navbar-nav>

            <b-navbar-nav>
            <router-link :to="{ name: 'register' }" class="menufont"
                         style="border: 1px solid #2c3e50; padding: 11px; border-radius: 16px; background-color: #2c3e50">
              Registarse
            </router-link>

            <router-link :to="{ name: 'iniciar_sesion' }" class="menufont"
                         style="border: 1px solid #2c3e50; padding: 11px; border-radius: 16px; background-color: #2c3e50">
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
  width: 13vw;
}

.menu {
  background: #012433;
  margin-left: 0;
  margin-right: 0;
  max-width: inherit;
  width: border-box;
}
</style>