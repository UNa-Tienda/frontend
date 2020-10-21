<template>
  <div class="container-fluid containerExternoIS">
    <div class="row">
      <div class="col-12">
        <br />
        <router-link :to="{ name: 'home' }">
          <img class="logoregister" src="../assets/logo.png" alt="Logo" />
        </router-link>
        <div id="login" class="login">
          <b-form
            @submit="login"
            class="datosIS col-xs-12 col-sm-8 col-md-6 col-lg-4 border border-primary rounded-lg"
          >
            <h2 class="col-12 text-center text-primary mt-3 mb-3">Login</h2>
            <img class="IS" src="../assets/IS.png" alt="ISL" />

            <b-form-group
              class="form-group col-12 mb-4"
              id="input-group-1"
              label="Email"
            >
              <b-form-input
                id="input-1"
                v-model="email"
                type="email"
                required
                placeholder="usuario@email.com"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="form-group col-12 mb-4"
              id="input-group-2"
              label="Contraseña"
            >
              <b-form-input
                id="input-2"
                v-model="password"
                required
                placeholder="Ingrese su contraseña"
                type="password"
              ></b-form-input>
            </b-form-group>
            <div class="text-center" align-v="center">
              <b-button size="lg" type="sumbit" variant="primary"
                >Iniciar Sesión</b-button
              >
            </div>
            <br />
            <div class="text-center" align-v="center">
              <router-link :to="{ name: 'forgotPassword' }"
                >¿Olvidaste tu contraseña?</router-link
              >
            </div>
            <br />
            <div class="text-center" align-v="center">
              <b-button size="lg" to="register" variant="secondary"
                >Registrarse</b-button
              >
            </div>
            <br />
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

  const path = "/api/people/login";

    export default {
        name: "Iniciar_sesion.vue",
        components: {},
        data(){
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login( event ){
                axios
              .post( this.$store.state.backURL + path,
                {
        
                  
                  email: this.email.trim( ),
                  password: this.password.trim( ),
                  

                },  
                ).then( response => {
                    if( response.status !== 200 ){
                        alert( "Credenciales incorrectas" );
                    }else{
                        alert( "Bienvenido Usuario !" );
                        localStorage.setItem( 'email', this.email );
                    }
                } ).catch( error => {
                    if( error.response.status === 400 ){
                      alert( "Credenciales incorrectas" );
                    }else{
                      alert( "Credenciales incorrectas" );
                    }
                } );

                event.preventDefault();
            }
        }
    }
</script>

<style>
.containerExternoIS {
  background: #012433;
}
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 87.1vh;
}
.IS {
  display: block;
  height: 150px;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
}
.datosIS {
  background: white;
  color: #054c6b;
}
</style>
