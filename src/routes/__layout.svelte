<script>
	import '../app.css';
	import Footer from '../lib/components/footer.svelte';
	import PostCarousel from '../lib/components/postCarousel.svelte';
	import BottomHr from '../lib/components/bottomHr.svelte';
	import TopHr from '../lib/components/topHr.svelte';
	// import { fly } from 'svelte/transition';
	let visible = false;
	// function toggle() {
	// 	visible.false = !visible.false;
	// }
</script>

<h1>Jon Ellwood Projects Page</h1>
{#if !visible}
	<button class:active={visible} on:click={() => (visible = !visible)}>Hide List</button>
{:else}
	<button class:active={visible} on:click={() => (visible = !visible)}>Show List</button>
{/if}
<TopHr />
{#if !visible}
	<PostCarousel />
{/if}
<BottomHr />

<slot />
<Footer />

<style>
	h1 {
		text-align: center;
	}
	@media (max-width: 500px) {
		h1 {
			font-size: large;
		}
	}
</style>
