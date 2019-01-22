<template>
  <v-app>
    <v-content>
      <Nav/>
      <Hero/>
    </v-content>
  </v-app>
</template>
<script>
import Nav from '@/components/Nav.vue';
import Hero from '@/components/Hero.vue';
export default {
    name: 'home',
    components: { Nav, Hero }
};
</script>
<style lang="scss">
</style>