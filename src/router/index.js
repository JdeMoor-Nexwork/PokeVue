import {createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import PokemonPage from '../views/PokemonPage.vue'
import GameStartPage from '../views/game/GameStartPage.vue'
import GameBattlePage from '../views/game/GameBattlePage.vue'



const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    },
    {
        path: '/allpokemon',
        name: 'PokemonPage',
        component: PokemonPage
    },
    {
        path: '/game',
        name: 'GameStartPage',
        component: GameStartPage
    },
    {
        path: '/game/battle',
        name: 'GameBattlePage',
        component: GameBattlePage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URl),
    routes
})

export default router