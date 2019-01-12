<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <v-dialog max-width="500px" v-model="dialog">
          <v-btn flat slot="activator" class="success">Neuen Anbieter registrieren</v-btn>
          <v-card>
            <v-card-title>
              <h3>Neuen Anbieter registrieren</h3>
            </v-card-title>
            <v-card-text>
              <v-form class="px-3" ref="form">
                <v-text-field label="Booking ID" v-model="bookingNumber" :rules="inputRules"></v-text-field>
                <v-btn class="primary white--text" @click="generateId">Generate ID</v-btn>
                <v-text-field label="Name" v-model="clientName" :rules="inputRules"></v-text-field>
                <v-text-field label="Phone" v-model="phone" :rules="inputRules"></v-text-field>
                <v-menu>
                  <v-text-field
                    :value="formatDate"
                    slot="activator"
                    label="Due date"
                    prepend-icon="date_range"
                  ></v-text-field>
                  <v-date-picker v-model="dueDate"></v-date-picker>
                </v-menu>
                <v-spacer></v-spacer>
                <v-btn flat class="success mx-0 mt-3" @click="submit">Add Anbieter</v-btn>
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
    name: 'Popup',
    data() {
        return {
            dialog: false,
            bookingNumber: '',
            clientName: '',
            phone: '',
            dueDate: null,
            inputRules: [v => v.length >= 3 || 'Minimum is 3 characters']
        };
    },
    methods: {
        generateId() {
            return (
                (this.bookingNumber = Math.random(10000000)
                    .toString(36)
                    .substring(2, 30)) +
                Math.random()
                    .toString(36)
                    .substring(2, 25)
            );
        },
        submit() {
            if (this.$refs.form.validate()) {
                const booking = {
                    bookingNumber: this.bookingNumber,
                    clientName: this.clientName,
                    phone: this.phone,
                    status: 'new',
                    dueDate: format(this.dueDate, 'DD MM YYYY')
                };

                database
                    .collection('anbieter')
                    .add(booking)
                    .then(() => {
                        this.dialog = false;
                        this.$emit('bookingAdded');
                    });
            }
        }
    },
    computed: {
        formatDate() {
            return this.dueDate ? format(this.dueDate, 'DD MM YYYY') : '';
        }
    }
};
</script>
