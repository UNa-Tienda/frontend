<template>

  <div>
    <div v-for="item in items" v-bind:key="item">
      <SCitem style="margin-bottom: 10px" v-bind:item="item"/>
    </div>

  </div>

</template>

<script>
import SCitem from "@/components/SCitem";

export default {
  name: "SC_ItemList",
  components: {
    SCitem
  },
  props: ["items"]
}
</script>

