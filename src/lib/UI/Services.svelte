<script>
	let services = [
		{
			s: 'Nutrition counseling',
			d: " One-on-one sessions to discuss individual's dietary needs, goals and any specific health concerns (one on one or group)."
		},
		{
			s: 'Personalized meal planning',
			d: "Assistance in creating balanced and nutritious meal plans that take into account individual's dietary restrictions, preferences and goals."
		},
		{
			s: 'Weight loss, gain and maintenance',
			d: 'Specifically designed to help individuals lose weight in a healthy and sustainable way which includes meal plans, diet coaching, exercise recommendation and tracking tools'
		},
		{
			s: 'Sports nutrition',
			d: 'Specialized services for athletes and active individuals, on nutrient timing and supplement use.'
		},
		{
			s: 'Medical nutrition therapy',
			d: 'Nutrition counselling and meal planning for individuals with chronic conditions such as diabetes, heart disease and digestive disorders.'
		},
		{
			s: 'Corporate wellness programs',
			d: 'For businesses to help their employees improve their health and well-being'
		},
		{
			s: 'Growth monitoring and promotion',
			d: 'From 0 days to 5years to ensure that the children are growing well'
		},
		{ s: 'Prenatal nutrition services', d: 'Nutrition services for mothers preparing to conceive' },
		{
			s: 'Antenatal nutrition services',
			d: 'Specially designed for expecting mothers at risk of gestation diabetes, hypertension and healthenthusiasts.'
		},
		{ s: 'Post- partum weight management', d: '' },
		{ s: 'Support, protect and promote breastfeeding:', d: '' },
		{ s: 'Health checks', d: '' },
		{ s: 'Personalized fitness plans', d: '' },
		{ s: 'Drug-nutrient interactions consultation', d: '' }
	];
</script>

<div
	class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-3xl md:px-24 lg:px-8 lg:py-20"
>
	<div
		class="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0"
	>
		<svg viewBox="0 0 88 88" class="w-full max-w-screen-2xl text-primary opacity-10">
			<circle fill="currentColor" cx="44" cy="44" r="15.5" />
			<circle fill-opacity="0.2" fill="currentColor" cx="44" cy="44" r="44" />
			<circle fill-opacity="0.2" fill="currentColor" cx="44" cy="44" r="37.5" />
			<circle fill-opacity="0.3" fill="currentColor" cx="44" cy="44" r="29.5" />
			<circle fill-opacity="0.3" fill="currentColor" cx="44" cy="44" r="22.5" />
		</svg>
	</div>
	<h2
		class="max-w-2xl text-lg font-semibold leading-none text-center text-primary opacity-70 sm:text-3xl md:mx-auto"
	>
		What we do
	</h2>
	<div class="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10">
		{#each services as service}
			<div
				class="flex flex-col justify-between overflow-hidden text-left
                min-h-16
                transition-shadow duration-200 bg-base-100 rounded-lg shadow group hover:shadow-lg"
			>
				<div class="p-5 flex flex-col justify-center items-center">
					<div class="flex items-center justify-center mb-2">
						<svg
							class="h-10 w-10 fill-secondary"
							xmlns="http://www.w3.org/2000/svg"
							width="100"
							height="100"
							viewBox="0 0 24 24"
						>
							<g>
								<path fill="none" d="M0 0h24v24H0z" />
								<path
									d="M14.121 10.48a1 1 0 0 0-1.414 0l-.707.706a2 2 0 1 1-2.828-2.828l5.63-5.632a6.5 6.5 0 0 1 6.377 10.568l-2.108 2.135-4.95-4.95zM3.161 4.468a6.503 6.503 0 0 1 8.009-.938L7.757 6.944a4 4 0 0 0 5.513 5.794l.144-.137 4.243 4.242-4.243 4.243a2 2 0 0 1-2.828 0L3.16 13.66a6.5 6.5 0 0 1 0-9.192z"
								/>
							</g>
						</svg>
					</div>
					<p class="mb-1 text-xl font-bold text-center">
						{service.s}
					</p>
					<!-- <p class="text-sm font-light text-justify">{service.d}</p> -->
				</div>
				<div
					class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-primary-content group-hover:scale-x-100"
				/>
			</div>
		{/each}
	</div>
</div>
