<template>
  <div>
    <div
      id="topMenu_div"
      class="position-sticky"
      style="position: relative; z-index: 1000"
    >
      <TopMenu />
    </div>
    <div class="container-fluid containerExterno">
      <div class="row"></div>
      <div class="container mt-5 containerInterno">
        <b-row class="mt-5">
          <b-col cols="5">
            <img
              class="fotoperfil col-xs-12 col-sm-12 col-md-10 col-lg-12"
              src="../assets/perfil.png"
              alt="Perfil"
            />
            <div
              class="text-center mr-5 col-xs-12 col-sm-12 col-md-10 col-lg-12"
              align-v="center"
            >
              <b-button class="mt-3" size="lg" pill variant="primary"
                >Cambiar imagen</b-button
              >
            </div>
          </b-col>

          <b-col>
            <h1 class="titulo mt-7 mb-3">Mis Datos</h1>
            <div class="info">
              <b-row class="mt-5">
                <b-col cols="6" md="auto">
                  <h4 class="text-center mb-4">Nombre:</h4>
                  <h4 class="text-center mb-4">Nickname:</h4>
                  <h4 class="text-center mb-4">Correo:</h4>
                  <h4 class="text-center mb-4">Dirección:</h4>
                </b-col>
                <b-col cols="6" md="auto">
                  <h4 class="text-center mb-4">{{ person.name }}</h4>
                  <h4 class="text-center mb-4">.</h4>
                  <h4 class="text-center mb-4">.</h4>
                  <h4 class="text-center mb-4">.</h4>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="5">
            <div>
              <b-button
                class="col-12 mt-2"
                size="lg"
                type="sumbit"
                href=""
                variant="primary"
                >Historial de Compras</b-button
              >
              <br />
              <br />
              <br />
              <b-button
                class="col-12"
                size="lg"
                type="sumbit"
                href=""
                variant="primary"
                >Historial de Ventas</b-button
              >
            </div>
          </b-col>

          <b-col>
            <b-button v-b-modal.modal-1 size="md" pill variant="primary"
              >Editar Información</b-button
            >

            <b-modal id="modal-1" title="Editar información">
              <form
                @submit="signUp"
                class="register border border-primary rounded-lg"
              >

                <div class="form-group col-12 mb-1">
                  <label class="custom-label" for="names"
                    >Nombre y Apellido</label
                  >
                  <input
                    id="names"
                    class="form-control col-12"
                    type="text"
                    placeholder="Ej: Pablo Neruda"
                    v-model="names"
                    required
                  />
                </div>

                <div class="form-group col-12 mb-1">
                  <label class="custom-label" for="username"
                    >Nombre de Usuario</label
                  >
                  <input
                    id="username"
                    class="form-control col-12"
                    type="text"
                    placeholder="Ingrese Nombre de Usuario"
                    v-model="username"
                    required
                  />
                </div>

                <div class="form-group col-12 mb-1">
                  <label class="custom-label" for="email">Email</label>
                  <input
                    id="email"
                    class="form-control col-12"
                    type="email"
                    placeholder="Ej: user@gmail.com"
                    v-model="email"
                    required
                  />
                </div>
                <div class="form-group col-12 mb-1">
                  <label class="custom-label" for="address">Dirección</label>
                  <input
                    id="address"
                    class="form-control col-12"
                    type="text"
                    placeholder="Ingrese su dirección"
                    v-model="address"
                    required
                  />
                </div>

                <div class="col-12">
                  <button class="btn btn-primary col-12 mb-2" type="submit">
                    Guardar cambios
                  </button>
                </div>
              </form>
            </b-modal>
          </b-col>
        </b-row>

        <b-row class="mt-5 mb-3">
          <b-col cols="12">
            <b-button
              class="col-12 mt-2"
              size="lg"
              type="sumbit"
              to="/"
              variant="primary"
              >Volver a la pagina principal</b-button
            >
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import TopMenu from "../components/TopMenu.vue";
import axios from "axios";

const path = "/api/people/";

export default {
  name: "Profile.vue",
  data() {
    return {
      image: null,
      name: "",
      username: "",
      email: "",
      location: "",
      paypal: "",
      person: null,
    };
  },

  beforeCreate() {
    const email = localStorage.getItem("email");
    const componente = this;

    axios
      .get(this.$store.state.backURL + path + email)
      .then((response) => {
        if (response.status !== 200) {
          alert("Error en la petición. Intente nuevamente");
        } else {
          componente.person = response.data;
          console.log(componente.person);
        }
      })
      .catch((response) => {
        alert("No es posible conectar con el backend en este moment");
        return response;
      });
  },

  components: {
    TopMenu,
  },
};
</script>

<style>
.containerExterno {
  background: #ffffff;
  min-height: 100vh;
}
.containerInterno {
  background: #ffffff;
}

.fotoperfil {
  height: auto;
  min-height: 80px;
  min-width: 80px;
  display: block;
}

.titulo {
  display: flex;
  justify-content: center;
  color: #0b99d6;
}

.info {
  display: flex;
  align-items: left;
  justify-content: left;
  color: #054c6b;
}
</style>
