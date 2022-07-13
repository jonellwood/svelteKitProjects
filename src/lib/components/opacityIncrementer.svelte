<script>
	import { opacity } from '../components/countStore.js';

	function increment() {
		opacity.update((n) => n + 0.2);
	}
</script>

<button on:click={increment}> + </button>

<style>
	/* button {
		font-size: 12px;
	} */
</style>
