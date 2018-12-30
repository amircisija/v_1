<template>
  <v-app class="grey lighten-4">
    <Navbar/>
    <v-content>
      <v-container grid-list-md fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Navbar, Footer },
  data() {
    return {
      //
    };
  }
};
</script>
<style lang="scss">
p {
  font-size: 16px;
}
</style>
