<template>
  <div id="game-start" class="content-grid">
    <header>
      <h1>Ready to catch them all?</h1>
    </header>
    <PokemonList/>
  </div>
</template>

<script>
    import PokemonList from '../../components/game/PokemonList.vue'

  export default {
    data() {
      return{
        isHidden: false
      }
    },
    components: {
            PokemonList
        }
  }
</script>

<style>

</style>