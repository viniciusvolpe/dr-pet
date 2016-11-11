<template>
  <div id="app">
    <navbar :title="titulo" :menuItens="itensMenu"></navbar>
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
            click: function () {}
          },
          {
            name: "Alimentacao",
            click: function () {}
          },
          {
            name: "Dicas",
            click: function () {}
          },
          {
            name: "Fale com o Vet.",
            click: function () {},
            cssClass: "button is-warning"
          }
        ]
      }
    }
  }
</script>
