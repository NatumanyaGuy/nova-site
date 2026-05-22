<script>
	import toast from 'svelte-french-toast';

	export let data;
	$: post = data?.post;

	// $: console.log(post);
</script>

<svelte:head>
	<meta property="og:title" content={post?.title} />
	<meta property="og:site_name" content="Nova Dietetics & Wellness Clinic" />
	<meta property="og:url" content="https://www.novadietetics.com" />
	<meta property="og:description" content={post?.content} />
	<meta property="og:type" content="website" />
	<!-- <meta property="og:image" content="https://www.novadietetics.com/favicon.png" /> -->
</svelte:head>

<div class="py-8 px-6 lg:px-12 lg:w-7/12 lg:mx-auto">
	<p class="text-2xl font-bold">{post?.title}</p>

	<div class="my-2 ql-content">
		{@html post?.content}
	</div>
</div>

<!-- <div class="mb-8 px-3 flex justify-center">
	<div>
		<span class="flex items-center">
			<img
				src={`https://novaapp2023.fly.dev/api/files/_pb_users_auth_/0izy8zr2833kbv6/${post?.expand?.creator?.avatar}`}
				alt="avatar"
				class="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
			/>
			<span class="text-primary">{post?.expand?.creator?.name}</span>
		</span>
	</div>
</div> -->

<!-- Share Button  -->
<button
	class="btn btn-primary normal-case rounded-full absolute top-20 right-5 btn-outline"
	on:click={async () => {
		const shareData = {
			title: 'Nova Dietetics & Wellness Clinic Blog',
			text: post?.title,
			url: window.location.href
		};
		try {
			await navigator.share(shareData);
			toast.success('Shared');
		} catch (err) {
			toast.error('There was an error!');
		}
	}}
>
	<span>Share this post</span>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
		<path
			d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.366A2.52 2.52 0 0113 4.5z"
		/>
	</svg>
</button>
