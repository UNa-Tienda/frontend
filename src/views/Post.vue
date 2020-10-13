<template>
    <div>
        <div
                id="topMenu_div"
                class="position-sticky"
                style="position: relative; z-index: 1000"
                >
                <TopMenu />
        </div>
        <div class="container-fluid containerExternoPost">
          <div class="infoPost">
            <b-form
            @submit="onSubmit"
            class="datosPost col-xs-12 col-sm-11 col-md-11 col-lg-11"
            >
                <b-row >
                  <h1 class="col-12 text-center text-primary mt-5 mb-5">Publicar Producto</h1>
                </b-row>
                <b-row class="mt-5">
                  <b-col cols="6" >
                    <div class="imgButton">
                      <b-form-file v-model="imgPost" class="mt-3" plain></b-form-file>
                    </div>
                  </b-col>
                  <b-col cols="6" >
                    <b-form-group
                      class="form-group col-12 mb-4"
                      id="input-group-1"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.text"
                        type="text"
                        required
                        placeholder="Producto"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      class="form-group col-12 mb-4"
                      id="input-group-1"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.text"
                        type="text"
                        required
                        placeholder="Descripciòn"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      class="form-group col-12 mb-4"
                      id="input-group-1"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.text"
                        type="text"
                        required
                        placeholder="Marca"
                      ></b-form-input>
                    </b-form-group>
                    <b-row>
                      Disponibles :  
                      <b-form-spinbutton  class="col-3" id="demo-sb" v-model="value" min="1" max="100"></b-form-spinbutton>
                    </b-row>
                    <br />
                    <b-form-group
                      class="form-group col-12 mb-4"
                      id="input-group-1"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.text"
                        type="text"
                        required
                        placeholder="Precio"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-select v-model="selected" :options="options"></b-form-select>
                  </b-col>
                </b-row>
            </b-form>
          </div>
        </div>

    </div>
</template>


<script>
import TopMenu from "../components/TopMenu.vue";

export default {
  data() {
      return {
        form: {
        email: "",
        contraseña: "",
      },
        imgPost: null
      }
    },
  components: {
    TopMenu
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style>
.containerExternoPost {
  background: rgb(255, 255, 255);
}
.infoPost {
  display: flex;
  justify-content: center;
  min-height: 87.1vh;
}
.datosPost {
  background: white;
  color: #054c6b;
}
</style>