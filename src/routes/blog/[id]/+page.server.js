// @ts-nocheck
export let prerender = false;
import { error } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
const pb = new PocketBase('https://novaapp2023.fly.dev');

//Get Posts
async function getPost(id) {
	try {
		const record = await pb.collection('blog_posts').getOne(id, {});
		return record;
	} catch (err) {
		throw error(404, {
			message: 'Not found'
		});
	}
}

export async function load({ params }) {
	let p = await getPost(params.id);
	return { post: JSON.parse(JSON.stringify(p)) };
}
