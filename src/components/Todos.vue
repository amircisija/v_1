<template>
  <div>
    <v-container>
      <v-layout row wrap class="mb-5">
        <v-flex xs12>
          <h2>Todos</h2>
          <div v-for="todo in todos" :key="todo.key">
            <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"/>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import TodoItem from './TodoItem.vue';
export default {
    name: 'Todos',
    components: {
        TodoItem
    },
    props: ['todos']
};
</script>
<style lang="scss">
</style>