<script>
	// @ts-nocheck

	import ContactBanner from './ContactBanner.svelte';
	import { reveal } from 'svelte-reveal';

	let team = [
		{
			name: 'Miria Twinomugisha',
			position: 'Lead Nutritionist',
			img: '/team/miria.webp',
			bio: 'Miria is a seasoned nutritionist with 11 years of expertise in clinical, family, and community nutrition. Her passion lies in empowering lives through personalized counseling and community-driven programs.'
		},
		{
			name: 'Guy Natumanya',
			position: 'Nutritionist',
			img: '/team/guy.webp',
			bio: "Guy is a has 5 years of experience in the intersection of nutrition and IT developments. He's spent the last 3 years  leveraging technology to advance the field of nutrition "
		},
		{
			name: 'Adeti Doreen',
			position: 'Nutritionist',
			img: '/team/adeti.webp',
			bio: 'Doreen is a dynamic team leader with 4 years of experience in clinical nutrition and dietetics. Her leadership skills and clinical expertise make her a valuable asset, driving her team towards success in providing top-notch nutrition solutions to clients.'
		}
		// {
		// 	name: 'Bridget Ainnembabazi',
		// 	position: 'Nutritionist',
		// 	img: '/team/bridget.webp',
		// 	bio: 'Bridget is a seasoned nutritionist with 4 years of experience in nutrition and dietetics. Her expertise extends to digital marketing, allowing her to effectively promote and advocate for healthy lifestyles while positively impacting the lives of many.'
		// },
		// {
		// 	name: 'Nandutu Rossa Monica',
		// 	position: 'Nutritionist',
		// 	img: '/team/rossa.webp',
		// 	bio: "Rossa has 3 years of experience in clinical nutrition and dietetics. Her expertise in social media management and digital content creation, has helped her disseminate valuable health information, making a positive impact on the online community's well-being."
		// }
	];
</script>

<h5 class="mb-4 text-4xl font-extrabold leading-none text-primary opacity-90 px-24 mt-8">
	Meet the Team
</h5>
<div class="px-4 py-8 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8 lg:py-10">
	<div class="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-2xl">
		{#each team as t}
			<div
				class="card shadow rounded-md bg-base-100 cursor-pointer hover:shadow-xl transition-shadow w-fit"
				use:reveal={{ transition: 'scale', delay: 50 }}
			>
				<div class="card-body flex flex-col justify-center items-center min-h-[8rem]">
					<img
						class="object-cover w-24 h-24 lg:w-40 lg:h-40 rounded-full shadow"
						src={t.img}
						alt="Team"
						fetchPriority="high"
					/>
					<div class="flex flex-col justify-center mt-2">
						<p class="text-lg lg:text-xl text-center font-bold">{t.name}</p>
						<p class="mb-1 text-xs lg:text-lg text-center text-gray-800">{t.position}</p>
						<p class="text-sm lg:text-base tracking-wide text-gray-800">
							{t.bio}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
<ContactBanner />
