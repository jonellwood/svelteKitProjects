<script>
	import { opacity } from '../components/countStore.js';

	function decrement() {
		opacity.update((n) => n - 0.2);
	}
</script>

<button on:click={decrement}> - </button>

<style>
	button {
		margin-left: 2px;
		margin-right: 2px;
	}
</style>
