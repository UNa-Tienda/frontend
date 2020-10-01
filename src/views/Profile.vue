<template>
    <div class="container-fluid container-register">
        <div class="row">
            <div class="col-12">
                <br />
                <img class="logoregister " src="../assets/logo.png" alt="Logo" />
            </div>
        </div>
        <div class="row mt-5 ">
            <div class="container container2 border border-primary rounded-lg">
                <div class="col-6">
                    <br />
                    <img class="fotoperfil mt-5 " src="../assets/perfil.png" alt="Perfil" />

                </div>
                <div class="col-6">
                    <br />
                    <div class="text-right"> 
                        <b-button size="lg" type="sumbit" variant="primary">Historial de Compras</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.container-register {
  background: #012433;
  min-height: 100vh;
  
}
.container2 {
  background: #bddbec;
  
}

.logoregister {
  height: 80px;
  margin-left: auto;
  margin-right: auto;
}

.fotoperfil {
 height: 160px;
 display: block;
 

}

</style>