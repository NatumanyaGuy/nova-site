<script>
	// @ts-nocheck
	import toast from 'svelte-french-toast';
	import emailjs from '@emailjs/browser';
	const templateParams = {
		from_name: '',
		message: '',
		phone: ''
	};

	let sending = false;

	async function sendEmail() {
		sending = true;
		emailjs.send('service_nova', 'template_km9xlch', templateParams, 'J6G9IibmKisPweWvV').then(
			(response) => {
				console.log('SUCCESS!', response.status, response.text);
				toast.success('Your message was sent successfully!', { position: 'bottom-right' });
				sending = false;
			},
			(err) => {
				console.log('FAILED...', err);
				sending = false;
			}
		);
	}
</script>

<div class="relative">
	<img src="/team/team7.webp" class="absolute inset-0 object-cover w-full h-full" alt="" />
	<div class="relative bg-gray-900 bg-opacity-75">
		<div
			class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24"
		>
			<div class="flex flex-col items-center justify-between xl:flex-row">
				<div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
					<h2
						class="max-w-lg mb-6 font-sans text-xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none"
					>
						Reach out to us,
						<br />
						we'd love to hear from you...
					</h2>

					<div class="text-xl text-base-300 space-y-2">
						<p class="text-sm">Call us</p>
						<div class="flex flex-col gap-1">
							<a
								href="tel:+256752667099"
								aria-label="Our phone"
								title="Our phone"
								class="transition-colors duration-300 text-gray-200 hover:text-deep-purple-800"
								>+256 (0) 75-2-667-099</a
							>
							<a
								href="tel:+256789482500"
								aria-label="Our phone"
								title="Our phone"
								class="transition-colors duration-300 text-gray-200 hover:text-deep-purple-800"
								>+256 (0) 78-9-482-500</a
							>
							<a
								href="tel:+256756889126
					"
								aria-label="Our phone"
								title="Our phone"
								class="transition-colors duration-300 text-gray-200 hover:text-deep-purple-800"
								>+256 (0) 75-6-889-126
							</a>
						</div>
					</div>
					<br />
					<div class="text-xl text-base-300 space-y-2">
						<p class="text-sm">Find us at</p>
						<p class="">
							Kira Road opposite Shell Petrol Station
							<!-- <br />
							Kira- Kyaliwajjala -->
							<br />
							Road Kira Town Council
							<br />
							Wakiso, Uganda
						</p>
					</div>
					<br />
					<div class="text-xl text-base-300 space-y-2">
						<p class="text-sm">Email us</p>
						<p class="">
							<a
								href="mailto:novadietetics.wellnes@gmail.com"
								aria-label="Our Email"
								title="Our Email"
								class="transition-colors duration-300 text-gray-200 hover:text-gray-400"
								>novadietetics.wellnes@gmail.com</a
							>
							<br />
							<a
								href="mailto:dev.novahealth@gmail.com"
								aria-label="Our Email"
								title="Our Email"
								class="transition-colors duration-300 text-gray-200 hover:text-gray-400"
								>dev.novahealth@gmail.com</a
							>
						</p>
					</div>
				</div>
				<div class="w-full max-w-xl xl:px-8 xl:w-8/12">
					<div class="bg-white rounded shadow-2xl p-7 sm:p-10">
						<h3 class="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
							Contact Us
						</h3>
						<div>
							<div class="mb-1 sm:mb-2 flex flex-col">
								<p>
									<label for="firstName" class="inline-block mb-1 font-medium">Your Name</label>
								</p>
								<input
									bind:value={templateParams.from_name}
									placeholder=""
									type="text"
									class="input input-bordered rounded-md input-lg"
									id="firstName"
									name="firstName"
								/>
							</div>
							<div class="mb-1 sm:mb-2 flex flex-col">
								<p>
									<label for="tel" class="inline-block mb-1 font-medium">Your Phone Number</label>
								</p>
								<input
									bind:value={templateParams.phone}
									placeholder=""
									type="tel"
									class="input input-bordered rounded-md input-lg"
									id="tel"
									name="tel"
								/>
							</div>
							<div class="mb-1 sm:mb-2 flex flex-col">
								<p>
									<label for="message" class="inline-block mb-1 font-medium">Your Message</label>
								</p>
								<textarea
									bind:value={templateParams.message}
									class="textarea textarea-bordered rounded-md resize-none"
									id=""
									cols="30"
									rows="10"
								/>
							</div>
							<div class="mt-4 mb-2 sm:mb-4">
								<button
									on:click={() => {
										if (
											templateParams.name == '' ||
											templateParams.message == '' ||
											templateParams.phone == ''
										) {
											toast.error('You missed something!', { position: 'bottom-right' });
										} else {
											sendEmail();
										}
									}}
									class="btn btn-primary w-full normal-case"
									disabled={sending != false}
								>
									{#if sending}
										Sending your Message
									{:else if sending == false}
										Send Message
									{:else}
										Sent
									{/if}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
