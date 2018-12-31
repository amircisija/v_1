<template>
  <nav>
    <v-toolbar app>
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

    <v-navigation-drawer app v-model="drawer" class="blue darken-2 pa-3">
      <v-layout column align-center>
        <v-flex class="mt-3 mb-5">
          <v-avatar size="100">
            <img src="https://api.adorable.io/avatars/176/testuser@user.me.png" alt>
          </v-avatar>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text" v-text="link.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text" v-text="link.text"></v-list-tile-title>
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
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "Projects", route: "/projects" },
        { icon: "person", text: "Anbieter", route: "/anbieter" },
        { icon: "perm_identity", text: "About", route: "/about" }
      ]
    };
  }
};
</script>