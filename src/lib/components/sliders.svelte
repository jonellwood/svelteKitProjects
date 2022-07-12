<script>
	import { bgOpacity } from './stores.js';
	import { fontSize } from './stores.js';

	$: color = bgOpacity < 0.6 ? '#000' : '#fff';
	// let fontSize = 16;
	$: size = fontSize;
</script>

<div class="slider-holder">
	<label>
		<input type="range" min="0" max="1" step="0.1" bind:value={$bgOpacity} />
		Adjust background opacity
	</label>
	<label>
		<input type="range" min="12" max="20" step="2" bind:value={$size} />
		Adjust font size:{$size} px
	</label>
</div>
