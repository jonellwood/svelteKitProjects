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
	import chat from '../lib/assets/pokemonGame.png';
</script>

<div
	class="container-for-everything"
	style="color: {color}; 
			--opacity: {bgOpacity};
			--font-size:{countValue + 'px'};"
>
	<article>
		<h1>Pokemon Style Game based Dev Site</h1>
		<p>
			I generally use my personal
			<a href="https://jonellwood.dev" target="_blank"><b> website </b></a>
			as a bit of a playground to try out new things I am learning.
		</p>

		<p>
			Now that I am actively looking for employment I knew that I needed to have some kind of
			portfolio site. Since I am "self-taught" when it comes to web development I know my resume and
			portfolio is not going to look as nice and polished as someone who just graduated from college
			or finished a nice boot camp. I did a good bit of looking around and there are some VERY
			impressive sites out there! Quite intimidating in fact. I also noticed there seemed to be kind
			of a pattern to them. Mostly goes like this: Hey! I am this person. I make websites. Here are
			a few sites I built on nice cards with hover effects and cool shadowing. And below that here
			is a bar chart with different tech stacks (React, Svelte, NodeJS, Angular, etc.) with some
			numbers next to them that quite frankly I don't understand what they mean. And again they look
			amazing! So I know I wanted to do something a little different.
		</p>
		<img src={chat} alt="two game chacters talking" width="350px" />
		<p>
			After taking a course from Chris Course
			<a href="https://chriscourses.com">Chris Courses</a>
			on making a Pokemon style game I decided that I wanted to use that as a starting point for my dev
			site. So I made a little world and make little monsters that will pop up and all the fun stuff.
		</p>
		<p>
			My 5 year old often sits in my office and asked "Where am I going to be?" which gave me a
			great idea of adding NPC's that could could provide information - just like in the real game.
			So I added my 5-year-old son, my two-year-old daughter, and my wife into the world. And I
			added a few other little sprites in there just for fun. It occurred to me though that we have
			enough fighting in the world right now. So I changed the mechanics of the game so that the
			monsters have to boost each other up to win instead of fight. The "attacks" became "respects"
			and they healed instead of hurt.
		</p>

		<p>
			There is still quite a bit of work to do on it and I squash bugs as quick as I can. My hope is
			that it will be taken for what it is intended to be - something a little different to
			highlight some creativity and positivity; but also help me get a job! 😁 Please take a minute
			to swing by
			<a href="https://jonellwood.dev" target="_blank"><b>jonellwood.dev</b></a>
			and check it out!
		</p>
	</article>
</div>

<style>
	.container-for-everything {
		background: rgba(37, 70, 125, var(--opacity));
		font-size: var(--font-size);
	}

	img {
		float: left;
		margin-top: 40px;
		margin-right: 15px;
		margin-bottom: 10px;
	}
	a:hover {
		font-size: larger;
	}
</style>
