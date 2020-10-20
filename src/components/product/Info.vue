<template>
  <div>
    <div class="infogeneral text-left m-3">
      <h3>Golty Balón Futbol Dualtech Profesional - T659637 N° 5</h3>
      <p class="description text-justify mb-2">
        Balón Golty elaborado en poliuretano, superficie de juego Grama
        Artificial, Grama Natural, Tierra, arenilla. Diseño moderno, estampado
        que contrasta y detalles alusivos a la marca. Construcción laminado y
        cámara de butilo para mayor retención de aire y proporcionando un gran
        rebote. El balón se envía inflado con la calibración recomendada de
        fábrica,
      </p>
      <h2>$94.900</h2>

      <div class="cantidad mb-2">
        <p>Cantidad:</p>
        <b-form-input
          v-model="text"
          type="number"
          min="1"
          max="10"
          placeholder=""
        ></b-form-input>
        <div class="mt-5">has elegido: {{ text }} productos</div>
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
      text: "",
    };
  },
};
</script>

<style></style>
