<template>
  <v-card color="elevation-3 fill-height">
    <v-card-title primary-title>
      <h3 class="headline mb-3">Zusammenfassung</h3>
    </v-card-title>
    <div class="booking__details">
      <v-layout row>
        <v-flex xs12 sm12>
          <v-card>
            <v-list two-line>
              <template>
                <v-container class="pa-0">
                  <v-layout row>
                    <v-flex xs12>
                      <v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>Abholort</v-list-tile-title>
                          <v-list-tile-sub-title class="list__sub--title">{{ pickupLocation }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-divider dark></v-divider>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>Zielort</v-list-tile-title>
                          <v-list-tile-sub-title class="list__sub--title">{{ dropoffLocation }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-divider></v-divider>
                    </v-flex>
                  </v-layout>
                </v-container>

                <v-container class="pa-0">
                  <v-layout row>
                    <v-flex xs6>
                      <v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>Datum</v-list-tile-title>
                          <v-list-tile-sub-title class="list__sub--title">{{ dateFormatted }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-divider></v-divider>
                    </v-flex>

                    <v-flex xs6>
                      <v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>Uhrzeit</v-list-tile-title>
                          <v-list-tile-sub-title class="list__sub--title">{{ time }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-divider></v-divider>
                    </v-flex>
                  </v-layout>
                </v-container>
                <v-container class="pa-0">
                  <v-layout row>
                    <v-flex xs12>
                      <v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>Dauer in Stunden</v-list-tile-title>
                          <v-list-tile-sub-title class="list__sub--title">{{ duration }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-divider dark></v-divider>
                    </v-flex>
                  </v-layout>
                </v-container>
              </template>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </v-card>
</template>
<script>
export default {
    name: 'bookingsummary',
    props: [
        'pickupLocation',
        'dropoffLocation',
        'dateFormatted',
        'time',
        'duration'
    ]
};
</script>
<style lang="scss">
.theme--light.v-divider {
    border-color: rgba(0, 0, 0, 0.12);
    margin-top: 0;
    margin-bottom: 0;
}
.list__sub--title {
    min-height: 25px;
}
.theme--dark.v-divider {
    border-color: rgb(232, 232, 232);
    margin-top: 0;
    margin-bottom: 0;
}
</style>