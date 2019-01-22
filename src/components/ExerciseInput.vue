<template>
  <div v-if="selectedExercise">
    <h2>Add exercise</h2>
    <div class="input-container">
      <div class="input-selected-name">{{ selectedExercise.name }}</div>
      <in-put
        class="input-number"
        v-on:keyup.enter="addExercise"
        type="number"
        placeholder="0"
        v-model="units"
      ></in-put>
      <div class="input-unit">{{ selectedExercise.unit }}</div>
      <div
        class="input-details"
      >Points {{ selectedExercise.pointsPerUnit}} per {{ selectedExercise.unit }}</div>
      <button @click="addExercise">
        Add to your exercises record
        <span class="forward"></span>
      </button>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
export default {
    name: 'exercise-input',
    computed: {
        ...mapGetters(['selectedExercise'])
    }
    //...
};
</script>