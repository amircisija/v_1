<template>
  <v-app class="grey lighten-4">
    <Navbar/>

    <v-content transition="slide-x-transition">
      <main class="pb-5">
        <v-container grid-list-md>
          <router-view></router-view>
        </v-container>
      </main>
    </v-content>
    <Footer/>
  </v-app>
</template>
<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default {
    name: 'App',
    components: { Navbar, Footer },
    data() {
        return {};
    }
};
</script>
<style lang="scss">
p {
    font-size: 16px;
}
body {
    font-family: 'Roboto', sans-serif;
}
</style>    