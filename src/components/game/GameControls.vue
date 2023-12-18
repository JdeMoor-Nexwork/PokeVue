<template>
    <section id="controls">
        <button @click="attackMonster">ATTACK</button>
        <button :disabled="mayUseSpecialAttack" @click="specialAttackMonster">SPECIAL ATTACK</button>
        <button @click="healPlayer">HEAL</button>
        <button @click="reset">RUN</button>
    </section>
</template>

<script>
    export default {
        name: 'GameControls',
        props: ['propResetGame', 'propPlayerHealth', 'propMonsterHealth', 'propWinner', 'propCurrentRound'],
        data() {
            return {
                playerHealth: this.propPlayerHealth,
                monsterHealth: this.propMonsterHealth,
                currentRound: this.propCurrentRound,
                winner: this.propWinner
            }
        },
        watch: {
            playerHealth(value) {
                if (value <= 0 && this.monsterHealth <= 0) {
                    this.winner = 'draw'
                    this.$emit('emitWinner', this.winner)
                } else if (value <= 0) {
                    this.winner = 'monster'
                    this.$emit('emitWinner', this.winner)
                }
            },
            monsterHealth(value) {
                if (value <= 0 && this.playerHealth <= 0) {
                    this.winner = 'draw'
                    this.$emit('emitWinner', this.winner)
                } else if (value <= 0) {
                    this.winner = 'player'
                    this.$emit('emitWinner', this.winner)
                }
            },
            propPlayerHealth: function(newVal){
                this.playerHealth = newVal  
            },
            propMonsterHealth: function(newVal){
                this.monsterHealth = newVal  
            },
            propCurrentRound: function(newVal){
                this.currentRound = newVal  
            },
            propWinner: function(newVal){
                this.winner = newVal  
            },
        },
        methods: {
            attackMonster() {
                this.updateRound()
                const attackValue = getRandomValue(5, 12)
                this.monsterHealth -= attackValue
                this.$emit('attackMonster', this.monsterHealth)
                this.attackPlayer()
            },
            specialAttackMonster() {
                this.updateRound()
                const attackValue = getRandomValue(10, 25)
                this.monsterHealth -= attackValue
                this.$emit('attackMonster', this.monsterHealth)
                this.attackPlayer()
            },
            attackPlayer() {
                const attackValue = getRandomValue(8, 15)
                this.playerHealth -= attackValue
                this.$emit('attackPlayer', this.playerHealth)
            },
            healPlayer() {
                this.updateRound()
                const healValue = getRandomValue(8, 20)
                if (this.playerHealth + healValue > 100) {
                    this.playerHealth = 100
                } else {
                    this.playerHealth += healValue
                }
                this.$emit('healPlayer', this.playerHealth)
                this.attackPlayer()
            },
            updateRound(){
                this.currentRound++
                this.$emit('currentRound', this.currentRound)
            }
        },
        computed: {
            mayUseSpecialAttack() {
                return this.currentRound % 3 !== 0
            }
        }
    }

    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    }
</script>

<style>

</style>