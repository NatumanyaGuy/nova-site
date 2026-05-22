<script>
	// @ts-nocheck

	import Nav from '$lib/UI/Nav.svelte';
	import Footer from '$lib/UI/Footer.svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	$: splashScreen = true;

	onMount(() => {
		setTimeout(() => {
			splashScreen = false;
		}, 2000);
	});
</script>

<Toaster />

{#if splashScreen}
	<div
		class="h-screen w-screen flex flex-col justify-center items-center fixed top-0 left-0 bg-base-100 z-[9999999999999999] overflow-hidden"
		out:fade
	>
		<img
			src="/favicon.png"
			class="h-20 w-20 object-contain animate-pulse"
			fetchPriority="high"
			alt=""
		/>
	</div>
{/if}
<Nav />
<div class="min-h-screen pt-16 lg:pt-16">
	<slot />
</div>
<Footer />
