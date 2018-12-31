<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <h3>Anbieter und Autos</h3>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="item in items" :key="item._id">
        <v-card>
          <v-img :src="anbieter.picture" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="mb-2">{{ item.name }}</h3>
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
import axios from "axios";
const URL = "http://www.json-generator.com/api/json/get/cfUnXzSklK?indent=2";
const URL2 = "http://www.json-generator.com/api/json/get/bVkwzEqlCG?indent=2";
export default {
  data() {
    return {
      items: []
    };
  },
  mounted() {
    function getUserAccount() {
      return axios.get(URL);
    }

    function getUserPermissions() {
      return axios.get(URL2);
    }

    axios
      .all([getUserAccount(), getUserPermissions()])
      .then(axios.spread(function(acct, perms) {}));
  }
};
</script>