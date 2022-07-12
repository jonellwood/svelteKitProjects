<script>
	import Gist from '$lib/components/gist.svelte';
	import { fly, fade } from 'svelte/transition';
	import { OnMount } from 'fractils';
</script>

<OnMount>
	<div class="container-for-everything" transition:fade>
		<article>
			<p>
				One day while installing a printer at a new workstation I watched a conversation between two
				managers discussing a coming years budget and salary increases for employees. The pay scale
				has 13 pay grades and each grade has 13 steps.
			</p>
			<p>
				The discussion involved a lot of "move them up this step means "X" increase" or "what if we
				move them up one step but down two grades?" - stuff like that. And each and every time they
				would then consult a printed spreadsheet with the hourly rate for each grade and step and
				calculate out what the annual amount would be and then compare it to the current grade.
			</p>
			<p>
				Using JavaScript, HTML, and CSS I built a small calculator application that allows the
				selection of a grade and step for salaries 1 & 2 and then just return the rates, the annual
				amounts for each as well as the difference. It is essentially two long switch statements:

				<Gist src="https://gist.github.com/jonellwood/c5ed3039a3076d1df20bc3d0643935aa.js" />

				I am sure there is a much better way to accomplish this but it works! Maybe one day with
				some more experience under my belt I will look at it again. Any suggestions are welcome at
				<a href="mailto:jonellwood@gmail.com"><b>jonellwood@gmail.com</b></a>
			</p>
			<p>
				The reduction in errors as well as time savings it provides I can only imagine. You can see
				a demo version of the project
				<a href="https://wynettedegroot.com" target="_blank"><b>here.</b></a>
			</p>
		</article>
	</div>
</OnMount>

<style>
	.container-for-everything {
		width: 90%;
		margin-left: auto;
		margin-right: auto;
	}
</style>
