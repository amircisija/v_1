<template>
  <v-app class="grey lighten-4">
    <Navbar/>

    <v-content transition="slide-x-transition">
      <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
      <main class="pb-5">
        <v-container grid-list-md>
          <router-view></router-view>
        </v-container>
      </main>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Todos from './components/Todos';
export default {
    name: 'App',
    components: { Navbar, Footer, Todos },
    data() {
        return {
            todos: [
                {
                    id: 1,
                    title: 'Todo 1',
                    completed: false
                },
                {
                    id: 2,
                    title: 'Todo 2',
                    completed: false
                },
                {
                    id: 3,
                    title: 'Todo 3',
                    completed: false
                }
            ]
        };
    },
    methods: {
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        }
    }
};
</script>
<style lang="scss">
p {
    font-size: 16px;
}
body {
    font-family: 'Roboto', sans-serif;
}
</style>
