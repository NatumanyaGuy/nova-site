<script>
	// @ts-nocheck
	import { format } from 'date-fns';
	export let post;
	console.log(post);
	function formatDate(dateString) {
		const date = new Date(dateString);
		const formattedDate = format(date, 'MMM d, yyyy');
		return formattedDate;
	}
</script>

<div
	class="container max-w-4xl px-8 py-3 mx-auto rounded-lg shadow-lg bg-base-100 hover:shadow-xl transition-shadow delay-100"
>
	<div class="flex items-center justify-between">
		<span class="text-sm dark:text-gray-400">{formatDate(post?.created)}</span>
	</div>
	<div class="mt-3">
		<span href="/" class="text-xl lg:text-2xl font-bold">{post?.title}</span>
		<div class="mt-2 line-clamp-2">
			{@html post?.content}
		</div>
	</div>
	<div class="flex items-center justify-between mt-3">
		<a
			href="/blog/{post.id}"
			class="hover:text-primary-focus hover:underline text-primary normal-case pb-3">Read More...</a
		>
		<!-- <div class="hidden">
			<span class="flex items-center">
				<img
					src={`https://novaapp2023.fly.dev/api/files/_pb_users_auth_/0izy8zr2833kbv6/${post?.expand?.creator?.avatar}`}
					alt="avatar"
					class="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
				/>
				<span class="text-primary">{post?.expand?.creator?.name}</span>
			</span>
		</div> -->
	</div>
</div>
