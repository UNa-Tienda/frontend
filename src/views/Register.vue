<template>
  <div class="container">
    <div class="row">
      <div class="register col-12">
        <br />
        <img src="../assets/logo.png" alt="Logo" />
        <div
          id="signUp"
          class="signUp col-xs-12 col-sm-10 col-md-8 col-lg-6 mt-0"
        >
          <form @submit="signUp" class="col-12 border border-success rounded">
            <h2 class="col-12 text-center text-success mt-3 mb-3">Registro</h2>

            <div class="form-group col-12">
              <label class="custom-label" for="names">Nombre y Apellido</label>
              <input
                id="names"
                class="form-control-sm border-success col-12"
                type="text"
                placeholder="Ingrese Nombre y Apellido"
                v-model="names"
                required
              />
            </div>

            <div class="form-group col-12">
              <label class="custom-label" for="username"
                >Nombre de Usuario</label
              >
              <input
                id="username"
                class="form-control-sm border-success col-12"
                type="text"
                placeholder="Ingrese su Nombre de Usuario"
                v-model="username"
                required
              />
            </div>

            <div class="form-group col-12">
              <label class="custom-label" for="email">Email</label>
              <input
                id="email"
                class="form-control-sm border-success col-12"
                type="email"
                placeholder="Ingrese su Email"
                v-model="email"
                required
              />
            </div>
            <div class="form-group col-12">
              <label class="custom-label" for="address">Dirección</label>
              <input
                id="address"
                class="form-control-sm border-success col-12"
                type="text"
                placeholder="Ingrese su dirección"
                v-model="address"
                required
              />
            </div>

            <div class="form-group col-12">
              <label class="custom-label" for="password"
                >Contrase&ntilde;a</label
              >
              <input
                id="password"
                class="form-control-sm border-success col-12"
                type="password"
                placeholder="Ingrese su Contraseña"
                v-model="password"
                required
              />
            </div>

            <div class="form-group col-12">
              <label class="custom-label" for="password2"
                >Confirmar Contrase&ntilde;a</label
              >
              <input
                id="password2"
                class="form-control-sm border-success col-12"
                type="password"
                placeholder="Confirmar Contraseña"
                v-model="password2"
                required
              />
            </div>

            <div class="col-12">
              <button class="btn btn-success col-12" type="submit">
                Registrarse
              </button>
            </div>
            <div class="col-12">
              <span class="text-primary">
                <small>
                  <router-link :to="{ name: 'login' }"
                    >&iquest;Ya tienes cuenta? Inicia Sesi&oacute;n</router-link
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
.register {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
img {
  height: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
