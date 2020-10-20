<template>
  <div id="app">
    <h1>{{category}}</h1>
    <div class="container">
      <ul>
        <li v-for="post in posts" :key="post.id">
          {{post.category_id.name}}
        </li>
      </ul>
      <div class="row cardRow">
        <div class="col">
          <div class="card border-primary" style="width: 16rem">
            <img src="../assets/radio1.png" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and makeup
                the buil of the cards's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-primary" style="width: 16rem">
            <img src="../assets/radio1.png" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and makeup
                the buil of the cards's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-primary" style="width: 16rem">
            <img src="../assets/radio1.png" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and makeup
                the buil of the cards's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-primary" style="width: 16rem">
            <img src="../assets/radio1.png" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and makeup
                the buil of the cards's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>

      <div class="row cardRow">
        <div class="col">
          <div class="card border-primary" style="width: 16rem">
            <img src="../assets/radio1.png" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and makeup
                the buil of the cards's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-primary" style="width: 16rem">
            <img src="../assets/radio1.png" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and makeup
                the buil of the cards's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-primary" style="width: 16rem">
            <img src="../assets/radio1.png" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and makeup
                the buil of the cards's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-primary" style="width: 16rem">
            <img src="../assets/radio1.png" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and makeup
                the buil of the cards's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "CategorySearch",
  data(){
    return{
      posts: []
    }
  },
  props: [
    "category",
    "category_id"
  ],
  beforeCreate(){
    const postPath = '/posts';

    axios.get(this.$store.state.backURL + postPath).then(response =>{
      if(response.status !== 200){
        alert( "Error en la petición. Intente nuevamente" )
      }else{
        this.posts = response.data;
      }
    }).catch(response =>{
      console.log(response.status);
      alert( "No es posible conectar con el backend en este momento" );
    })

  }
};
</script>

<style>
.cardRow{
  margin-bottom: 1rem;
}

.card{
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
