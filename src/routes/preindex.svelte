<script context="module">
	import pokemonGame from '$lib/assets/pokemonGame.png';
	import license from '$lib/assets/license.png';
	import parksBlog from '$lib/assets/parksBlog.png';
	import pokeidex from '$lib/assets/pokidex.png';
	import resume from '$lib/assets/resume.png';
	import salary from '$lib/assets/salary.png';

	let width = '60%';
</script>

<h1>Jon Ellwood Projects Page</h1>

<div class="container">
	<div class="card-holder">
		<div class="card">
			<h2><a href="/dev-site">Pokemon Style Dev Site</a></h2>
			<img src={pokemonGame} alt="pokemon style game screenshot" {width} />
			<p class="exerpt">A different take on a dev site using a Pokemon style game in canvas.</p>
			<p class="date-text">July 1, 2022</p>
			<p class="stack-text">HTML, Javascript, Canvas</p>
		</div>
		<div class="card">
			<h2><a href="/word-resume-clone">Resume Word Clone attempt</a></h2>
			<img src={resume} alt="Word clone screenshot" {width} />
			<p class="exerpt">My attempt to clone the look of Microsoft Word for my resume</p>
			<p class="date-text">June 22, 2022</p>
			<p class="stack-text">HTML. CSS, Javascript</p>
		</div>
		<div class="card">
			<h2><a href="/pokedex-app"> PokeDex Site</a></h2>
			<img src={pokeidex} alt="Pokdex App screenshot" {width} />
			<p class="exerpt">Everyone has to make this app at least once right? Here's mine</p>
			<p class="date-text">June 13, 2021</p>
			<p class="stack-text">React, Redux</p>
		</div>
		<div class="card">
			<h2><a href="/salary-calc-app">Salary Calcualtor App</a></h2>
			<img src={salary} alt="Salary Calculator App screenshot" {width} />
			<p class="exerpt">Using Javascript instead of printed sheets of paper?</p>
			<p class="date-text">March 21, 2022</p>
			<p class="stack-text">HTML, CSS, Javascript</p>
		</div>
		<div class="card">
			<h2><a href="/fee-calc-app">Business Fee Calculator App</a></h2>
			<img src={license} alt="Business Fee License Calculator App screenshot" {width} />
			<p class="exerpt">
				A tool I built that is in production using Raw HTML & Javascript blocks in Wordpress
			</p>
			<p class="date-text">July 5, 2021</p>
			<p class="stack-text">HTML, Javascript, Wordpress</p>
		</div>
		<div class="card">
			<h2><a href="/gatsby-blog">Simple Blog Site</a></h2>
			<img src={parksBlog} alt="Parks Blog screenshot" {width} />
			<p class="exerpt">Simple blog style site using Gastby and Sanity</p>
			<p class="date-text">March 15, 2021</p>
			<p class="stack-text">Gatsby, Sanity</p>
		</div>
	</div>
</div>

<style>
	h1 {
		text-align: center;
	}
	a {
		text-decoration: none;
		color: inherit;
		cursor: pointer;
	}
	.card-holder {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
	.card {
		display: grid;
		grid-template-rows: 1fr;
		margin-top: 15px;
		margin-left: auto;
		margin-right: auto;
		width: 90%;
		/* height: 200px; */
		border: 3px solid black;
		text-align: center;
		border-radius: 20px;
		margin-bottom: 35px;
	}
	.card h2 {
		text-align: center;
		margin-top: 20px;
	}
	.card img {
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 20px;
	}

	.exerpt {
		width: 50%;
		text-align: left;
		margin-left: 30px;
	}
	.date-text {
		font-size: smaller;
		font-weight: 100;
		text-align: end;
		margin-right: 30px;
		margin-top: 0;
		margin-bottom: 0;
	}
	.stack-text {
		font-size: smaller;
		color: dimgrey;
		text-align: end;
		margin-right: 30px;
	}
</style>
