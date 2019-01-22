<template>
  <v-app transition="slide-x-transition">
    <v-content>
      <Nav/>
      <Hero2/>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <Stepper/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import Nav from '@/components/Nav.vue';
import Hero2 from '@/components/Hero2.vue';
import Stepper from '@/components/reservation/Stepper.vue';

export default {
    name: 'results',
    components: { Nav, Hero2, Stepper }
};
</script>
<style lang="scss">
</style>