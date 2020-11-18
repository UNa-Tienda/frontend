<template>
  <div>
    <TopMenu />
    <div class="container-fluid productfondo">
      <Info v-bind:product="product"/>
    </div>
  </div>
</template>

<script>
import Info from "../components/product/Info";
import TopMenu from "../components/TopMenu";
export default {
  components: {
    TopMenu,
    Info,
  }
};
</script>

<style>
.productfondo {
  background: #d1dadd;
}
.cuadro1 {
  background: white;
  min-width: 200px;
  min-height: 90vh;
}
.cuadro2 {
  background: white;
}
</style>
