<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <h3>Anbieter</h3>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="anbieter in anbieters" :key="anbieter._id">
        <v-card>
          <v-img :src="anbieter.picture" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="mb-2">{{ anbieter.firstName }} {{ anbieter.lastName }}</h3>
              <div>Located two hours south of Sydney in the
                <br>Southern Highlands of New South Wales, ...
              </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios';
const URL = 'http://www.json-generator.com/api/json/get/bVRGHHMYqG?indent=2';
export default {
    data() {
        return {
            anbieters: []
        };
    },
    mounted() {
        axios
            .get(URL)
            .then(response => {
                this.anbieters = response.data;
            })
            .catch(e => {
                this.errors.push(e);
            });
    }
};
</script>
