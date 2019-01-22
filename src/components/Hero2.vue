<template>
  <div>
    <section class="hero__section">
      <div class="overlay"></div>
      <div class="inner">
        <v-container bg fill-height grid-list-md text-xs-center>
          <v-layout row wrap align-center>
            <v-flex xs8 class="mx-auto">
              <h1>Result Page</h1>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </section>
  </div>
</template>
<script>
export default {
    name: 'Hero2'
};
</script>
<style lang="scss">
.hero__section {
    position: relative;
    background: url('http://www.star-drive.de/images/limousinen-vermietung.jpg')
        50% 50% no-repeat;
    background-size: cover;
    height: 30vh;
    .inner {
        position: absolute;
        z-index: 20;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
}
h1 {
    color: #fff;
    font-size: 2em;
}
.overlay {
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.8;
    top: 0;
    left: 0;
}
</style>