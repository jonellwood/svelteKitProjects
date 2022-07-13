<script>
	import { count } from '../components/countStore.js';
	function decrement() {
		count.update((n) => n - 1);
	}
</script>

<button on:click={decrement}> - </button>

<style>
	button {
		margin-left: 2px;
		margin-right: 2px;
	}
</style>
