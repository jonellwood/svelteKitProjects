<script>
	import { count } from '../components/countStore.js';

	function reset() {
		count.set(16);
	}
</script>

<button on:click={reset}> reset </button>
