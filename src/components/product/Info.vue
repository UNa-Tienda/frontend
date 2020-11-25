<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col class="col-xs-12 col-sm-6 col-md-6 col-lg-7 cuadro1 mt-3">
        <div>
          <img v-bind:src="product.image" alt="image" class="imageProduct" />
        </div>
      </b-col>
      <b-col class="col-xs-12 col-sm-6 col-md-6 col-lg-5 cuadro2 mt-3">
        <div>
          <div class="infogeneral text-left m-3">
            <h3 class="mt-2 mb-4">
              {{ product.title }}
            </h3>
            <h3 class="mt-2 mb-4">
              {{ product.productName }}
            </h3>
            <div>
              <Score :score="totalReview" />
            </div>
            <p class="description text-justify mb-3">
              {{ product.description }}
            </p>
            <h5 class="text-dark">Categoria: {{ product.category }}</h5>
            <br />

            <h2>Precio: ${{ product.price }}</h2>
            <br />
            <h5 class="text-primary">Stock disponibles: {{ product.stock }}</h5>

            <div v-if="!this.mine" class="cantidad mt-3 mb-2">
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
                      'is-invalid': cantidad !== '' && cantidad > product.stock,
                      'is-valid': cantidad !== '' && cantidad <= product.stock,
                    }"
                  ></b-form-spinbutton>
                  <div class="valid-feedback">
                    Llevas {{ cantidad }} Unidades
                  </div>
                  <div class="invalid-feedback">
                    No hay mas unidades disponibles, puedes llevar max
                    {{ product.stock }} productos
                  </div>
                </b-col>
              </b-row>
            </div>
            <h2 class="text-warning">Estado: {{ stateString }}</h2>
            <br />
            <br />
            <div v-if="!this.mine">
              <b-button block variant="danger" @click="addCarrito"
                >Añadir al Carrito</b-button
              >
            </div>
            <br />
            <div v-if="this.mine">
              <b-button block v-b-modal.modal-1 variant="danger"
                >Editar Post</b-button
              >
            </div>
            <br />

            <div v-if="this.mine">
              <b-button block variant="danger" @click="deletePost"
                >Eliminar Post</b-button
              >
            </div>
          </div>
          <div v-if="!this.mine"><Vendedor /></div>
        </div>
      </b-col>
    </b-row>
    <RecommendedItemList v-bind:product="product" />

    <b-modal id="modal-1" hide-footer title="Editar información">
      <form
        @submit="editPost"
        class="register border border-primary rounded-lg"
      >
        <div class="form-group col-12 mb-1">
          <label class="custom-label" for="name">Nombre del producto</label>
          <input
            id="name"
            class="form-control col-12"
            type="text"
            :value="product.productName"
          />
        </div>

        <div class="form-group col-12 mb-1">
          <label class="custom-label" for="title">Título</label>
          <input
            id="title"
            class="form-control col-12"
            type="text"
            :value="product.title"
          />
        </div>

        <div class="form-group col-12 mb-1">
          <label class="custom-label" for="description">Descripción</label>
          <input
            id="description"
            class="form-control col-12"
            type="text"
            :value="product.description"
          />
        </div>
        <div class="form-group col-12 mb-1">
          <label class="custom-label" for="price">Precio</label>
          <input
            id="price"
            class="form-control col-12"
            type="number"
            :value="product.price"
          />
        </div>

        <div class="form-group col-12 mb-1">
          <label class="custom-label" for="stock">Stock disponible</label>
          <input
            id="stock"
            class="form-control col-12"
            type="number"
            :value="product.stock"
          />
        </div>
        <br />
        <div class="col-12">
          <button
            class="btn btn-primary col-12 mb-2"
            @click="hideModal"
            type="submit"
          >
            Guardar cambios
          </button>
          <button
            class="btn btn-primary col-12 mb-2"
            @click="toggleModal"
            type="submit"
          >
            Cancelar
          </button>
        </div>
      </form>
    </b-modal>
  </b-container>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import Vendedor from "./Vendedor.vue";
import Score from "./Score.vue";
import { getAuthenticationToken } from "@/dataStorage";
import RecommendedItemList from "@/components/product/RecommendedItemList.vue";

export default {
  name: "Info",
  data() {
    return {
      totalReview: 1,
      cantidad: 1,
      state: true,
      stateString: "",
      mine: true,
      product: {
        description: "",
        stock: 0,
        price: 0,
        category: "",
        productName: "",
        image: "",
        title: "",
        id: 0
      }
    };
  },

  beforeCreate() {
    const postPath = "/api/post/";
    let productId = this.$route.params.id;

    axios
      .get(this.$store.state.backURL + postPath + productId)
      .then((response) => {
        if (response.status !== 200) {
          alert("Error en la peticion");
        } else {
          this.$set(this.product, "description", response.data.description);
          this.$set(this.product, "id", response.data.id);
          this.$set(this.product, "stock", response.data.stock);
          this.$set(this.product, "price", response.data.price);
          this.$set(this.product, "category", response.data.categoryId.name);
          this.$set(this.product, "category_id", response.data.categoryId.id);
          this.$set(this.product, "productName", response.data.productName);
          this.$set(this.product, "image", response.data.image);
          this.$set(this.product, "title", response.data.title);
          this.totalReview = response.data.totalReview;
          this.state = response.data.state;
          if (this.state) {
            this.stateString = "Activo";
          } else {
            this.stateString = "Inactivo";
          }
          this.mine = false;
        }
      })
      .catch((response) => {
        console.log(response.status);
        alert("No es posible conectar con el backend en este momento");
      });
  },
  beforeUpdate() {
    if (this.logged) {
      const minePath = "/api/post/mine/";
      axios
        .get(
          this.$store.state.backURL +
            minePath +
            this.$route.params.id +
            "?access_token=" +
            getAuthenticationToken()
        )
        .then((response) => {
          if (response.status === 202) {
            this.mine = true;
          }
        });
    }
  },

  methods: {
    showModal() {
      this.$refs["modal-1"].show();
    },
    hideModal() {
      this.$refs["modal-1"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["modal-1"].toggle("#editar");
    },
    addCarrito(event) {
      const path = "/api/shopping-cart/add";
      axios
        .post(this.$store.state.backURL + path + "?access_token=" + getAuthenticationToken() + "&postId=" + this.product.id + "&quantity=" + this.cantidad,)
        .then((response) => {
          if (response.status !== 201) {
            alert("Error en el almacenamiento del producto");
          } else {
            alert("el producto se ha añadido correctamente");
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            alert("Parece que hubo un error");
          } else {
            console.log(error.message);
            alert("Error en la aplicación");
          }
        });
      event.preventDefault();
      return true;
    },
    deletePost(event) {
      const deletePath = "/api/post/delete/";

      if (this.state === false) {
        alert("Este producto ya esta deshabilitado !");
      } else {
        axios
          .delete(
            this.$store.state.backURL +
              deletePath +
              this.$route.params.id +
              "?access_token=" +
              getAuthenticationToken()
          )
          .then((response) => {
            if (response.status === 200) {
              alert("Post eliminado correctamente");
              this.$router.push({ name: "home" });
            } else if (response.status === 202) {
              alert("Post deshabilitado correctamente");
              this.$router.push({ name: "home" });
            } else {
              alert("Parece que hubo un error");
            }
          });
        event.preventDefault();
        return true;
      }
    },
    editPost(event) {
      const componente = this;
      const path = "/post/update";

      componente.$set(
        componente.product,
        "productName",
        document.getElementById("name").value
      );
      componente.$set(componente.product, "title", document.getElementById("title").value);
      componente.$set(
        componente.product,
        "description",
        document.getElementById("description").value
      );
      componente.$set(componente.product, "price", document.getElementById("price").value);
      componente.$set(componente.product, "stock", document.getElementById("stock").value);

      
      axios
        .post(this.$store.state.backURL + path, {
          productName: componente.product.productName,
          title: componente.product.title,
          description: componente.product.description,
          price: componente.product.price,
          stock: componente.product.stock,
        })
        .then((response) => {
          if (response.status !== 201) {
            alert("Error en la actualizacion del producto");
          } else {
            alert("el producto se ha actualizado correctamente");
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            alert("Parece que hubo un error");
          } else {
            console.log(error.message);
            alert("Error en la aplicación");
          }
        });
      event.preventDefault();
      return true;
    },
  },
  computed: {
    ...mapState(["logged"]),
  },
  components: {
    Vendedor,
    Score,
    RecommendedItemList,
  },
};
</script>

<style scoped>
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
.cuadro1 {
  background: white;
  min-width: 200px;
}
.cuadro2 {
  background: white;
}
</style>
