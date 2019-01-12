<template>
  <div class="about">
    <h1>This is an about pag sse</h1>
    <p>My age is {{ age }}</p>
    <v-btn color="success" @click="add">Add Year</v-btn>
    <v-btn color="warning" @click="remove">Remove Year</v-btn>
  </div>
</template>

<script>
export default {
    data() {
        return {
            age: 25
        };
    },
    methods: {
        add() {
            this.age++;
        },
        remove() {
            this.age--;
        }
    }
};
</script>
