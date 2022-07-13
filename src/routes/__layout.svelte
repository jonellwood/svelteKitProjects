<script>
	import { count } from '../../src/lib/components/countStore.js';
	import Incrementer from '../lib/components/incrementer.svelte';
	import Decrementer from '../lib/components/decrementer.svelte';
	import Resetter from '../lib/components/resetter.svelte';

	let countValue;

	count.subscribe((value) => {
		console.log(value);
		countValue = value;
	});
	import '../app.css';
	import Footer from '../lib/components/footer.svelte';
	import PostCarousel from '../lib/components/postCarousel.svelte';
	import BottomHr from '../lib/components/bottomHr.svelte';
	import TopHr from '../lib/components/topHr.svelte';
	import MiddleHr from '../lib/components/middleHr.svelte';
	let visible = false;
</script>

<h1>Jon Ellwood Projects Page</h1>

<div class="control-buttons">
	<div class="font-button">
		Adjust font size
		<Incrementer />
		<Decrementer />
		<Resetter />

		The font size is {countValue}px
	</div>

	<p class="hide-button">
		{#if !visible}
			<button class:active={visible} on:click={() => (visible = !visible)}>Hide List</button>
		{:else}
			<button class:active={visible} on:click={() => (visible = !visible)}>Show List</button>
		{/if}
	</p>
</div>

{#if !visible}
	<TopHr />
	<PostCarousel />
	<BottomHr />
{/if}
{#if visible}
	<MiddleHr />
{/if}
<slot />
<Footer />

<style>
	h1 {
		text-align: center;
	}

	.control-buttons {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.font-button {
		margin-left: 20px;
	}
	.hide-button {
		display: flex;
		justify-content: center;
	}
	@media (max-width: 900px) {
		.font-button {
			display: none;
		}
	}
	@media (max-width: 500px) {
		h1 {
			font-size: large;
		}
	}
</style>
