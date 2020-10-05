<template>
  <div class="container-fluid">
    <h1>Pagina principal</h1>
    <div>
      <router-link :to="{ name: 'register' }">Registrarse</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'iniciar_sesion' }">Iniciar Sesión</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
h1 {
  text-align: center;
}
</style>
