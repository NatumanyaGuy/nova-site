<script>
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	import { reveal } from 'svelte-reveal';
	$: _page = $page.route.id;
	let lastScrollTop = writable(0); //last scroll position
	$: showNav = true; //boolean to show or hide nav bar
</script>

<svelte:window
	on:scroll={() => {
		var st = window.pageYOffset || document.documentElement.scrollTop; //Get current scroll position
		//If new scroll position is greater than old (previous/ last) - hide
		if (st > $lastScrollTop) showNav = false;
		else showNav = true;
		$lastScrollTop = st;
	}}
/>

{#if showNav}
	<div class=" z-[3000] fixed top-0 left-0 w-full">
		<div
			class="navbar
		{$lastScrollTop > 20 ? 'bg-base-100 text-base-content' : 'glassmorph'}
		 py-2 shadow"
		>
			<div class="navbar-start">
				<div class="dropdown">
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<label for="" tabindex="0" class="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
								clip-rule="evenodd"
							/>
						</svg>
					</label>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul
						tabindex="0"
						class="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
					>
						<li><a class:active={_page == '/'} class=" rounded-full" href="/">Home</a></li>
						<li>
							<a class:active={_page == '/about'} class="rounded-full" href="/about">About Us</a>
						</li>
						<li><a class:active={_page == '/team'} class="rounded-full" href="/team">Team</a></li>
						<li>
							<a class:active={_page == '/services'} class="rounded-full" href="/services"
								>Our Services</a
							>
						</li>
						<li><a class:active={_page == '/blog'} class="rounded-full" href="/blog">Blog</a></li>
						<li>
							<a class:active={_page == '/gallery'} class="rounded-full" href="/gallery">Gallery</a>
						</li>
						<li>
							<a class:active={_page == '/contact'} class="rounded-full" href="/contact"
								>Contact Us</a
							>
						</li>
					</ul>
				</div>
				<a href="/" class="btn btn-ghost normal-case text-xl">
					<img src="/favicon.png" class="h-12" alt="" />
				</a>
			</div>
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal px-1 gap-2">
					<li><a class:active={_page == '/'} class=" rounded-full" href="/">Home</a></li>
					<li>
						<a class:active={_page == '/about'} class="rounded-full" href="/about">About Us</a>
					</li>
					<li><a class:active={_page == '/team'} class="rounded-full" href="/team">Team</a></li>
					<li>
						<a class:active={_page == '/services'} class="rounded-full" href="/services"
							>Our Services</a
						>
					</li>
					<li><a class:active={_page == '/blog'} class="rounded-full" href="/blog">Blog</a></li>
					<li>
						<a class:active={_page == '/gallery'} class="rounded-full" href="/gallery">Gallery</a>
					</li>
					<li>
						<a class:active={_page == '/contact'} class="rounded-full" href="/contact">Contact Us</a
						>
					</li>
				</ul>
			</div>
			<div class="navbar-end">
				<a href="/getapp" class="btn btn-secondary normal-case rounded-full">Get Our App</a>
			</div>
		</div>
	</div>
{/if}

<!-- Shop Button -->
<div class="bottom-2 left-2 lg:bottom-4 lg:left-4 fixed btn-lg z-[999999]">
	<div class="indicator">
		<a
			href="https://wa.me/256752667099"
			target="_blank"
			class="btn btn-primary normal-case rounded-full shadow-lg"
		>
			<span class="hidden lg:block">Talk to Us Now</span>
			<svg
				role="img"
				viewBox="0 0 24 24"
				class="w-5 h-5 fill-primary-content"
				xmlns="http://www.w3.org/2000/svg"
				><title>WhatsApp</title><path
					d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
				/></svg
			>
		</a>
	</div>
</div>
