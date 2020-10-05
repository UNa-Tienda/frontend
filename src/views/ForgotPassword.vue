<template>
  <div class="container-fluid container-forgotPassword">
    <div class="row">
      <div class="col-12">
        <br />
        <div>
          <router-link :to="{ name: 'home' }">
            <img class="logoregister" src="../assets/logo.png" alt="Logo" />
          </router-link>
        </div>
        <div class="forgot-password">
          <form
            @submit="submit"
            class="forgotpass col-xs-12 col-sm-8 col-md-6 col-lg-4 border border-primary rounded-lg"
          >
            <h2 class="title col-12 text-center text-primary mt-5 mb-5">
              ¿Olvido su contraseña?
            </h2>
            <div>
              <p class="small-text col-12 mb-3">
                Le enviaremos a su correo electrónico el enlace de recuperación.
              </p>
            </div>

            <div class="form-group col-12 mb-5">
              <label class="custom-label" for="email">Correo Electrónico</label>
              <input
                id="email"
                class="form-control col-12"
                type="email"
                placeholder="Ingrese su correo electrónico"
                v-model="email"
                required
              />
            </div>

            <div class="col-12 mb-3">
              <button class="btn btn-primary col-12 mb-2" type="submit">
                Recuperar Contraseña
              </button>
            </div>
            <div class="col-12 mb-3 text-center">
              <span class="linklogin">
                <small>
                  <router-link :to="{ name: 'iniciar_sesion' }"
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
.logoforgot {
  margin-top: 40px;
  height: 80px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.forgot-password {
  margin-top: 20px;
  margin-bottom: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-forgotPassword {
  background: #012433;
}
.forgotpass {
  background: white;
  color: #054c6b;
}
</style>
