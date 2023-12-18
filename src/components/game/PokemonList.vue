<template>
    <div v-if="stage === 'choose-pokemon' || pokeEnemyChosen == true" class="poke-list">
        <div class="filter-container">
            <input type="text" v-model="search" placeholder="Search Pokemon">
        </div>
        <div id="poke-container">
            <div v-for="data in filteredPokeData" :key="data" class="pokemon">
                <button :disabled="pokePlayerId == data.id || pokeEnemyId == data.id ? true : false" 
                        :class="{'selected-player-pokemon': pokePlayerId == data.id, 'selected-enemy-pokemon': pokeEnemyId == data.id }"
                        @click="pokePlayerChosen == false ? setPokePlayer(data) : setPokeEnemy(data);  "
                    >
                    <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + data.id + '.png'" />

                    <div class="poke-heading">
                        <p>Nr. {{ data.id }} </p>
                        <h4> {{ data.name }}</h4>
                        <p> {{ data.stats[0].base_stat }} HP</p>
                    </div>
                    <ul class="poke-types">
                        <li v-for="pokeType in data.types" :key="pokeType" :class="pokeType.type.name">
                            {{ pokeType.type.name }}
                        </li>
                    </ul>
                </button>
            </div>
        </div>
    </div>

    <div class="select-container content-grid">
        <div class="select-wrapper">
            <h2>Select your pokemon</h2>
            <button v-if="!pokePlayerChosen" :disabled="!pokePlayerSelected" @click="pokePlayerChosen = true">Select this pokemon</button>
            <button v-if="pokePlayerChosen" :disabled="!pokeEnemySelected" @click="pokeEnemyChosen = true">Select enemy pokemon</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                stage: 'choose-pokemon',
                pokeData: [],
                pokeAmount: 151,
                pokeOffset: 10,
                pokePlayer: [],
                pokePlayerId: '',
                pokePlayerSelected: false,
                pokePlayerChosen: false,
                pokeEnemy: [],
                pokeEnemyId: '',
                pokeEnemySelected: false,
                pokeEnemyChosen: false,
                search: '',
            }
        },
        computed: {
            filteredPokeData(){
                return this.pokeData.filter((data) => {
                    return data.name.match(this.search);
                })
            }
        },
        methods: {
            fetchKantoPokemon(amount) {
                fetch('https://pokeapi.co/api/v2/pokemon?limit=' + amount, {
                        method: 'GET'
                    })
                    .then(response => response.json())
                    .then(allpokemon =>
                        allpokemon.results.forEach((pokemon) =>
                            this.fetchPokemonData(pokemon)
                        )
                    )
                    .catch((err) => {
                        console.log(err)
                    })
            },
            fetchPokemonData(pokemon) {
                let url = pokemon.url
                fetch(url)
                    .then(response => response.json())
                    .then((pokeData) =>
                        this.pokeData.push(pokeData)
                    )
                    .catch((err) => {
                        console.log(err)
                    })
            },
            setPokePlayer(data) {
                this.pokePlayer.push(data)

                this.pokePlayer.forEach((data) =>
                    this.pokePlayerId = data.id
                )

                this.pokePlayerSelected = true
            },
            setPokeEnemy(data){
                this.pokeEnemy.push(data)
                
                this.pokeEnemy.forEach((data) =>
                    this.pokeEnemyId = data.id
                )

                this.pokeEnemySelected = true
            }
        },
        created() {
            this.fetchKantoPokemon(this.pokeAmount)
        }
    }
</script>

<style>

</style>