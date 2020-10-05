<template>
  <div class="container-fluid container-register">
    <div class="row">
      <div class="col-12">
        <br />
        <div>
          <router-link :to="{ name: 'home' }">
            <img class="logoregister" src="../assets/logo.png" alt="Logo" />
          </router-link>
        </div>

        <div class="signUp">
          <form
            @submit="signUp"
            class="register col-xs-12 col-sm-8 col-md-6 col-lg-4 border border-primary rounded-lg"
          >
            <h3 class="col-12 text-center text-primary mt-3 mb-3">Registro</h3>

            <div class="form-group col-12 mb-1">
              <label class="custom-label" for="names">Nombre y Apellido</label>
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

            <div class="form-group col-12 mb-1">
              <label class="custom-label" for="password"
                >Contrase&ntilde;a</label
              >
              <input
                id="password"
                class="form-control col-12"
                type="password"
                placeholder="Ingrese su Contraseña"
                v-model="password"
                required
              />
            </div>

            <div class="form-group col-12 mb-3">
              <label class="custom-label" for="password2"
                >Confirmar Contrase&ntilde;a</label
              >
              <input
                id="password2"
                class="form-control col-12"
                type="password"
                placeholder="Confirmar Contraseña"
                v-model="password2"
                required
              />
            </div>

            <div class="col-12">
              <button class="btn btn-primary col-12 mb-2" type="submit">
                Registrarse
              </button>
            </div>
            <div class="col-12 mb-2 text-center">
              <span class="linklogin">
                <small>
                  <router-link :to="{ name: 'iniciar_sesion' }"
                    >Ya tienes cuenta? Inicia Sesión</router-link
                  >
                </small>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container-register {
  background: #012433;
}
.signUp {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.register {
  background: white;
  color: #054c6b;
}
.logoregister {
  height: 80px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
