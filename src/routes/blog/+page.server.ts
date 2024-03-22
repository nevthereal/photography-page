import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch('api/posts');
	const posts: PostData[] = await res.json();
	return { posts };
};
