<script>
	import { count } from '../../src/lib/components/countStore.js';
	import { opacity } from '../../src/lib/components/countStore.js';
	let countValue;
	count.subscribe((value) => {
		countValue = value;
	});

	let bgOpacity;
	opacity.subscribe((value) => {
		bgOpacity = value;
	});

	$: color = bgOpacity < 0.6 ? '#000' : '#fff';
	import WordResumeClone from '../lib/assets/resume.png';
</script>

<div
	class="container-for-everything"
	style="color: {color}; 
			--opacity: {bgOpacity};
			--font-size:{countValue + 'px'};"
>
	<article>
		<h1>Word Resume Clone</h1>
		<p>
			While realizing an online resume is critical for obtaining employment these days I decided I
			wanted to to have a webpage that would serve as a resume - but was also a challenge to build.
			I decided on trying to make a web page that looks like a Word Document.
		</p>

		<img src={WordResumeClone} alt="word Clone" width="40%" />
		<p>My goals were simple:</p>
		<ul>
			<li>It should look as close to a Word Document as possible.</li>
			<li>The HTML should be semantically correct.</li>
			<li>It should meet all requirements for a11y.</li>
			<li>
				It should also have all the information a potential employer might need. i.e. it needs to be
				a current and functional resume.
			</li>
		</ul>

		<p>
			I started by researching what hex values Office 365 Word used which was fairly easy to find.
			(Firefox dev tools color grab tool made this very easy) Then I started laying out the HTML and
			CSS to make the document look as close to a screenshot of Word in the web as I could. The only
			JavaScript I added was a little date function to update the "Last Saved' bit in the very top.
			The downside to doing this is that there is a bit of a flash when moving between pages as it
			updates. Since I used only HTML (and not a component based framework - although I really wish
			I had) each page is a separate file with LOADS of repeated code. I had a ton of fun creating
			the little AutoSave toggle, sourcing the icons, and even creating the Nav menu. I figured
			since Word has a "references" menu option I might as well make that a page.... and it just
			kind of grew from there.
		</p>
		<p>
			I attempted to the make the ribbon that sits below the menu but man oh man was that tough! I
			think if subgrid was supported across all modern browsers it might be an easier task. I
			snagged a screenshot of the ribbon and loaded it in as an image but felt like that was
			cheating. I have not given up on the ribbon.... but we'll see. Things left to do as of this
			writing: - Make the document responsive. It look awful on mobile. - Make the ribbon for below
			the menu. - Consider refactoring into a React or Svelte app to take advantage of components
			UPDATE: Did refactor to Svelte. Took about 2 1/2 hours and wow was it worth it!
		</p>
		<p>
			Please feel free to view my resume or even hire me. Details can be found 👉
			<a href="https://resume.jonellwood.dev" target="_blank">here</a>
		</p>
		<!-- <label>
			<input type="range" min="0" max="1" step="0.1" bind:value={bgOpacity} />
			Adjust background opacity
		</label> -->
	</article>
</div>

<style>
	.container-for-everything {
		background: rgba(37, 70, 125, var(--opacity));
		font-size: var(--font-size);
	}
	a:hover {
		font-size: larger;
	}

	img {
		float: right;
		margin: 5px;
	}
	li {
		padding: 2px;
	}
</style>
