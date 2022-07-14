<script>
	import { opacity } from '../components/countStore.js';

	function increment() {
		opacity.update((n) => n + 0.2);
	}
</script>

<button on:click={increment}> + </button>

<style>
	button {
		margin-left: 2px;
		margin-right: 2px;
	}
</style>
