<template>

  <div class="border rounded-lg">
    <div class="row">
      <div class="col-3" style="align-self: center">
        <router-link :to="{ name: 'home' }"><img src="../assets/radio.png" style="width: 100%; max-width: 150px"></router-link>
      </div>
      <div class="col-6" style="align-self: center">
        <router-link :to="{ name: 'home' }" style="text-decoration: none!important;"><h3 style="color: white!important;">{{item.title}}</h3></router-link>
        <h4>precio: ${{item.price}}</h4>
        <h4>{{item.quantity}} unidades</h4>
      </div>
      <div class="col-3" style="align-self: center">
        <b-button variant="danger">Quitar</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SCitem",
  props: ["item"]
}
</script>

<style scoped>
.border{
  border: 1px solid lightskyblue!important;
  padding: 15px;
  background-color: lightskyblue;
}
h4{
  color: #012433;
}
</style>