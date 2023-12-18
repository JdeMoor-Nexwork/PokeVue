<template>
    <footer id="default-footer" class="content-grid">
        <div class="default-footer-wrapper">
            <nav>
                <ul>
                    <li><router-link to="/"> Home </router-link></li>
                    <li><router-link to="/about"> About </router-link></li>
                    <li><router-link to="/allpokemon"> All pokemon </router-link></li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<script>


    export default {
        name: 'DefaultNavigation',

    }
</script>