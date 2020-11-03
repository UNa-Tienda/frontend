<template>

  <div class="border rounded-lg">
    <div class="row">
      <div class="col-3" style="align-self: center">
        <router-link :to="{ name: 'home' }"><img v-bind:src="item.cartshop_item_post_id.image" style="width: 100%; max-width: 150px"></router-link>
      </div>

      <div class="col-6" style="align-self: center">
        <router-link :to="{ name: 'home' }" style="text-decoration: none!important;"><h3 style="color: white!important;">{{item.cartshop_item_post_id.title}}</h3></router-link>
        <h4>precio: ${{item.cartshop_item_post_id.price}}</h4>

        <b-button-group style="align-items: center">
          <b-button class="btn btn-danger" v-on:click="subtract"><h4 style="color: azure">-</h4></b-button>
          <h4 class="middle" id="quantity">{{item.quantity}}</h4>
          <b-button class="btn btn-info"  v-on:click="add"><h4 style="color: azure">+</h4></b-button>
        </b-button-group>
      </div>

      <div class="col-3" style="align-self: center">
        <b-button variant="danger" @click="$emit('del-item',item.id)">Quitar</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SCitem",
  props: ["item"],
  methods: {
    subtract() {
      if (this.item.quantity > 1) {
        this.item.quantity--;
      }
    },
    add() {
      if (this.item.quantity < this.item.cartshop_item_post_id.stock) {
        this.item.quantity++;
      }
    }
  }
}
</script>

<style scoped>
.border{
  border: 1px solid lightskyblue!important;
  padding: 15px;
  background-color: lightskyblue;
}
h4{
  color: #012433;
}
.middle{
  background-color: #d1dadd;
  margin: 0px;
  padding: 10px 30px;
}
</style>