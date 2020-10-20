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
            <div class="row">
            </div>
            <div class="container mt-5 containerInterno">
                <b-row class="mt-5 ">
                    <b-col cols="5">
                        <img class="fotoperfil  col-xs-12 col-sm-12 col-md-10 col-lg-12 " src="../assets/perfil.png" alt="Perfil" />
                        <div class="text-center mr-5 col-xs-12 col-sm-12 col-md-10 col-lg-12" align-v="center" > 
                            <b-button  class="mt-3" size="lg" pill variant="primary">Cambiar imagen</b-button>
                        </div>
                    </b-col>
                    <b-col cols="7">
                        <div> 
                            <b-button class ="col-12 mt-2" size="lg" type="sumbit" href="" variant="primary">Historial de Compras</b-button>
                            <br />
                            <br />
                            <br />
                            <b-button class ="col-12" size="lg" type="sumbit" href="" variant="primary">Historial de Ventas</b-button>
                        </div>
                    </b-col>
                </b-row>
                <h1 class="titulo mt-5 mb-3">Mis Datos</h1>
                <div class="info">
                    <b-row class="mt-5">
                        <b-col cols="4" md="auto">
                            <h4 class="text-center mb-4">Nombre:</h4>
                            <h4 class="text-center mb-4">Nickname:</h4>
                            <h4 class="text-center mb-4">Correo:</h4>
                            <h4 class="text-center mb-4">Dirección:</h4>
                            <h4 class="text-center mb-4">Telefono:</h4>
                        </b-col>
                        <b-col cols="4" md="auto">
                            <h4 class="text-center mb-4">.</h4>
                            <h4 class="text-center mb-4">.</h4>
                            <h4 class="text-center mb-4">.</h4>
                            <h4 class="text-center mb-4">.</h4>
                            <h4 class="text-center mb-4">.</h4>
                        </b-col>
                        <b-col cols="4" md="auto">
                            <br />
                            <br />
                            <br />
                            <br />
                            <b-button  size="md" pill variant="primary">Editar Información</b-button>
                        </b-col>
                    </b-row>
                </div>
                <b-row class="mt-5 mb-3">
                    <b-col cols="12">
                            <b-button class ="col-12 mt-2" size="lg" type="sumbit" to="/" variant="primary">Volver a la pagina principal</b-button>
                    </b-col>
                </b-row>


            </div>
        </div>
    </div>
</template>


<script>
import TopMenu from "../components/TopMenu.vue";

export default {
  components: {
    TopMenu
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

.titulo{
 display: flex;
 justify-content: center;
 color:#0b99d6;
}

.info {
 display: flex;
 align-items: left;
 justify-content: left;
 color:#054c6b;
 


}



</style>