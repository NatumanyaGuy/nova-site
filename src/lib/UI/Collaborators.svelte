<script>
	let collaborators = [
		{ c: 'Bank of Uganda', img: '/collaborators/bou.png' },
		{ c: 'Muriro', img: '/collaborators/muriro.png' },
		{ c: 'NARL - Kawanda', img: '/collaborators/narl.png' }
	];
</script>

<div class="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-20 bg-base-200">
	<div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
		<h2
			class="max-w-2xl mb-6 text-lg font-semibold leading-none text-primary opacity-70 sm:text-3xl md:mx-auto"
		>
			Organizations we've worked with;
		</h2>
	</div>
	<div class="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
		{#each collaborators as col}
			<div class="text-center">
				<div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-24 sm:h-24">
					<img src={col.img} class="object-contain h-56" alt="sa" />
				</div>
				<h6 class="mb-2 font-semibold leading-5 mt-2">{col.c}</h6>
			</div>
		{/each}
	</div>
	<div class="text-center">
		<a href="/" class="btn btn-secondary btn-outline normal-case rounded-full">Work with Us </a>
	</div>
</div>
