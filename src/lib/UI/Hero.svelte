<script>
	// @ts-nocheck

	import { reveal } from 'svelte-reveal';
</script>

<!-- Large Screen  -->
<div
	class=" lg:flex md:hidden xl:flex flex-col-reverse py-12 lg:pt-0 lg:flex-col lg:pb-0 h-screen w-full hidden"
>
	<div
		class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
	>
		<svg
			class="absolute left-0 hidden h-full text-base-100 transform -translate-x-1/2 lg:block"
			viewBox="0 0 100 100"
			fill="currentColor"
			preserveAspectRatio="none slice"
		>
			<path d="M50 0H100L50 100H0L50 0Z" />
		</svg>
		<img
			fetchPriority="high"
			loading="lazy"
			class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none -z-10 md:h-96 lg:h-full"
			src="/hero-bg.webp"
			alt=""
		/>
	</div>
	<div
		class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl justify-center h-screen"
	>
		<div class="mb- lg:my-20 lg:max-w-xl lg:pr-5">
			<p
				class="text-start text-sm mb-2 uppercase font-light"
				use:reveal={{ transition: 'fade', delay: 700 }}
			>
				Nova Dietetics & Wellness Clinic
			</p>
			<h2
				class="mb-5 text-8xl font-bold sm:leading-none drop-shadow-lg"
				use:reveal={{ transition: 'slide', duration: 1200, x: -200 }}
			>
				Eat Right
				<br class="hidden md:block" />
				<span class="text-secondary">Live Right</span>
				<span class="inline-block text-primary">Live Long</span>
			</h2>
			<div class="divider py-0 my-0 w-1/4" />
			<p
				class="pr-5 mb-5 text-base md:text-3xl max-w-md font-semibold drop-shadow-sm"
				use:reveal={{ transition: 'fly', delay: 1200, duration: 800, y: 200 }}
			>
				Experience Professional and Personalized Nutrition Care.
			</p>
		</div>
	</div>
</div>

<!-- Dot Svg Left Upper Corner  -->
<div class="left-0 -top-10 absolute hidden xl:hidden lg:hidden opacity-40">
	<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" class="">
		<g>
			<ellipse ry="14" rx="14" id="svg_14" cy="136" cx="60" class="fill-base-200 stroke-none" />
			<ellipse ry="14" rx="14" id="svg_15" cy="136" cx="130" class="fill-base-200 stroke-none" />
			<ellipse ry="14" rx="14" id="svg_16" cy="138" cx="200" class="fill-base-200 stroke-none" />
			<ellipse ry="14" rx="14" id="svg_17" cy="138" cx="270" class="fill-base-200 stroke-none" />
			<ellipse ry="14" rx="14" id="svg_18" cy="138" cx="333" class="fill-base-200 stroke-none" />
			<ellipse ry="14" rx="14" id="svg_19" cy="138" cx="403" class="fill-base-200 stroke-none" />
			<ellipse ry="14" rx="14" id="svg_20" cy="140" cx="473" class="fill-base-200 stroke-none" />
			<ellipse ry="14" rx="14" id="svg_21" cy="140" cx="543" class="fill-base-200 stroke-none" />
			<ellipse ry="14" rx="14" id="svg_22" cy="139" cx="605" class="fill-base-200 stroke-none" />
			<ellipse ry="14" rx="14" id="svg_25" cy="220" cx="61" class="fill-base-200 stroke-none" />
			<ellipse ry="14" rx="14" id="svg_26" cy="220" cx="131" class="fill-base-200 stroke-none" />
			<ellipse ry="14" rx="14" id="svg_27" cy="222" cx="201" class="fill-base-200 stroke-none" />
			<ellipse ry="14" rx="14" id="svg_28" cy="222" cx="271" class="fill-base-200 stroke-none" />
			<ellipse ry="14" rx="14" id="svg_29" cy="222" cx="334" class="fill-base-200 stroke-none" />
			<ellipse ry="14" rx="14" id="svg_30" cy="222" cx="404" class="fill-base-200 stroke-none" />
			<ellipse ry="14" rx="14" id="svg_31" cy="224" cx="474" class="fill-base-200 stroke-none" />
			<ellipse ry="14" rx="14" id="svg_32" cy="224" cx="544" class="fill-base-200 stroke-none" />
		</g>
	</svg>
</div>

<!-- Small Screen  -->
<div class="relative h-screen w-full lg:hidden">
	<img
		fetchPriority="high"
		src="/hero-bg.webp"
		class="absolute inset-0 object-cover w-full h-full"
		alt=""
		use:reveal={{ transition: 'blur', duration: 100 }}
	/>
	<div class="relative bg-gray-700 bg-opacity-75">
		<div class="h-screen w-full flex flex-col gap-1 px-8 justify-center items-center">
			<h2
				use:reveal={{ transition: 'fly', delay: 600, duration: 800, y: 200 }}
				class="mb-5 text-5xl font-bold sm:leading-none text-white text-center drop-shadow-2xl -mt-8"
			>
				Eat Right,
				<span class="">Live Right,</span> <br />
				<span class="">Live Long</span>
			</h2>
			<p
				class=" mb-5 text-2xl text-white text-center drop-shadow-2xl"
				use:reveal={{ transition: 'fade', delay: 900, duration: 800, y: 200 }}
			>
				Experience Professional and Personalized Nutrition Care
			</p>
		</div>
	</div>
</div>
