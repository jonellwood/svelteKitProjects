<script>
	import '../app.css';
	import Footer from '../lib/components/footer.svelte';
	import PostCarousel from '../lib/components/postCarousel.svelte';
	import BottomHr from '../lib/components/bottomHr.svelte';
	import TopHr from '../lib/components/topHr.svelte';
</script>

<h1>Jon Ellwood Projects Page</h1>
<TopHr />
<PostCarousel />
<BottomHr />

<slot />
<Footer />

<style>
	h1 {
		text-align: center;
	}
</style>
