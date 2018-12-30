<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div class="home">
        <h1>Dashboard Page</h1>
        <div class="hidden-lg-and-down">
          <v-btn class="indigo accent-3 white--text">Click me</v-btn>
          <v-btn depressed color="indigo">Click me again</v-btn>
          <v-btn flat color="orange">Click me</v-btn>

          <v-btn depressed class="pink white--text hidden-lg-and-down">
            <v-icon left small>build</v-icon>
            <span>email me</span>
          </v-btn>

          <v-btn depressed fab small class="pink white--text">
            <v-icon left small>email</v-icon>
            <span>email me</span>
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>


<script>
export default {};
</script>
