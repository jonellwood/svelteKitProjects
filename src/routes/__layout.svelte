<script>
	import { count } from '../../src/lib/components/countStore.js';

	import Incrementer from '../lib/components/incrementer.svelte';
	import Decrementer from '../lib/components/decrementer.svelte';
	import Resetter from '../lib/components/resetter.svelte';

	import OpacityIncrementer from '../lib/components/opacityIncrementer.svelte';
	import Opacitydecrementer from '../lib/components/opacityDecrementer.svelte';
	import OpacityResetter from '../lib/components/opacityResetter.svelte';

	import Footer from '../lib/components/footer.svelte';
	import PostCarousel from '../lib/components/postCarousel.svelte';
	import BottomHr from '../lib/components/bottomHr.svelte';
	import TopHr from '../lib/components/topHr.svelte';
	import MiddleHr from '../lib/components/middleHr.svelte';
	import '../app.css';

	let countValue;

	count.subscribe((value) => {
		console.log(value);
		countValue = value;
	});

	let visible = false;
</script>

<h1>Jon Ellwood Projects Page</h1>

<div class="control-buttons">
	<p class="right-text">Adjust font size</p>
	<p class="font-button">
		<Incrementer />
		<Decrementer />
		<Resetter />
	</p>
	<p class="vanishing-text">The font size is {countValue}px</p>
	<div class="opacity-button">
		<p>Darker</p>
		<OpacityIncrementer />
		<p>Lighter</p>
		<Opacitydecrementer />
		<OpacityResetter />
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
	div:nth-last-of-type(2) p {
		text-align: center;
		color: hotpink;
	}

	.control-buttons {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		margin-left: 3rem;
		margin-right: 3rem;
	}

	.hide-button,
	.font-button,
	.opacity-button {
		display: flex;
		margin-left: 5px;
		align-items: center;
	}
	.right-text {
		text-align: right;
	}

	@media (max-width: 900px) {
		.font-button {
			display: none;
		}
		.opacity-button,
		.right-text,
		.vanishing-text {
			display: none;
		}
	}
	@media (max-width: 500px) {
		h1 {
			font-size: large;
		}
	}
</style>
