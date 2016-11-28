<template>
  <div id="app">
    <navbar :title="titulo" :menuItens="itensMenu" id="navbar"></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import navbar from '../shared/components/nav-bar/nav-bar.vue';

  export default {
    components: {
      navbar
    },
    data () {
      return {
        titulo: "Dr. Pet",
        itensMenu: [
          {
            name: "Saude",
            to: "/saude"
          },
          {
            name: "Alimentacao",
            to: "/alimentacao"
          },
          {
            name: "Dicas",
            to: "/dicas"
          },
          {
            name: "Fale com o Vet.",
            to: "/fale-com-vet",
            cssClass: "button is-warning"
          },
          {
            name: "Login",
            to: "/login",
            cssClass: "button is-outlined"
          }
        ]        
      }
    }
  }
</script>
