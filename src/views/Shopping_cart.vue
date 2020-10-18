<template>
<div class="container-fluid" style="padding: 0px">

  <div
      id="topMenu_div"
      class="position-sticky"
      style="position: relative; z-index: 1000;"
  >
    <TopMenu />
  </div>

  <div class="main-container">
    <div class="col-xs-12 col-sm-8 col-md-6 border rounded-lg" style="background-color: azure">
      <h3 class="col-12 text-center text-primary mt-3 mb-3">Mi carrito de Compras</h3>

      <SC_ItemList style="margin-bottom: 20px" v-bind:items="SCitems"/>

      <h4>Total a pagar: $</h4>

      <b-button-group style="margin-bottom: 20px">
        <b-button style="margin-right: 10px">Cancelar</b-button>
        <b-button variant="success">Confirmar compra</b-button>
      </b-button-group>
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
import SC_ItemList from "@/components/SC_ItemList";

export default {
  components: {
    TopMenu,
    Footer,
    SC_ItemList
  },
  data() {
    return {
      SCitems: [
          {
            id: 1,
            title: "primer item radio de baterias marca XYZ",
            quantity: 1,
            price: 100
          },
        {
          id: 2,
          title: "segundo item",
          quantity: 10,
          price: 135000
        },
        {
          id: 3,
          title: "tercer item",
          quantity: 6,
          price: 70000
        }
      ]
    }
  }
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

.border{
  border: 1px solid #054c6b!important;
}
</style>