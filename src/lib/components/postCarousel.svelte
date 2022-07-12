<script context="module">
	import pokemonGame from '$lib/assets/pokemonStart.png';
	import license from '$lib/assets/license.png';
	import parksBlog from '$lib/assets/parksBlog.png';
	import pokeidex from '$lib/assets/pokidex.png';
	import resume from '$lib/assets/resume.png';
	import salary from '$lib/assets/salary.png';

	let width = '60%';
</script>

<div class="container">
	<div class="card-holder">
		<div class="card">
			<a href="/dev-site">
				<h2>Pokemon Style Dev Site</h2>
				<img class="card-image" src={pokemonGame} alt="pokemon style game screenshot" {width} />
				<p class="exerpt">A different take on a dev site using a Pokemon style game in canvas.</p>
				<p class="date-text">July 1, 2022</p>
				<p class="stack-text">HTML, Javascript, Canvas</p>
			</a>
		</div>
		<div class="card">
			<a href="/word-resume-clone">
				<h2>Resume Word Clone attempt</h2>
				<img class="card-image" src={resume} alt="Word clone screenshot" {width} />
				<p class="exerpt">My attempt to clone the look of Microsoft Word for my resume</p>
				<p class="date-text">June 22, 2022</p>
				<p class="stack-text">HTML. CSS, Javascript</p>
			</a>
		</div>
		<div class="card">
			<a href="/pokedex-app">
				<h2>PokeDex Site</h2>
				<img class="card-image" src={pokeidex} alt="Pokdex App screenshot" {width} />
				<p class="exerpt">Everyone has to make this app at least once right? Here's mine</p>
				<p class="date-text">June 13, 2021</p>
				<p class="stack-text">React, Redux</p>
			</a>
		</div>
		<div class="card">
			<a href="/salary-calc-app">
				<h2>Salary Calcualtor App</h2>
				<img class="card-image" src={salary} alt="Salary Calculator App screenshot" {width} />
				<p class="exerpt">Using Javascript instead of printed sheets of paper?</p>
				<p class="date-text">March 21, 2022</p>
				<p class="stack-text">HTML, CSS, Javascript</p>
			</a>
		</div>
		<div class="card">
			<a href="/fee-calc-app">
				<h2>Business Fee Calculator App</h2>
				<img
					class="card-image"
					src={license}
					alt="Business Fee License Calculator App screenshot"
					{width}
				/>
				<p class="exerpt">
					A tool I built that is in production using Raw HTML & Javascript blocks in Wordpress
				</p>
				<p class="date-text">July 5, 2021</p>
				<p class="stack-text">HTML, Javascript, Wordpress</p>
			</a>
		</div>
		<div class="card">
			<a href="/gatsby-blog">
				<h2>Simple Blog Site</h2>
				<img class="card-image" src={parksBlog} alt="Parks Blog screenshot" {width} />
				<p class="exerpt">Simple blog style site using Gastby and Sanity</p>
				<p class="date-text">March 15, 2021</p>
				<p class="stack-text">Gatsby, Sanity</p>
			</a>
		</div>
	</div>
</div>

<style>
	a {
		text-decoration: none;
		color: inherit;
		cursor: pointer;
	}
	.card-holder {
		/* display: grid; */
		/* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; */
		display: flex;
	}
	.card {
		width: 250px;
		display: grid;
		grid-template-rows: 1fr;
		margin-top: 15px;
		margin-left: 10px;
		margin-right: 10px;
		/* width: 90%; */
		/* height: 200px; */
		border: 3px solid black;
		text-align: center;
		border-radius: 20px;
		/* margin-bottom: 35px; */
	}
	.card h2 {
		font-size: medium;
		text-align: center;
		margin-top: 20px;
	}
	.card img {
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 20px;
		/* display: none; */
	}

	.exerpt {
		display: none;
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
