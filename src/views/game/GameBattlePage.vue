<template>
    <div id="game-battle" class="content-grid">
        <GameHealthbar name="Monster" :health="propMonsterHealth" />
        <GameHealthbar name="Player" :health="propPlayerHealth" />

        <GameReset @reset="UpdateReset()" :winner="propWinner" />

        <GameControls :propResetGame="propResetGame" :propPlayerHealth="propPlayerHealth"
            :propMonsterHealth="propMonsterHealth" :propCurrentRound="propCurrentRound" :propWinner="propWinner"
            @reset="reset($event)" @attackMonster="updateMonsterHealth($event)"
            @attackPlayer="updatePlayerHealth($event)" @healPlayer="updatePlayerHealth($event)"
            @emitWinner="updateWinner($event)" @currentRound="updateCurrentRound($event)" />
    </div>
</template>

<script>
    import GameHealthbar from '../../components/game/GameHealthbar.vue'
    import GameControls from '../../components/game/GameControls.vue'
    import GameReset from '../../components/game/GameReset.vue'

    export default {
        data() {
            return {
                propPlayerHealth: 100,
                propMonsterHealth: 100,
                propCurrentRound: 0,
                propWinner: null,
                propResetGame: false,
            }
        },
        components: {
            GameHealthbar,
            GameControls,
            GameReset
        },
        methods: {
            updateMonsterHealth(updatedMonsterHealth) {
                this.propMonsterHealth = updatedMonsterHealth
            },
            updatePlayerHealth(updatedPlayerHealth) {
                this.propPlayerHealth = updatedPlayerHealth
            },
            updateWinner(updatedWinner) {
                this.propWinner = updatedWinner
            },
            updateReset() {
                this.propPlayerHealth = 100
                this.propMonsterHealth = 100
                this.propCurrentRound = 0
                this.propWinner = null
                this.propResetGame = true

                console.log(this.propCurrentRound)
            },
            updateCurrentRound(updatedCurrentRound) {
                this.propCurrentRound = updatedCurrentRound
            }
        }
    }
</script>

<style>

</style>