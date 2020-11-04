<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col class="col-xs-12 col-sm-6 col-md-6 col-lg-7 cuadro1 mt-3">
        <div>
          <img v-bind:src="image" v-bind:alt="image" class="imageProduct" />
        </div>
      </b-col>
      <b-col class="col-xs-12 col-sm-6 col-md-6 col-lg-5 cuadro2 mt-3">
        <div>
          <div class="infogeneral text-left m-3">
            <h3 class="mt-2 mb-4">
              {{ product_name }}
            </h3>
            <p class="description text-justify mb-3">
              {{ description }}
            </p>
            <h5 class="text-dark">Categoria: {{ category }}</h5>
            <br />

            <h2>Precio: ${{ price }}</h2>
            <br />
            <h5 class="text-primary">Stock disponibles: {{ stock }}</h5>

            <div class="cantidad mt-3 mb-2">
              <b-row>
                <b-col cols="xs-12 sm-12 auto" md="6">
                  <h4>Cantidad :</h4>
                </b-col>
                <b-col cols="xs-12 sm-12 auto" md="6">
                  <b-form-spinbutton
                    class="col-12"
                    id="stock"
                    v-model="cantidad"
                    min="1"
                    max="10"
                  ></b-form-spinbutton>
                </b-col>
              </b-row>
              <div class="mt-5 mb-4 text-success">
                Llevas {{ cantidad }} Unidades
              </div>
            </div>
            <div>
              <b-button
              block variant="danger"
              @click="addToCart"
              >Añadir al Carrito</b-button>
            </div>
          </div>
          <div><Vendedor /></div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
import {getAuthenticationToken} from '@/dataStorage';
import Vendedor from "./Vendedor";
export default {
  name: "Info",
  data() {
    return {
      product_name: "",
      image: null,
      description: "",
      total_review: 1,
      price: 10,
      stock: 1,
      cantidad: 1,
      category_id: null,
      title: "",
      product:[],
    };
  },
  beforeCreate() {
    const postPath = "/api/post/";
    const product_id = 2;

    axios
      .get(this.$store.state.backURL + postPath + product_id+ "?access_token=" + getAuthenticationToken())
      .then((response) => {
        if (response.status !== 200) {
          alert("Error en la peticion");
        } else {
          this.description = response.data.description;
          this.stock = response.data.stock;
          this.price = response.data.price;
          this.category = response.data.category_id.name;
          this.product_name = response.data.product_name;
          this.image = response.data.image;
        }
      })
      .catch((response) => {
        console.log(response.status);
        alert("No es posible conectar con el backend en este momento");
      });
  },
  components: {
    Vendedor,    
  },
  methods:{
    addToCart(){
      this.product.push(this.response.data.name)      
    }
  }
};
</script>

<style>
.cantidad {
  align-content: center;
}
.imageProduct {
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: auto;
}
</style>
