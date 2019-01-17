<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <v-dialog
          max-width="900"
          hide-overlay
          transition="dialog-bottom-transition"
          v-model="dialog"
        >
          <v-btn flat slot="activator" class="success">Neues Auto</v-btn>

          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="dialog = false">
                <v-icon>close</v-icon>
              </v-btn>
              <v-toolbar-title>Fahrzeug erstellen</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>

            <v-card-text>
              <v-form class="px-3" ref="form">
                <v-container>
                  <v-layout>
                    <v-flex xs12 md4>
                      <v-text-field label="Name" v-model="name" :rules="inputRules"></v-text-field>
                    </v-flex>
                    <v-flex xs12 md4>
                      <v-text-field label="Brand" v-model="brand" :rules="inputRules"></v-text-field>
                    </v-flex>
                    <v-flex xs12 md4>
                      <v-text-field label="Ausenfarbe" v-model="color" :rules="inputRules"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex xs12 md4>
                      <v-text-field label="Standort" v-model="location" :rules="inputRules"></v-text-field>
                    </v-flex>
                    <v-flex xs12 md4>
                      <v-text-field label="Sitzplätze" v-model="seatNumber" :rules="inputRules"></v-text-field>
                    </v-flex>

                    <v-flex xs12 md4>
                      <v-text-field
                        label="Preis pro Stunde"
                        v-model="pricePerHour"
                        :rules="inputRules"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex xs12 md12>
                      <v-text-field label="Extras" v-model="extras" :rules="inputRules"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex xs12>
                      <v-textarea label="Beschreibung" v-model="description"></v-textarea>
                    </v-flex>
                  </v-layout>
                </v-container>

                <v-spacer></v-spacer>
                <v-btn flat class="success mx-0 mt-3" @click="submit">Erstellen</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import format from 'date-fns/format';
import database from '@/firebase';

export default {
    name: 'AddCar',
    data() {
        return {
            value: 0,
            dialog: false,
            name: '',
            brand: '',
            color: '',
            description: '',
            extras: '',
            pricePerHour: '',
            seatNumber: '',
            location: '',
            isAvailable: true,
            createdAt: new Date(),
            inputRules: [v => v.length >= 1 || 'Minimum is 3 characters']
        };
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                const car = {
                    name: this.name,
                    brand: this.brand,
                    color: this.color,
                    description: this.description,
                    extras: this.extras,
                    pricePerHour: this.pricePerHour,
                    seatNumber: this.seatNumber,
                    location: this.location,
                    isAvailable: true,
                    createdAt: format(this.createdAt, 'hh:mm DD MM YYYY')
                };

                database
                    .collection('cars')
                    .add(car)
                    .then(() => {
                        this.dialog = false;
                        this.$emit('carAdded');
                    });
            }
        }
    },
    computed: {
        formatDate() {
            return this.dueDate ? format(this.dueDate, 'DD MM YYYY') : '';
        },
        setMyDateToToday() {
            this.createdAt = new Date();
        }
    }
};
</script>
