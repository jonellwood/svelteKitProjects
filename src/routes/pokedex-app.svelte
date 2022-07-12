<script>
	import lighthouse from '../lib/assets/pokiedexLighthouse.png';
</script>

<div class="container-for-everything">
	<article>
		<p>
			Why does everyone seem to make a Pokedex app when learning how to interact with API's? Because
			it is so much fun! My attempt at it can be found
			<a href="https://hopeful-shannon-20857d.netlify.app/" target="_blank"><b>here.</b></a>
		</p>
		<p>
			This was a great learning experience using the Pokemon API but good exposure to Redux as well.
			And I like the styling I did on it as well.
		</p>
		<p>
			Shocking to me while I was writing this I decided to check the Lighthouse scores on this page
			and they were all green!
		</p>
		<img src={lighthouse} alt="lighhouse scores for site - all green smiley face" />
	</article>
</div>

<style>
	img {
		width: 50%;
	}
	a:hover {
		font-size: larger;
	}
</style>
