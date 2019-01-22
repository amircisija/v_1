<template>
  <li class="exercise-row" @click="selectActiveExercise" role="button">
    <div class="name">{{ exercise.name }}</div>
    <div class="pointsPerUnit">
      <span>{{ exercise.pointsPerUnit }} points per {{ exercise.unit }}</span>
    </div>
  </li>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'exercise-selector',
    methods: {
        ...mapActions({
            selectActiveExercise: 'selectActiveExercise'
        })
    }
    // code omitted...
};
</script>