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

      <SC_ItemList style="margin-bottom: 20px" v-bind:items="SCitems" v-on:del-item="deleteItem"/>

      <h4>Total a pagar: ${{total}}</h4>

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
import axios from "axios";
import {getAuthenticationToken} from '@/dataStorage';

export default {
  components: {
    TopMenu,
    Footer,
    SC_ItemList
  },
  data() {
    return {
      email: '',
      SCitems: [],
      total: 0

    }
  },
  beforeMount() {
    const postPath = "/api/shopping-cart/items";


    axios
        .get(this.$store.state.backURL + postPath + "?access_token=" + getAuthenticationToken(),)
        .then((response) => {
          if (response.status !== 200) {
            alert("Error en la petición. Intente nuevamente");
          } else {
            let postsResponse = response.data;
            // this.posts = response.data;

            postsResponse.forEach((item) => {
                this.SCitems.push(item)
                this.total = this.total + item.cartshop_item_post.price * item.quantity;
            });
          }
        })
        .catch((response) => {
          console.log(response.status);
          alert("No es posible conectar con el backend en este momento"); 
        });

  },
  methods: {
    deleteItem(id) {
      const postPath = "/api/shopping-cart/delete-item";


      console.log("item: "+id);
      this.SCitems = this.SCitems.filter(item => item.id !== id);

      axios
          .delete(this.$store.state.backURL + postPath + "?access_token=" + getAuthenticationToken() + "&id=" + id,)
          .then((response) => {
            if (response.status !== 200) {
              alert("Error en la petición. Intente nuevamente");
            }
          })
          .catch((response) => {
            console.log(response.status);
            alert("No es posible conectar con el backend en este momento");
          });

    },

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