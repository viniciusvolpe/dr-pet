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
			            <button class="button" v-on:click="login">Login</button>
			          </p>
				  	</div>
				  <div class="nav-center">
				    <a class="nav-item is-brand is-active" href="#">
				      <b class="fa-2x">{{title}}</b>
				    </a>
				  </div>

				  <div class="nav-right nav-menu">
				  	<p class="nav-item" v-for="item in menuItens"><a v-on:click="item.click" v-bind:class="[item.cssClass]">{{item.name}}</a></p>
				  </div>
				</nav>
		    </div>
		</div>
	</section>
</template>
<script>
export default {
	props: ['title', 'menuItens'],
	data () {
		return  {
			usuario: {}
		};
	},
	methods: {
		login: function () {}
	}
}
</script>