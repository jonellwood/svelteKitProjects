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
</script>

<p class="test" style="--font-size:{countValue + 'px'};">The font size is {countValue}</p>

<style>
	.test {
		font-size: var(--font-size);
	}
</style>
