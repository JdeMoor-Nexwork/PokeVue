<template>
  <DefaultNavigation />

  <router-view/>

  <!-- <DefaultFooter /> -->
</template>

<script>
  import DefaultNavigation from './components/DefaultNavigation.vue'
  // import DefaultFooter from './components/DefaultFooter.vue'

  export default {
    name: 'App',
    components: {
      DefaultNavigation,
      // DefaultFooter,
    }
  }
</script>