<template>
  <div>
    <div
      id="topMenu_div"
      class="position-sticky"
      style="position: relative; z-index: 1000"
    >
      <TopMenu />
    </div>
    <div class="container">
      <h1>Tus compras</h1>
      <hr>
      <div class="col" v-for="post in postBought" :key="post.id">
        <div class="card" style="width: 800px">
          <div class="row no-gutters">
            <div class="col-sm-5">
              <img
                class="card-img"
                v-bind:src="post.product_id.image"
                v-bind:alt="post.product_id.image"
                style="width: 238px; height: 238px"
              />
            </div>
            <div class="col-sm-7">
              <div class="card-body">
                <h5 class="card-title">{{ post.product_id.title }}</h5>
                <p class="card-text">{{ post.product_id.description }}</p>

                <a href="/#" class="btn btn-primary" style="margin-top: 90px"
                  >${{ post.product_id.price }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <hr>
      <Footer />
    </div>
  </div>
</template>

<script>
import TopMenu from "../components/TopMenu.vue";
import Footer from "../components/Footer";
import axios from "axios";
import { getAuthenticationToken } from "@/dataStorage";
export default {
  components: {
    TopMenu,
    Footer,
  },
  data() {
    return {
      postBought: [],
    };
  },
  beforeCreate() {
    const postPath = "/api/transactions/my-transactions";
    // axios.get(this.$store.state.backURL + postPath,{
    //   headers:{
    //     Authorization: `bearer ${getAuthenticationToken()}`
    //   }
    // })
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
</style>