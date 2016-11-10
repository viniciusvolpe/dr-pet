<template>
	<section class="hero is-primary is-mobile">
	 	<div class="hero-body">
	   		<div class="container">
	   			<nav class="nav">
	   				<div class="nav-left">
			          <p class="nav-item">
			            <i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
			          </p>
			          <p class="nav-item control has-addons">
			            <input class="input" type="text" placeholder="Email" v-model="usuario.email">
			            <input class="input" type="password" placeholder="Senha" v-model="usuario.senha">
			            <button class="button" v-on:click="login">Logar</button>
			          </p>
				  	</div>
				  <div class="nav-center">
				    <a class="nav-item is-brand is-active" href="#">
				      <b class="fa-2x">Dr. Pet</b>
				    </a>
				  </div>

				  <div class="nav-right nav-menu">
			        <p class="nav-item"><a v-on:click="goToSaude">Saude</a></p>
			        <p class="nav-item"><a v-on:click="goToAlimentacao">Alimentacao</a></p>
			        <p class="nav-item"><a v-on:click="goToDicas">Dicas</a></p>
			        <p class="nav-item"><a v-on:click="goToFaleComVet" class="button is-warning">Fale com o Vet.</a></p>
				  </div>

				 
				</nav>
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
		login: function () {
			console.log(this.usuario);
		},
		goToSaude : function () {

		},
		goToAlimentacao : function () {

		},
		goToDicas : function () {

		},
		goToFaleComVet : function () {

		},
	}
}
</script>