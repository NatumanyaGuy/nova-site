<script>
	import About from '$lib/UI/About.svelte';
	import Collaborators from '$lib/UI/Collaborators.svelte';
	import Hero from '$lib/UI/Hero.svelte';
	import Newsletter from '$lib/UI/Newsletter.svelte';
	import Services from '$lib/UI/Services.svelte';
	import Stats from '$lib/UI/Stats.svelte';
	import Footer from '$lib/UI/Footer.svelte';
	import Testimonials from '$lib/UI/Testimonials.svelte';
</script>

<Hero />
<About>
	<div class="flex flex-row justify-end">
		<a
			href="/about"
			class="btn btn-ghost text-primary hover:text-secondary transition rounded-full normal-case"
			>Read More
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="w-5 h-5"
			>
				<path
					fill-rule="evenodd"
					d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
	</div>
</About>
<Stats />
<Services />

<Newsletter />
<Testimonials />
<Collaborators />
