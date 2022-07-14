<script context="module">
	import pokemonGame from '$lib/assets/pokemonStart.png';
	import license from '$lib/assets/license.png';
	import pokeidex from '$lib/assets/pokidex.png';
	import resume from '$lib/assets/resume.png';
	import salary from '$lib/assets/salary.png';
	import { OnMount } from 'fractils';

	// let width = '60%';
	let height = '75px';
</script>

<OnMount>
	<div class="container">
		<div class="card-holder">
			<div class="card">
				<a href="/dev-site">
					<h2>Pokemon Style Dev Site</h2>
					<img class="card-image" src={pokemonGame} alt="pokemon style game screenshot" {height} />
					<p class="exerpt">A different take on a dev site using a Pokemon style game in canvas.</p>
					<p class="date-text">July 1, 2022</p>
					<p class="stack-text">HTML, Javascript, Canvas</p>
				</a>
			</div>
			<div class="card">
				<a href="/word-resume-clone">
					<h2>Resume Word Clone attempt</h2>
					<img class="card-image" src={resume} alt="Word clone screenshot" {height} />
					<p class="exerpt">My attempt to clone the look of Microsoft Word for my resume</p>
					<p class="date-text">June 22, 2022</p>
					<p class="stack-text">HTML. CSS, Javascript</p>
				</a>
			</div>
			<div class="card">
				<a href="/pokedex-app">
					<h2>PokeDex Site</h2>
					<img class="card-image" src={pokeidex} alt="Pokdex App screenshot" {height} />
					<p class="exerpt">Everyone has to make this app at least once right? Here's mine</p>
					<p class="date-text">June 13, 2021</p>
					<p class="stack-text">React, Redux</p>
				</a>
			</div>
			<div class="card">
				<a href="/salary-calc-app">
					<h2>Salary Calcualtor App</h2>
					<img class="card-image" src={salary} alt="Salary Calculator App screenshot" {height} />
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
						{height}
					/>
					<p class="exerpt">
						A tool I built that is in production using Raw HTML & Javascript blocks in Wordpress
					</p>
					<p class="date-text">July 5, 2021</p>
					<p class="stack-text">HTML, Javascript, Wordpress</p>
				</a>
			</div>
		</div>
	</div>
</OnMount>

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
		justify-content: center;
	}
	.card {
		background-color: #ffffff;
		width: 250px;
		display: grid;
		grid-template-rows: 1fr;
		margin-left: 10px;
		margin-right: 10px;
		border: 3px solid #00000020;
		text-align: center;
		border-radius: 25px;
		text-shadow: 5px 10px 10px #a0a0a0;
		-webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 0px 21px 10px rgba(0, 0, 0, 0);
		box-shadow: 0px 10px 13px -7px #000000, 0px 0px 21px 10px rgba(0, 0, 0, 0);
		transition: 0.5s all ease;
	}

	.card:hover {
		transform: rotate(-3deg);
		-webkit-box-shadow: 5px 5px 5px 0px #a0a0a0, inset 4px 4px 15px 0px #a0a0a0,
			0px 0px 13px 10px rgba(0, 0, 0, 0);
		box-shadow: 5px 5px 5px 0px #a0a0a0, inset 4px 4px 15px 0px #a0a0a0,
			0px 0px 13px 10px rgba(0, 0, 0, 0);
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

	@media (max-width: 1275px) {
		.card-holder {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
	@media (max-width: 900px) {
		.card-holder {
			grid-template-columns: 1fr 1fr;
		}
		.card:hover {
			transform: perspective(700px) translateZ(90px);
		}
	}
	@media (max-width: 537px) {
		.card-holder {
			grid-template-columns: 1fr;
		}
		.card img {
			display: none;
		}
	}
</style>
