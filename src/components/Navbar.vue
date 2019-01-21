<template>
  <nav>
    <v-toolbar app clipped-left fixed dense>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="mr-1 font-weight-light">Limo</span>
        <span>App</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer
      app
      v-model="drawer"
      class="pt-4"
      fixed
      stateless
      clipped
      :mini-variant.sync="mini"
    >
      <v-list class="pa-0 mb-3" dense>
        <v-list-tile class="pa-0" avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Welcome {{ name }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn @click.stop="mini = !mini" fab dark small color="indigo" v-show="mini === false">
              <v-icon dark>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon v-text="link.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="link.text"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            name: 'Admin',
            drawer: true,
            links: [
                { icon: 'home', text: 'Landing page', route: '/' },
                { icon: 'home', text: 'Dashboard', route: '/dashboard' },
                { icon: 'folder', text: 'Projects', route: '/projects' },
                { icon: 'person', text: 'AAnbieter Old', route: '/aanbieter' },
                { icon: 'perm_identity', text: 'About', route: '/about' },
                { icon: 'perm_identity', text: 'Cars', route: '/cars' }
            ],
            mini: false,
            right: null
        };
    }
};
</script>
