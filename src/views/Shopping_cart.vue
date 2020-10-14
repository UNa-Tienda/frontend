<template>
<div class="container-fluid">

  <div
      id="topMenu_div"
      class="position-sticky"
      style="position: relative; z-index: 1000"
  >
    <TopMenu />
  </div>

  <div class="main-container">
    <div class="col-xs-12 col-sm-8 col-md-6 border border-primary rounded-lg">
      <h3 class="col-12 text-center text-primary mt-3 mb-3">Mi carrito de Compras</h3>

      
    </div>
  </div>

  <div>
    <Footer />
  </div>
</div>
</template>

<script>
import TopMenu from "@/components/TopMenu";
import Footer from "@/components/Footer";

export default {
  components: {
    TopMenu,
    Footer,
  },
}

</script>

<style scoped>

.main-container{
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>