<template>
  <!-- Contenedor para el menu -->
  <b-container class="menu">

    <b-row>
      <b-col class="col-12 col-sm-2" align-self="center">
        <router-link :to="{ name: 'home' }"><img src="../assets/logo.png" alt="Logo" style="width: 100%;padding-top: 10px"></router-link>
      </b-col>

    <b-col>

    <b-row>
      <!-- Primera fila de items -->
      
      <b-col class="col-8 col-sm-9" align-self="center">
        <b-input-group class="sm">
          <b-form-input placeholder="Buscar productos..."></b-form-input>
          <b-input-group-append>
            <b-button variant="">Buscar</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>

      <b-col class="col-1 col-sm-1" align-self="center">
        <div>
          <router-link :to="{ name: 'shopping_cart' }"><img src="../assets/shopping-cart.png" alt="Carrito" style="width: 100%;max-width: 80px; min-width: 25px"></router-link>
        </div>
      </b-col>


    <!-- Segunda fila de items -->


      <b-col class="col-lg-12">

        <b-navbar toggleable="lg" sticky>

          <b-navbar-toggle target="nav-collapse" style="background-color: azure; width: 30px; padding: 1px" ></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav class="show">
            <b-navbar-nav class="right-navbar">

              <b-nav-item>
              <router-link :to="{ name: 'home' }" class="menufont">Inicio</router-link>
              </b-nav-item>

              <b-nav-item-dropdown right>
                <template v-slot:button-content>
                <a style="color: azure!important; padding-top: 0">Categorias</a>
                </template>
                <b-dropdown-item href="/tecnologia">Tecnologia</b-dropdown-item>
                <b-dropdown-item href="/deportes">Deportes</b-dropdown-item>
                <b-dropdown-item href="/muebles">Muebles</b-dropdown-item>
                <b-dropdown-item href="/accesorios">Accesorios</b-dropdown-item>
                <b-dropdown-item href="/belleza">Belleza</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item>
              <router-link :to="{ name: 'produtcos' }" class="menufont">Mis productos</router-link>
              </b-nav-item>

              <b-nav-item>
              <router-link :to="{ name: 'historial' }" class="menufont">Historial</router-link>
              </b-nav-item>

              <b-nav-item>
              <router-link :to="{ name: 'ayuda' }" class="menufont">Ayuda</router-link>
              </b-nav-item>

            </b-navbar-nav>

            <b-navbar-nav class="ml-auto left-navbar">
              <b-nav-item style="border: 1px; border-radius: 16px; background-color: #43B0DF">
              <router-link :to="{ name: 'register' }" class="menufont">
                Registarse
              </router-link>
              </b-nav-item>

              <b-nav-item style="border: 1px;border-radius: 16px; background-color: #42b983">
              <router-link :to="{ name: 'iniciar_sesion' }" class="menufont">
                Ingresar
              </router-link>
              </b-nav-item>
            </b-navbar-nav>

          </b-collapse>
        </b-navbar>



      </b-col>

    </b-row>
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

.menufont {
  color: azure !important;
  text-decoration: none;
}

.menu {
  background: #012433;
  margin-left: 0;
  margin-right: 0;
  max-width: inherit;
  width: border-box;
}

@media (min-width: 992px) {

  .left-navbar {
    justify-content: space-evenly; display: flex; flex-direction: row; margin-right: 12vw; max-width: 200px; width: 17%;
  }

  .right-navbar {
    justify-content: space-between; margin-left: 1%; display: flex;width: 60%;flex-direction: row;
  }
}


</style>