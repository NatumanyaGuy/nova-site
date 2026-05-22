<script>
	// @ts-nocheck
	import Countup from 'svelte-countup';
</script>

<div class="bg-secondary text-secondary-content">
	<div
		class="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20"
	>
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			<div class="text-center">
				<h6 class="text-4xl lg:text-6xl md:text-6xl font-bold">
					<Countup value={115} />
				</h6>
				<p class="mb-2 text-lg font-bold text-md">Happy Clients</p>
			</div>
			<div class="text-center">
				<h6 class="text-4xl lg:text-6xl font-bold">
					<Countup value={300} />
				</h6>
				<p class="mb-2 text-lg font-bold text-md">Sessions done</p>
			</div>
			<div class="text-center">
				<h6 class="text-4xl lg:text-6xl font-bold">
					<Countup value={30} />
				</h6>
				<p class="mb-2 text-lg font-bold text-md">Specialists</p>
			</div>
			<div class="text-center">
				<h6 class="text-4xl lg:text-6xl font-bold">
					<Countup value={17} />
				</h6>
				<p class="mb-2 text-lg font-bold text-md">Years of Experience</p>
			</div>
		</div>
	</div>
</div>
