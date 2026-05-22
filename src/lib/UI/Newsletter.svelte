<script>
	import PocketBase from 'pocketbase';
	import { fade } from 'svelte/transition';
	const pb = new PocketBase('https://novaapp2023.fly.dev');
	let success = false;
	let adding = false;
	let data = {
		name: '',
		email: ''
	};

	async function addtoNewsletter() {
		adding = true;
		try {
			const record = await pb.collection('newsletter').create(data);
			success = true;
			adding = false;
		} catch (error) {
			console.error(error);
			adding = false;
		}
	}
</script>

<div class="relative">
	<img src="/team/yoga2.webp" class="absolute inset-0 object-cover w-full h-full" alt="" />
	<div class="relative bg-opacity-70 bg-gray-900">
		<svg class="absolute inset-x-0 bottom-0 text-base-100" viewBox="0 0 1160 163">
			<path
				fill="currentColor"
				d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
			/>
		</svg>
		<div
			class="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
		>
			<div class="flex flex-col items-center justify-between xl:flex-row">
				<div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
					<h2
						class="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-white lg:text-8xl
						drop
						sm:leading-none"
					>
						Sign Up for
						<br />
						our Newsletter
					</h2>
				</div>
				<div class="w-full max-w-xl xl:px-8 xl:w-5/12">
					<div class="bg-white rounded shadow-2xl p-7 sm:p-10">
						<h3 class="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
							Sign up for updates
						</h3>
						<div>
							<div class="mb-1 sm:mb-2">
								<label for="namee" class="inline-block mb-1 font-medium">Your name</label>
								<input
									bind:value={data.name}
									placeholder="John Kizito"
									type="text"
									class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
									id="namee"
									name="namee"
								/>
							</div>

							<div class="mb-1 sm:mb-2">
								<label for="email" class="inline-block mb-1 font-medium">E-mail</label>
								<input
									bind:value={data.email}
									placeholder="johnkizito@example.com"
									type="text"
									class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
									id="email"
									name="email"
								/>
							</div>

							{#if success}
								<div class="p-3" in:fade>
									<div class="alert bg-secondary text-secondary-content">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											class="stroke-secondary-content shrink-0 w-6 h-6"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
											/></svg
										>
										<span>Success!</span>
									</div>
								</div>
							{/if}

							<div class="mt-4 mb-2 sm:mb-4">
								<button
									disabled={adding}
									class="btn btn-secondary w-full normal-case"
									on:click={() => {
										if (data.name != '' || data.email != '') {
											addtoNewsletter();
										}
									}}
								>
									{#if adding}
										Subscribing...
									{:else}
										Subscribe
									{/if}
								</button>
							</div>
							<p class="text-xs text-gray-600 sm:text-sm">
								We respect your privacy. Unsubscribe at any time.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
