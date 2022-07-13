<script>
	import { count } from '../../src/lib/components/countStore.js';
	import { opacity } from '../../src/lib/components/countStore.js';
	import Incrementer from '../../src/lib/components/opacityIncrementer.svelte.js';
	import Decrementer from '../../src/lib/components/opacityDecrementer.svelte.js';
	import Resetter from '../../src/lib/components/opacityResetter.svelte';

	let countValue;

	count.subscribe((value) => {
		countValue = value;
	});
	let bgOpacity;

	opacity.subscribe((value) => {
		bgOpacity = value;
	});
</script>

<Incrementer />
<Decrementer />
<Resetter />

<p class="test" style="--opacity: {bgOpacity}; --font-size:{countValue + 'px'};">
	The font size is {countValue}
</p>

<style>
	.test {
		background: rgba(37, 70, 125, var(--opacity));
		font-size: var(--font-size);
	}
</style>
