<template>
  <div class="about">
    <v-layout row wrap class="mb-5">
      <v-flex xs12>
        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
          <span>Success</span>
          <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
        </v-snackbar>
        <h2>Limousinen dashboard</h2>
      </v-flex>
      <v-flex x12>
        <AddCar @carAdded="snackbar = true"/>
      </v-flex>
    </v-layout>
    <v-card
      :class="`pa-3 booking--row status--${car.id}`"
      v-for="car in cars"
      :key="car.id"
      transition="booking"
    >
      <v-layout row wrap>
        <v-flex xs12 md2>
          <div class="caption grey--text">Car</div>
          <div>{{ car.name }}</div>
        </v-flex>
        <v-flex xs12 md2>
          <div class="caption grey--text">Brand</div>
          <div>{{ car.brand }}</div>
        </v-flex>
        <v-flex xs12 sm4 md2>
          <div class="caption grey--text">Color</div>
          <div>{{ car.color }}</div>
        </v-flex>
        <v-flex xs12 sm4 md2>
          <div class="caption grey--text">Location</div>
          <div>{{ car.location }}</div>
        </v-flex>
        <v-flex xs12 sm4 md2>
          <div class="caption grey--text">Created</div>
          <div>{{ car.createdAt }}</div>
        </v-flex>
        <v-flex xs12 sm4 md2 class="text-xs-center">
          <div class="caption grey--text">Status</div>
          <div>
            <v-chip
              :class="[ car.isAvailable ? 'is--free' : 'is--not--free' ]"
              text-color="white"
            >{{ car.isAvailable ? 'Frei' : 'Nicht frei' }}</v-chip>
          </div>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs4>
          <v-switch
            v-model="ex11"
            label="success"
            color="success"
            value="success"
            hide-details
            @click="changeIsAvailable"
          ></v-switch>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import database from '@/firebase';

import AddCar from '@/components/cars/add';
export default {
    components: { AddCar },
    data() {
        return {
            cars: [],
            snackbar: false,
            ex11: 'success'
        };
    },
    methods: {
        sortBy(val) {
            this.cars.sort((a, b) => (a[val] < b[val] ? -1 : 1));
        }
    },
    created() {
        database.collection('cars').onSnapshot(res => {
            const changes = res.docChanges();

            changes.forEach(change => {
                if (change.type === 'added') {
                    this.cars.push({
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
.is--free {
    background: #c0ca33 !important;
}
.is--not--free {
    background: #e53935 !important;
}
</style>
