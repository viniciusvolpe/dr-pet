<style>
    .menu-list a {
        border-radius: 2px;
        color: white;
        display: block;
        padding: 5px 10px;
    }
</style>
<template>
    <div class="columns">
        <aside class="column is-2 aside hero is-dark is-fullheight is-hidden-mobile">
            <aside class="menu">
                <p class="menu-label">Geral</p>
                <ul class="menu-list">
                    <li><router-link to="/dashboard">Dashboard</router-link></li>
                </ul>
                <p class="menu-label">Cadastros</p>
                <ul class="menu-list">
                    <li><router-link to="/animais">Animais</router-link></li>
                    <li><router-link to="/consultas">Consultas</router-link></li>
                    <li><router-link to="/medicamentos">Medicamentos</router-link></li>
                </ul>
            </aside>
        </aside>
        <div class="column is-10 aside hero is-fullheight">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return  {};
    }
}
</script>