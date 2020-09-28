<template>
  <div class="container-fluid">
    <b-img src="../assets/logo.png" alt="logo"></b-img>
    <div class="row">
      <div class="col-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2">
        <div id="signUp" class="mt-5">
          <form
            class="border border-primary rounded form-inline"
            @submit="signUp"
          >
            <h2 class="col-12 text-center text-primary mt-3 mb-5">Registro</h2>

            <div class="form-group col-12">
              <label class="custom-label col-md-3" for="names">Nombres</label>
              <input
                id="names"
                class="form-control col-12 col-sm-10 col-md-7 offset-sm-1"
                type="text"
                placeholder="Nombres"
                v-model="names"
                required
              />
            </div>

            <div class="form-group col-12">
              <label class="custom-label col-md-3 display" for="surnames"
                >Apellidos</label
              >
              <input
                id="surnames"
                class="form-control col-12 col-sm-10 col-md-7 offset-sm-1"
                type="text"
                placeholder="Apellidos"
                v-model="surnames"
                required
              />
            </div>

            <div class="form-group col-12">
              <label class="custom-label col-md-3" for="username"
                >Nombre de Usuario</label
              >
              <input
                id="username"
                class="form-control col-12 col-sm-10 col-md-7 offset-sm-1"
                type="text"
                placeholder="Nombre de Usuario"
                v-model="username"
                required
              />
            </div>

            <div class="form-group col-12">
              <label class="custom-label col-md-3 display" for="password"
                >Contrase&ntilde;a</label
              >
              <input
                id="password"
                class="form-control col-12 col-sm-10 col-md-7 offset-sm-1"
                type="password"
                placeholder="Contraseña"
                v-model="password"
                required
              />
            </div>

            <div class="form-group col-12">
              <label class="custom-label col-md-3 display" for="cPassword"
                >Confirmar Contrase&ntilde;a</label
              >
              <input
                id="cPassword"
                class="form-control col-12 col-sm-10 col-md-7 offset-sm-1"
                type="password"
                placeholder="Confirmar Contraseña"
                v-model="cPassword"
                required
                :class="{
                  'is-invalid': cPassword !== '' && cPassword !== password,
                  'is-valid': cPassword !== '' && cPassword === password,
                }"
              />
            </div>

            <div class="form-group col-12">
              <label class="custom-label col-md-3 display" for="rol"
                >Tipo de Usuario</label
              >
              <select
                id="rol"
                class="form-control col-12 col-sm-10 col-md-7 offset-sm-1"
                v-model="role"
                required
              >
                <option value="" disabled selected
                  >-- Seleccione un Rol --</option
                >
                <option v-for="role in roles" :key="role.id" :value="role.id">{{
                  role.roleName
                }}</option>
              </select>
            </div>

            <div class="col-12 col-sm-6 col-md-5 offset-md-2 text-center mb-3">
              <span class="text-primary">
                <small>
                  <router-link :to="{ name: 'login' }"
                    >&iquest;Ya tienes cuenta? Inicia Sesi&oacute;n</router-link
                  >
                </small>
              </span>
            </div>

            <div class="col-12 col-sm-5 col-md-4 mb-3">
              <button
                class="col-sm-10 col-md-10 offset-sm-1 offset-md-2 btn btn-primary"
                type="submit"
              >
                Registrar
              </button>
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

<style></style>
