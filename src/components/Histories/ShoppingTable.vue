<template>
  <div>
      <h1 class="tusComprasTitulo my-4 ml-5 mb-5">Tus compras</h1>
      <b-container class=" tusComprasInfo col-xs-12 col-sm-12 col-md-12 col-lg-8 border border-light rounded-lg">
        <div class="col" v-for="post in postBought" :key="post.id">
          <div class="card mb-2" style="width: auto">
            <div class="row no-gutters">
              <div class="col-sm-5">
                <img
                  class="imagenCarta card-img mt-2"
                  v-bind:src="post.post_id.image"
                  v-bind:alt="post.post_id.image"
                  
                />
              </div>
              <div class="col-sm-7">
                <div class="card-body">
                  <h5 class="card-title mb-5">Titulo del post : {{ post.post_id.title }}</h5>
                  <p class="card-text">
                    Producto : {{ post.post_id.product_name }}<br />
                    Cantidad : {{ post.post_id.stock }}<br />
                    Precio por unidad : {{ post.post_id.price }}<br />
                    Vendedor : {{ post.post_id.sellerId.name}}<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-container>
  </div>
</template>

<script>
import axios from 'axios'
import {getAuthenticationToken} from '@/dataStorage';

  export default {
    name: "ShoppingTable.vue",
    data() {
    return {
      postBought: [],
    };
  },
  beforeCreate() {
    const postPath = "/api/transactions/my-transactions";
    axios
      .get(this.$store.state.backURL + postPath, {
        headers: {
          Authorization: `bearer ${getAuthenticationToken()}`,
        },
      })
      .then((response) => {
        if (response.status !== 200) {
          alert("Error en la petición. Intente nuevamente");
        } else {
          let postsResponse = response.data;
          postsResponse.forEach((post) => {
            this.postBought.push(post);
          });
        }
      })
      .catch((response) => {
        console.log(response.status);
        alert("No es posible conectar con el backend en este momento");
      });
  },
};
</script>

<style>

.tusComprasInfo {
  justify-content: center;
  background-color: rgb(247, 247, 247);
}
.imagenCarta{
  max-height: 238px;
  max-width: 238px;
  size:auto;
}


</style>