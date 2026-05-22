<script>
	// @ts-nocheck
	import BlogCard from '$lib/UI/BlogCard.svelte';
	import { error } from '@sveltejs/kit';
	import PocketBase from 'pocketbase';
	import { onMount } from 'svelte';
	const pb = new PocketBase('https://novaapp2023.fly.dev');
	import { posts } from '$lib/store';
	import { fade } from 'svelte/transition';

	let _posts = [];
	//Get Posts
	async function getPosts() {
		try {
			const resultList = await pb.collection('blog_posts').getList(1, 50, {
				sort: 'created'
			});
			posts.set(resultList.items);
			return resultList.items;
		} catch (err) {
			throw error(404, {
				message: 'Not found'
			});
		}
	}

	onMount(() => {
		if ($posts.length == 0) {
			_posts = getPosts();
		}
	});
</script>

{#await _posts}
	<div class="h-[70vh] flex justify-center items-center w-full">
		<svg
			class="animate-spin h-12 w-12 text-primary"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			/>
		</svg>
	</div>
{:then _posts}
	<div class="lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 py-10 gap-10" in:fade>
		{#each $posts as post}
			<BlogCard {post} />
		{/each}
	</div>
{/await}
