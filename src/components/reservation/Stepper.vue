<template>
  <v-container>
    <v-layout row justify-center>
      <v-flex xs12 md9>
        <v-stepper v-model="stepper">
          <v-stepper-header>
            <div class="step" v-for="(step, index) in steps" :key="index">
              <v-stepper-step
                :edit-icon="'check'"
                :complete-icon="'edit'"
                :step="index + 1"
                :complete="(index + 1 ) <= stepper"
                :editable="(index + 1) < stepper"
              >{{ step.label }}</v-stepper-step>
              <v-divider></v-divider>
            </div>
          </v-stepper-header>
          <v-container>
            <v-layout row>
              <v-flex xs3>
                <BookingSummary
                  :pickupLocation="pickupLocation"
                  :dropoffLocation="dropoffLocation"
                  :dateFormatted="dateFormatted"
                  :time="time"
                  :duration="dauer"
                />
              </v-flex>

              <v-flex xs9>
                <v-stepper-items>
                  <v-stepper-content step="1">
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
                                <v-text-field
                                  slot="activator"
                                  v-model="time"
                                  label="Uhrzeit"
                                  readonly
                                ></v-text-field>
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
                              <v-select :items="duration" v-model="dauer" label="Dauer in Stunden"></v-select>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-form>
                    </v-card>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click.native="stepper = 2">Continue</v-btn>
                    </v-card-actions>
                  </v-stepper-content>
                  <v-stepper-content step="2">
                    <v-card class="mb-5">
                      <CarSelection/>
                    </v-card>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn flat @click.native="stepper = 1">Back</v-btn>
                      <v-btn color="primary" @click.native="stepper = 3">Continue</v-btn>
                    </v-card-actions>
                  </v-stepper-content>
                  <v-stepper-content step="3">
                    <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn flat @click.native="stepper = 2">Back</v-btn>
                      <v-btn color="primary" @click.native="stepper = 1">Continue</v-btn>
                    </v-card-actions>
                  </v-stepper-content>
                </v-stepper-items>
              </v-flex>
            </v-layout>
          </v-container>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import db from '@/firebase';
import BookingSummary from '@/components/reservation/BookingSummary.vue';
import CarSelection from '@/components/reservation/CarSelection.vue';
export default {
    name: 'steppercomponent',
    components: { BookingSummary, CarSelection },
    data: vm => ({
        pickupLocation: '',
        dropoffLocation: '',
        duration: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        dauer: '',
        time: '',
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
            v => v.length <= 50 || 'Name must be less than 10 characters'
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
        updateMessage(variable) {
            this.childData = variable;
        },
        parseDate(date) {
            if (!date) return null;

            const [day, month, year] = date.split('/');
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        }
    }
};
</script>
<style lang="scss">
.v-card {
    box-shadow: none;
}
</style>