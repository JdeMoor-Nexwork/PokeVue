<template>
    <header id="default-navigation" class="content-grid">
        <div class="default-navigation-wrapper">
            <img alt="Vue logo" src="../assets/pokemon-logo.png">
            <nav>
                <ul>
                    <li><router-link to="/" class="router-link"> Home </router-link></li>
                    <li><router-link to="/about" class="router-link"> About </router-link></li>
                    <li><router-link to="/allpokemon" class="router-link"> All pokemon </router-link></li>
                    <li><router-link to="/game" class="router-link cta">Catch them all!</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>

    export default {
        name: 'DefaultNavigation',
    }
</script>