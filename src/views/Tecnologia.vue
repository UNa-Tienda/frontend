<template>
  <div>
    <div
      id="topMenu_div"
      class="position-sticky"
      style="position: relative; z-index: 1000"
    >
      <TopMenu />
    </div>

    <div
      class="w3-main w3-content w3-padding"
      style="max-width:1200px;margin-top:50px"
    >
      <div>
        <div>
          <!-- <h1>Tecnología</h1> -->
          <CategorySearch :category="category"></CategorySearch>
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import TopMenu from "../components/TopMenu.vue";
import CategorySearch from "../components/CategorySearch";
import Footer from "../components/Footer";
export default {
  components: {
    TopMenu,
    CategorySearch,
    Footer,
  },
  data() {
    return{
      category: 'Tecnología'
    }
  },
};
</script>

<style></style>