<template>
  <div>
    <TopMenu />
    <div class="container-fluid productfondo">
      <b-container class="bv-example-row">
        <b-row>
          <b-col class="col-xs-12 col-sm-6 col-md-6 col-lg-7 cuadro1 mt-3">
            <div>
              <ImageProduct />
            </div>
          </b-col>
          <b-col class="col-xs-12 col-sm-6 col-md-6 col-lg-5 cuadro2 mt-3">
            <div><Info /></div>
            <div><Vendedor /></div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Info from "../components/product/Info";
import ImageProduct from "../components/product/ImageProduct";
import Vendedor from "../components/product/Vendedor";
import TopMenu from "../components/TopMenu";
export default {
  components: {
    TopMenu,
    Info,
    ImageProduct,
    Vendedor,
  },
};
</script>

<style>
.productfondo {
  background: #d1dadd;
}
.cuadro1 {
  background: white;
}
.cuadro2 {
  background: white;
}
</style>
