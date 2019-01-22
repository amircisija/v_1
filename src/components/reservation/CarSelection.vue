<template>
  <div id="cars__selection">
    <h4>Test</h4>
    <ul>
      <li v-for="car in cars" :key="car.name">{{ car.name }} - {{ car.price }}</li>
    </ul>
  </div>
</template>
<script>
export default {
    name: 'carselection',
    data() {
        return {};
    },
    computed: {
        cars() {
            return this.$store.state.cars;
        }
    }
};
</script>