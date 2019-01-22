<template>
  <v-card class="mb-5">
    <v-form v-model="valid">
      <v-container>
        <v-layout row>
          <v-flex xs6>
            <v-menu
              ref="menu1"
              :close-on-content-click="false"
              v-model="menu1"
              :nudge-right="40"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="dateFormatted"
                label="Date"
                persistent-hint
                @blur="date = parseDate(dateFormatted)"
              ></v-text-field>
              <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>
          </v-flex>
          <v-flex xs6>
            <v-menu
              ref="menu"
              :close-on-content-click="false"
              v-model="menu2"
              :nudge-right="40"
              :return-value.sync="time"
              lazy
              transition="scale-transition"
              offset-y
              full-width
            >
              <v-text-field slot="activator" v-model="time" label="Uhrzeit" readonly></v-text-field>
              <v-time-picker
                v-if="menu2"
                v-model="time"
                format="24hr"
                full-width
                @change="$refs.menu.save(time)"
              ></v-time-picker>
            </v-menu>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 md12>
            <v-text-field
              v-model="pickupLocation"
              :rules="nameRules"
              :counter="40"
              label="Abholort"
              required
              @change="submit"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 md12>
            <v-text-field
              v-model="dropoffLocation"
              :rules="nameRules"
              :counter="40"
              label="Zielort"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm6 d-flex>
            <v-select :items="hours" label="Dauer in Stunden"></v-select>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click.native="stepper = 2">Continue</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
    name: 'stepper-first',
    data: vm => ({
        hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        time: null,
        menu2: false,
        date: new Date().toISOString().substr(0, 10),
        dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
        landscape: true,
        reactive: true,
        menu1: false,
        stepper: 0,
        steps: [
            {
                label: 'Fahrtdetails eingeben',
                completed: false
            },
            {
                label: 'Fahrzeugauswahl',
                completed: false
            },
            {
                label: 'Kontakt details',
                completed: false
            },
            {
                label: 'Buchungsübersicht',
                completed: false
            }
        ],
        valid: false,
        pickupLocation: '',
        dropoffLocation: '',
        nameRules: [
            v => !!v || 'Pflichtfeld',
            v => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
            v => !!v || 'Pflichtfeld',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
        ]
    }),
    computed: {
        computedDateFormatted() {
            return this.formatDate(this.date);
        }
    },
    watch: {
        search(val) {
            val && val !== this.select && this.querySelections(val);
        },
        date(val) {
            this.dateFormatted = this.formatDate(this.date);
        }
    },

    methods: {
        formatDate(date) {
            if (!date) return null;

            const [year, month, day] = date.split('-');
            return `${day}/${month}/${year}`;
        },
        parseDate(date) {
            if (!date) return null;

            const [day, month, year] = date.split('/');
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        },
        submit: function() {
            this.$emit('inputData', this.pickupLocation);
        }
    }
};
</script>