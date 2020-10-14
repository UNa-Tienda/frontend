<template>
<div class="container-fluid">

  <div
      id="topMenu_div"
      class="position-sticky"
      style="position: relative; z-index: 1000"
  >
    <TopMenu />
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

</style>