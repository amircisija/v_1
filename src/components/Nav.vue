<template>
  <v-toolbar dark color="primary" app>
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">Stretchlimousinen24.de</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn href="/dashboard">Home</v-btn>
    <v-btn>Uber Uns</v-btn>
    <v-btn>Kontakt</v-btn>
    <v-btn>Anbieter verden</v-btn>
  </v-toolbar>
</template>
<script>
export default {
    name: 'Nav'
};
</script>