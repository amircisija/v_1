<template>
  <div>
    <Nav/>
    <Hero/>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue';
import Hero from '@/components/Hero.vue';
export default {
    name: 'home',
    components: { Nav, Hero }
};
</script>
<style lang="scss">
</style>