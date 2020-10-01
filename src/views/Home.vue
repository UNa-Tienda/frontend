<template>

  <div class="container-fluid mt-2">
    <h1>Pagina principal</h1>
    <div>
      <router-link :to="{ name: 'register' }">Registrarse</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'iniciar_sesion' }">Iniciar Sesión</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'profile' }">Plantilla perfil</router-link>
    </div>

    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>


<script></script>

<style>
h1 {
  text-align: center;
}
</style>
