<template>
  <div>
    <section class="hero__section">
      <div class="overlay"></div>
      <div class="inner">
        <v-container bg fill-height grid-list-md text-xs-center>
          <v-layout row wrap align-center>
            <v-flex xs8 class="mx-auto">
              <h1>Stretchlimousinen24.de</h1>
              <p
                class="white--text"
              >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia numquam doloribus adipisci itaque esse aliquid possimus laudantium magni animi ipsam illum aspernatur dolor eos nostrum, unde nisi? Officiis, voluptatibus!</p>

              <v-card>
                <v-container grid-list-md>
                  <v-layout row wrap>
                    <v-flex xs4 class="my-auto">
                      <v-autocomplete
                        :loading="loading"
                        :items="items"
                        :search-input.sync="search"
                        v-model="select"
                        cache-items
                        class="mx-3 white"
                        flat
                        color="blue"
                        hide-no-data
                        hide-details
                        label="Stadt eingeben..."
                        solo-inverted
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex xs3>
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
                          label="Datum"
                          persistent-hint
                          prepend-icon="event"
                          @blur="date = parseDate(dateFormatted)"
                        ></v-text-field>
                        <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                      </v-menu>
                    </v-flex>
                    <v-flex xs3>
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
                        max-width="290px"
                        min-width="290px"
                      >
                        <v-text-field
                          slot="activator"
                          v-model="time"
                          label="Uhrzeit"
                          prepend-icon="access_time"
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

                    <v-flex>
                      <v-btn color="success">
                        <router-link class="white--text" to="/results">Suchen</router-link>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </section>
    <section class="pa-5">
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas earum, est iste consequatur exercitationem aperiam ducimus rerum quidem impedit hic voluptatem delectus vero cupiditate modi veritatis. Laborum, maxime placeat. A.</h3>
    </section>
  </div>
</template>
<script>
export default {
    name: 'Hero',
    data: vm => ({
        loading: false,
        items: [],
        search: null,
        select: null,
        states: ['Berlin', 'Frankfurt', 'Mainz'],
        // Datepicker
        date: new Date().toISOString().substr(0, 10),
        dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
        menu1: false,
        time: null,
        menu2: false,
        reactive: true
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
        querySelections(v) {
            this.loading = true;
            // Simulated ajax query
            setTimeout(() => {
                this.items = this.states.filter(e => {
                    return (
                        (e || '')
                            .toLowerCase()
                            .indexOf((v || '').toLowerCase()) > -1
                    );
                });
                this.loading = false;
            }, 500);
        },
        formatDate(date) {
            if (!date) return null;

            const [year, month, day] = date.split('-');
            return `${day}/${month}/${year}`;
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
.hero__section {
    position: relative;
    background: url('http://www.star-drive.de/images/limousinen-vermietung.jpg')
        50% 50% no-repeat;
    background-size: cover;
    height: 100vh;
    .inner {
        position: absolute;
        z-index: 20;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
}
h1 {
    color: #fff;
    font-size: 2em;
}
.overlay {
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.8;
    top: 0;
    left: 0;
}
.theme--light.v-text-field--solo-inverted.v-text-field--solo
    > .v-input__control
    > .v-input__slot {
    background: rgb(255, 255, 255);
}
.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused
    > .v-input__control
    > .v-input__slot {
    background: #ffffff;
}
.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused
    > .v-input__control
    > .v-input__slot
    .v-label {
    color: #212121 !important;
}
.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused
    > .v-input__control
    > .v-input__slot
    input {
    color: #212121;
}
</style>