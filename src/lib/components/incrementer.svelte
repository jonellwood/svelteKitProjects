<script>
	import { count } from '../components/countStore.js';

	function increment() {
		count.update((n) => n + 2);
	}
</script>

<button on:click={increment}> + </button>
