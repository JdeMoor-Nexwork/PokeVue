<template>
    <section :id="name" class="container">
        <h2>{{name}} Health</h2>
        <div class="healthbar">
            <div class="healthbar__value" :style="healthbarStyles"></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'GameHealthbar',
        data() {
            return {
                playerName: 'Player'
            }
        },
        props: ['name', 'health'],
        computed: {
            healthbarStyles() {
                if (this.health < 0) {
                    return {
                        width: '0%'
                    }
                } else {
                    return {
                        width: this.health + '%'
                    }
                }
            }
        },
    }
</script>

<style>

</style>