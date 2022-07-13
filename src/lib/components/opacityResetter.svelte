<script>
	import { opacity } from '../components/countStore.js';

	function reset() {
		opacity.set(0.5);
	}
</script>

<button on:click={reset}> reset </button>

<style>
	/* button {
		font-size: 12px;
	} */
</style>
