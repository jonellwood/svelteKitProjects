<script>
	import { count, opacity } from '../../src/lib/components/countStore.js';

	let countValue;
	count.subscribe((value) => {
		countValue = value;
	});

	let bgOpacity;
	opacity.subscribe((value) => {
		bgOpacity = value;
	});

	$: color = bgOpacity < 0.6 ? '#000' : '#fff';

	import licenseCode from '../lib/assets/licenseCode.png';
</script>

<div
	class="container-for-everything"
	style="color: {color}; 
			--opacity: {bgOpacity};
			--font-size:{countValue + 'px'};"
>
	<article>
		<h1>Fee Calculator Site</h1>
		<p>
			I was approached about adding a Business License Fee calculator to an existing Wordpress Site.
			The request had a few specific requirements.
		</p>
		<ul>
			<li>Every business has a classification and each classification has its own rate</li>
			<li>The fee is calculated based on the annual revenue of the business</li>
			<ul>
				<li>The first million dollars has a base rate based on the classification</li>
				<li>The second million dollars has a lower rate than the preceeding million</li>
				<li>The third million follows the pattern of the second and so on</li>
			</ul>
			<li>The fee is also based on if the business owner is a resident of the City</li>
		</ul>

		<p>
			I originally reached for Python and worked out most of the logic but found it challenging to
			integrate that into an existing Wordpress site that I had limited access to. By rewriting it
			in JavaScript it was much easier to impliement just using a RawHTML block and Javascript
			block.
		</p>
		<img src={licenseCode} alt="code showing calculations" width="40%" />

		<p>The calculation logic was by far the most complex part of the project.</p>
		<p>
			Once that was sorted the rest was easy. You can see the project in production
			<a href="https://cityofhanahan.com/business-licenses/business-license-fees/" target="_blank"
				><b>here.</b></a
			>
		</p>
	</article>
</div>

<style>
	.container-for-everything {
		background: rgba(37, 70, 125, var(--opacity));
		font-size: var(--font-size);
	}
	img {
		margin-top: 5px;
		margin-right: 15px;
		margin-bottom: 10px;
	}
	a:hover {
		font-size: larger;
	}
	li {
		padding: 2px;
	}
</style>
