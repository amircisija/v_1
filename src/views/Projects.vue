<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <h3>Projects</h3>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-expansion-panel v-for="car in cars" :key="car.name">
          <v-expansion-panel-content>
            <div slot="header" class="text-capitalize">{{ car.name }}</div>
            <v-card>
              <v-card-text class="px-4 grey--text">{{ car.owner }}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios';
const URL = 'http://www.json-generator.com/api/json/get/cfUnXzSklK?indent=2';
export default {
    data() {
        return {
            cars: []
        };
    },
    mounted() {
        axios
            .get(URL)
            .then(response => {
                this.cars = response.data;
            })
            .catch(e => {
                this.errors.push(e);
            });
    }
};
</script>
