<template>
  <div>
    <div class="mb-3" row wrap>
      <v-tooltip top>
        <v-btn small flat color="grey" @click="sortBy('name')" slot="activator">
          <v-icon left small>person</v-icon>
          <span class="caption text-lowercase">Sort by Client Name</span>
        </v-btn>
        <span>Sort Bookings by Client name</span>
      </v-tooltip>
      <v-tooltip top>
        <v-btn small flat color="grey" @click="sortBy('status')" slot="activator">
          <v-icon left small>person</v-icon>
          <span class="caption text-lowercase">Sort by Status</span>
        </v-btn>
        <span>Sort Bookings Booking Status</span>
      </v-tooltip>
    </div>
    <v-card
      :class="`pa-3 booking--row status--${booking.status}`"
      v-for="booking in bookings"
      :key="booking._id"
    >
      <v-layout row wrap>
        <v-flex xs12 md4>
          <div class="caption grey--text">Booking ID</div>
          <div>{{ booking._id }}</div>
        </v-flex>
        <v-flex xs12 sm4 md2>
          <div class="caption grey--text">Client</div>
          <div>{{ booking.name }}</div>
        </v-flex>
        <v-flex xs12 sm4 md2>
          <div class="caption grey--text">Client Phone</div>
          <div>{{ booking.phone }}</div>
        </v-flex>
        <v-flex xs12 sm2 md2>
          <div class="caption grey--text">Submited for</div>
          <div>{{ booking.dueDate }}</div>
        </v-flex>
        <v-flex xs12 sm2 md2>
          <div class="right">
            <v-chip
              small
              block
              :class="`caption my-2 chip--${booking.status}`"
              text-color="white"
            >{{ booking.status }}</v-chip>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>


<script>
import axios from "axios";
const URL = "http://www.json-generator.com/api/json/get/bVkwzEqlCG?indent=2";
export default {
  data() {
    return {
      bookings: []
    };
  },
  mounted() {
    axios
      .get(URL)
      .then(response => {
        // JSON responses are automatically parsed.
        this.bookings = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },

  methods: {
    sortBy(val) {
      this.bookings.sort((a, b) => (a[val] < b[val] ? -1 : 1));
    }
  }
};
</script>
<style lang="scss">
.status--new {
  border-left: 4px solid #90caf9 !important;
}
.status--accepted {
  border-left: 4px solid #00b0ff !important;
}
.status--finished {
  border-left: 4px solid #c0ca33 !important;
}
.status--rejected {
  border-left: 4px solid #e53935 !important;
}
.chip--new {
  background: #90caf9 !important;
}
.chip--accepted {
  background: #00b0ff !important;
}
.chip--finished {
  background: #c0ca33 !important;
}
.chip--rejected {
  background: #e53935 !important;
}
</style>
