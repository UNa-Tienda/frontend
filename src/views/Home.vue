<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <div>
                <b-button size="lg" to="iniciar_sesion" variant="secondary">Iniciar Sesión</b-button>
        </div>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>


</template> 
    

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>