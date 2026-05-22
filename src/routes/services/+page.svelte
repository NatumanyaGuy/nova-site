<script>
	import ContactBanner from '$lib/UI/ContactBanner.svelte';
	import ServicesFull from '$lib/UI/ServicesFull.svelte';
	import { reveal } from 'svelte-reveal';
</script>

<div class="py-20 px-8 max-w-screen-xl mx-auto">
	<h2
		class="max-w-2xl text-lg font-semibold leading-none text-center text-primary mb-6 opacity-70 sm:text-3xl md:mx-auto"
	>
		Services we offer:
	</h2>
	<p class="text-center text-2xl lg:text-6xl font-semibold" use:reveal={{ transition: 'fade' }}>
		We are dedicated to empowering you to lead a healthier and happier life through personalized
		nutrition and lifestyle guidance.
	</p>
</div>

<div class="divider my-0 py-0 w-1/4 mx-auto lg:hidden" />

<ServicesFull />
<ContactBanner />
