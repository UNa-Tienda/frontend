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
              {{ productName }}
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
                    id="cantidad"
                    v-model="cantidad"
                    :class="{
                      'is-invalid': cantidad !== '' && cantidad > stock,
                      'is-valid': cantidad !== '' && cantidad <= stock,
                    }"
                  ></b-form-spinbutton>
                  <div class="valid-feedback">
                    Llevas {{ cantidad }} Unidades
                  </div>
                  <div class="invalid-feedback">
                    No hay mas unidades disponibles, puedes llevar max
                    {{ stock }} productos
                  </div>
                </b-col>
              </b-row>
            </div>
            <br />
            <div>
              <b-button block variant="danger" @click="addCarrito"
                >Añadir al Carrito</b-button
              >
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
import Vendedor from "./Vendedor";
import {getAuthenticationToken} from "@/dataStorage";

export default {
  name: "Info",
  data() {
    return {
      productName: "",
      image: "",
      description: "",
      total_review: 1,
      price: 10,
      stock: 1,
      cantidad: 1,
      categoryId: null,
      title: "",
      product: [],
    };
  },
  beforeCreate() {
    const postPath = "/api/post/";
    let productId = this.$route.params.id;

    axios
      .get(this.$store.state.backURL + postPath + productId + "?access_token=" + getAuthenticationToken(),)
      .then((response) => {
        if (response.status !== 200) {
          alert("Error en la peticion");
        } else {
          this.description = response.data.description;
          this.stock = response.data.stock;
          this.price = response.data.price;
          this.category = response.data.categoryId.name;
          this.product_name = response.data.product_name;
          this.image = response.data.image;
        }
      })
      .catch((response) => {
        console.log(response.status);
        alert("No es posible conectar con el backend en este momento");
      });
  },
  methods: {
    addCarrito(event) {
      const path = "/add-carrito";
      axios
        .post(this.$store.state.backURL + path, {
          productName: this.product_name,
          price: this.price,
          stock: this.stock,
        })
        .then((response) => {
          if (response.status !== 201) {
            alert("Error en el almacenamiento del producto");
          } else {
            alert("el producto se ha añadido correctamente");
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            alert(
              'Parece que ya existe un curso con el nombre "' + this.name + '"'
            );
          } else {
            console.log(error.message);
            alert("Error en la aplicación");
          }
        });
      event.preventDefault();
      return true;
    },
  },
  components: {
    Vendedor,
  },
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
