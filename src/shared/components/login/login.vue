<template>
<section class="hero is-fullheight is-dark is-bold">

    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-4 is-offset-4">
            <h1 class="title">
              Login
            </h1>
            <div class="box">
              <label class="label">Email</label>
              <p class="control">
                <input class="input" type="text" placeholder="email@examplo.com" v-model="usuario.email">
              </p>
              <label class="label">Senha</label>
              <p class="control">
                <input class="input" type="password" placeholder="●●●●●●●" v-model="usuario.senha">
              </p>
              <hr>
              <p class="control">
                <button class="button is-primary">Login</button>
                <button class="button is-default" @click="voltar">Cancelar</button>
              </p>
            </div>
            <p class="has-text-centered">
              <a href="register.html">Registrar</a>
              | 
              <a href="#">Esqueci minha senha</a>
              | 
              <a href="#">Precisa de ajuda?</a>
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
<script>
export default {
		data () {
			return  {
				usuario: {}
			};
		},
		methods: {
			voltar: function (){
      }
		}
}
</script>