<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
          <span>Success</span>
          <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
        </v-snackbar>
        <h3>Dashboard</h3>
      </v-flex>
      <v-flex x12>
        <Popup @bookingAdded="snackbar = true"/>
      </v-flex>
    </v-layout>
    <v-layout class="mb-3" row wrap>
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
    </v-layout>
    <v-card
      :class="`pa-3 booking--row status--${booking.status}`"
      v-for="booking in bookings"
      :key="booking._id"
      transition="booking"
    >
      <v-layout row wrap>
        <v-flex xs12 md4>
          <div class="caption grey--text">Booking ID</div>
          <div>{{ booking.bookingNumber }}</div>
        </v-flex>
        <v-flex xs12 sm4 md2>
          <div class="caption grey--text">Client</div>
          <div>{{ booking.clientName }}</div>
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
import database from '@/firebase';

import Popup from '@/components/Popup';
export default {
    components: { Popup },
    data() {
        return {
            bookings: [],
            snackbar: false
        };
    },
    methods: {
        sortBy(val) {
            this.bookings.sort((a, b) => (a[val] < b[val] ? -1 : 1));
        }
    },
    created() {
        database.collection('anbieter').onSnapshot(res => {
            const changes = res.docChanges();

            changes.forEach(change => {
                if (change.type === 'added') {
                    this.bookings.push({
                        ...change.doc.data(),
                        id: change.doc.id
                    });
                }
            });
        });
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
