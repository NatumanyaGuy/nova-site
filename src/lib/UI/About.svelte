<script>
	import { reveal } from 'svelte-reveal';
	import { fade } from 'svelte/transition';
</script>

<br />

<div class="bg-base-100">
	<div class="px-4 lg:py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-10 lg:pb-10">
		<div class="grid gap-10 lg:grid-cols-2">
			<div class="lg:pr-10" in:fade>
				<h5 class="mb-4 text-4xl font-extrabold leading-none text-primary opacity-90">About Us</h5>
				<p class="mb-2 text-xl">
					Our Clinic was founded by Ms. Miria Twinomugisha a professional dietitian and Nutritionist
					with 17 years of experience in Clinical, Family and Community nutrition. Our team of
					health care professionals ranging from dietitians, nutritionists, nurses, doctors, and
					laboratory technicians plus fitness instructors have got your back.​We manage chronic
					illness like diabetes, hypertension, obesity, cancers among others.
				</p>
				<slot />
			</div>

			<div use:reveal={{ transition: 'blur', delay: 800, duration: 500 }}>
				<img class="object-contain w-full h-64 rounded sm:h-96" src="/team/team3.webp" alt="" />
				<!-- <img class="object-contain w-full h-64 rounded sm:h-96" src="/team/team4.webp" alt="" /> -->
			</div>
		</div>
	</div>
</div>
