<script>
	let services = [
		{
			s: 'Nutrition counseling',
			d: "One-on-one sessions to discuss individual's dietary needs, goals, and any specific health concerns. These sessions can be conducted either on a personal basis or in a group setting."
		},
		{
			s: 'Personalized meal planning',
			d: "Receive assistance in creating balanced and nutritious meal plans tailored to each individual's dietary restrictions, preferences, and goals. Our experts will ensure your meals align with your health objectives."
		},
		{
			s: 'Weight loss, gain, and maintenance',
			d: 'Our comprehensive program is designed to help individuals achieve their weight-related goals in a healthy and sustainable manner. This includes personalized meal plans, diet coaching, exercise recommendations, and tracking tools.'
		},
		{
			s: 'Sports nutrition',
			d: 'For athletes and active individuals, we provide specialized services that focus on nutrient timing and supplement usage to optimize performance and support recovery.'
		},
		{
			s: 'Medical nutrition therapy',
			d: 'Our experienced nutritionists offer tailored counseling and meal planning for individuals with chronic conditions such as diabetes, heart disease, and digestive disorders. We work alongside medical professionals to improve overall health.'
		},
		{
			s: 'Corporate wellness programs',
			d: 'Partner with us to implement customized wellness programs for your business, enhancing the health and well-being of your employees. This can lead to increased productivity and a healthier workforce.'
		},
		{
			s: 'Growth monitoring and promotion',
			d: 'From newborns to five-year-olds, we provide monitoring and guidance to ensure healthy growth and development in children. Our experts offer advice to parents on proper nutrition for their growing kids.'
		},
		{
			s: 'Prenatal nutrition services',
			d: 'Prepare for a healthy pregnancy journey with our prenatal nutrition services. Our experts will guide you through proper nutrition to support both your health and the health of your baby.'
		},
		{
			s: 'Antenatal nutrition services',
			d: 'Tailored for expectant mothers at risk of gestational diabetes, hypertension, and other health concerns. Our specialized guidance ensures a healthy pregnancy and supports the well-being of both mother and baby.'
		},
		{
			s: 'Post-partum weight management',
			d: 'Navigate the post-partum period with our weight management support. Our experts will help you achieve a healthy weight after childbirth, promoting your overall well-being.'
		},
		{
			s: 'Support, protect, and promote breastfeeding:',
			d: 'Receive guidance and assistance in breastfeeding, ensuring the best nutrition for your baby. Our experts provide support to make breastfeeding a positive and successful experience.'
		},
		{
			s: 'Health checks',
			d: 'Comprehensive health assessments to evaluate your current well-being and identify areas for improvement. Our health checks provide valuable insights to guide your personalized nutrition and wellness plan.'
		},
		{
			s: 'Personalized fitness plans',
			d: 'Incorporate physical activity into your health journey with personalized fitness plans. Our experts design exercise routines that complement your nutritional goals, promoting a holistic approach to wellness.'
		},
		{
			s: 'Drug-nutrient interactions consultation',
			d: 'Consult with our professionals to understand how medications may interact with your diet. We provide guidance to mitigate any potential adverse effects and ensure your nutritional needs are met.'
		}
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
					<p class="text-base font-light text-justify">{service.d}</p>
				</div>
				<div
					class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-primary-content group-hover:scale-x-100"
				/>
			</div>
		{/each}
	</div>
</div>
