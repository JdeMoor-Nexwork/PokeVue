<template>
    <section v-if="winner" class="container" id="reset">
        <h2>Game Over!</h2>
        <h3 v-if="winner === 'monster'">You lost!</h3>
        <h3 v-if="winner === 'player'">You won!</h3>
        <h3 v-if="winner === 'draw'">It's a draw</h3>
        <button @click="this.$parent.updateReset">Start new game</button>
    </section>
</template>

<script>
    export default {
        name: 'GameControls',
        props: ['winner']
    }
</script>

<style>

</style>