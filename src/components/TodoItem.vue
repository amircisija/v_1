<template>
  <div class="todo-item" v-bind:class="{'is-complete' : todo.completed }">
    <p>
      <input type="checkbox" v-on:change="markComplete">
      {{ todo.title }}
      <button class="btn del" @click="$emit('del-todo', todo.id) ">x</button>
    </p>
  </div>
</template>
<script>
export default {
    name: 'TodoItem',
    props: ['todo'],
    methods: {
        markComplete() {
            this.todo.completed = !this.todo.completed;
        }
    }
};
</script>
<style lang="scss" scope>
.todo-item {
    background: #fff;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}
.is-complete {
    text-decoration: line-through;
}
.del {
    background: tomato;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
}
</style>