<template>
	<section class="hero">
	 	<div class="hero-body">
	   		<div class="container">
	   			<nav class="nav">
	   				<div class="nav-left">
			          	<a class="nav-item is-brand is-active" href="#">
					      <b class="fa-2x">{{title}}</b>
					    </a>
				  	</div>
				  <span id="toggle" class="nav-toggle" @click="clickToggle">
				    <span></span>
				    <span></span>
				    <span></span>
				  </span>
				  <div id="nav-menu" class="nav-right nav-menu">
				  	<p class="nav-item" v-for="item in menuItens"><router-link v-bind:to="item.to" v-bind:class="[item.cssClass]">{{item.name}}</router-link></p>
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
			login: function () {},
			clickToggle: function(){
				var nav = $('#nav-menu');
	            if(nav.attr("class") == "nav-right nav-menu") return nav.attr('class', "nav-right nav-menu is-active");
	            nav.attr('class', "nav-right nav-menu");
			}
		}
	}	
</script>