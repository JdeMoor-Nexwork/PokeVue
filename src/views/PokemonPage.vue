<template>

    <main class="content-grid all-pokemon">
        <div class="all-pokemon-heading">
            <h1>All Kanto pokemon</h1>
        </div>
        <PokemonList />
    </main>
</template>

<script>
    import PokemonList from '../components/game/PokemonList.vue'

    export default {
        components: {
            PokemonList
        }
    }
</script>

<style>

</style>