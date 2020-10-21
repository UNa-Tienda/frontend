<template>
  <div>
    <div class="infogeneral text-left m-3">
      <h3 class="mt-2 mb-4">
        Golty Balón Futbol Dualtech Profesional - T659637 N° 5
      </h3>
      <p class="description text-justify mb-3">
        Balón Golty elaborado en poliuretano, superficie de juego Grama
        Artificial, Grama Natural, Tierra, arenilla. Diseño moderno, estampado
        que contrasta y detalles alusivos a la marca. Construcción laminado y
        cámara de butilo para mayor retención de aire y proporcionando un gran
        rebote. El balón se envía inflado con la calibración recomendada de
        fábrica,
      </p>

      <h2>$94.900</h2>
      <br />
      <h4 class="text-primary">Stock disponibles: 7 unidades</h4>

      <div class="cantidad mt-3 mb-2">
        <b-row>
          <b-col cols="xs-12 sm-12 auto" md="6">
            <h4>Cantidad :</h4>
          </b-col>
          <b-col cols="xs-12 sm-12 auto" md="6">
            <b-form-spinbutton
              class="col-12"
              id="stock"
              v-model="cantidad"
              min="1"
              max="100"
            ></b-form-spinbutton>
          </b-col>
        </b-row>
        <div class="mt-5 mb-4 text-success">Llevas {{ cantidad }} Unidades</div>
      </div>
      <div>
        <b-button block variant="danger">Añadir al Carrito</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cantidad: "",
    };
  },
};
</script>

<style>
.cantidad {
  align-content: center;
}
</style>
