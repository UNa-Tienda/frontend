<template>
    <div>
        <b-jumbotron text-variant="dark" border-variant="dark" header-level="5">
            <template v-slot:header>
                Login
                <br><br>
                <img alt="IS" src="../assets/IS.png"
                contain    
                height="150px"
                width="150px"
                > 
                <br><br>

            </template>

            <template v-slot:lead>
                <p style="text-align: left">Email</p>
                <div>
                    <b-form-input v-model="Email" placeholder="Ingrese su email"></b-form-input>
                </div>
                <br><br>
                <p style="text-align: left">Constraseña</p>
                <div>
                    <b-form-input v-model="Contraseña" placeholder="Ingrese su contraseña"></b-form-input>
                </div>
                <br><br>
            </template>

            <div> 
                <b-button size="lg" type="sumbit" variant="primary">Iniciar Sesión</b-button>
            </div>
            
            <br><br>
            
            <div>
                <b-link to="about">¿Olvidaste tu contraseña?</b-link>  <!--to te lleva a esa referencia sin recargar la pagina, href la recarga-->
            </div>

            <br><br>

            <div>
                <b-button size="lg" to="registrarse" variant="secondary">Registrarse</b-button>
            </div>


        </b-jumbotron>
    </div>
</template>


<script>
  export default {
    data() {
      return {
        Email: '',
        Constraseña: ''
      }
    }
  }
</script>


<style>
        .jumbotron {
            background-color: rgb(255, 255, 255)!important;
            border-width: 3px!important;
            margin-left: 250px;
            margin-right: 250px;
            
            
            
            
            
        }
        
        
</style>