<template>

  <div class="w3-main w3-content w3-padding" style="max-width:1200px;margin-top:50px">

    <div>
      <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
      >

        <b-carousel-slide
            caption="Primer Slide"
            text="Carrusel primera imagen">
          <template v-slot:img>
            <img
                class="d-block img-fluid w-100"
                width="1024"
                src="../assets/food.jpg"
                alt="image slot"
                style="height: 30vw; max-height: 480px"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide
            caption="Segundo Slide"
            text="Carrusel segunda imagen">
          <template v-slot:img>
            <img
                class="d-block img-fluid w-100"
                width="1024"
                src="../assets/coffee.jpg"
                alt="image slot"
                style="height: 30vw; max-height: 480px"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide
            caption="Tercer Slide"
            text="Carrusel tercera imagen">
          <template v-slot:img>
            <img
                class="d-block img-fluid w-100"
                width="1024"
                src="../assets/notes.jpg"
                alt="image slot"
                style="height: 30vw; max-height: 480px"
            >
          </template>
        </b-carousel-slide>

      </b-carousel>

    </div>

        <div id="app">
          <h1 style="color:DodgerBlue">Categorias</h1>
            <div class="w3-row-padding w3-padding-16 w3-center" >
                <div class="w3-quarter" id="prueba">
                  <img class="zoom" src="../assets/bike.png" style="cursor:pointer" onclick="document.location='http://localhost:8080/#'"   width="200" height="200" id="category1">
                  <h3>Deportes</h3>
                  <p>No puedes poner un límite a nada</p>
                </div>
                <div class="w3-quarter">
                  <img class="zoom" src="../assets/nail.png" style="cursor:pointer" onclick="document.location='http://localhost:8080/#'"  width="200" height="200"  id="category2">
                  <h3>Belleza</h3>
                  <p>Deja que la belleza de lo que amas se convierta en lo que hagas</p>
                </div>
                <div class="w3-quarter">
                  <img class="zoom" src="../assets/radio1.png" style="cursor:pointer" onclick="document.location='http://localhost:8080/#'" width="200" height="200" id="category3">
                  <h3>Electrodomesticos</h3>
                  <p>Lo que siempre has querido, al alcance de tu mano</p>
                </div>
                <div class="w3-quarter">
                  <img class="zoom" src="../assets/auri.png" style="cursor:pointer" onclick="document.location='http://localhost:8080/#'"  width="200" height="200" id="category4">
                  <h3>Accesorios</h3>
                  <p>Si no esta aqui lo que buscas es porque no existe</p>
                </div>
              </div>
            </div>  
              <footer class="w3-row-padding w3-padding-32">
    <div class="w3-third">
      <h3>Contactanos</h3>
      <div><a href="/about/about_team.htm">Acerca de nosotros</a>
      </div>
      <div><a href="/about/about_team.htm">Ubicacion</a>
      </div>
      <div><a href="/about/about_team.htm">Redes sociales</a>
      </div>
    </div>
  
    <div class="w3-third">
      <h3>Seguridad</h3>
          <img src="../assets/escudo1.png" class="w3-left w3-margin-center" style="width:100px">
          <h2>Haga de tu misión, que la seguridad sea una condición</h2>
          
    </div>

    <div class="w3-third w3-serif">
      <h3>Confianza</h3>
          <img src="../assets/love.png" class="w3-left w3-margin-center" style="width:100px">
          <h2>Estamos para ti en todo momento</h2>
          
    </div>
  </footer>       
</div>         
</template>

<script>
  
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js')
      document.head.appendChild(recaptchaScript)
    },
    methods: {
    Zooming: function () {
    
    }
  }
  }
</script>>

<style>
.zoom{
  width: 200,height=200
}
.zoom:hover {
  transform: scale(1.5); 
}
@import url(https://www.w3schools.com/w3css/4/w3.css);
h1 {
  text-align: center;
}

</style>
