import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const getPosts = async () => {
	let posts: PostData[] = [];
	const paths = import.meta.glob('/src/routes/blog/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<PostData, 'slug'>;
			const post = { ...metadata, slug } satisfies PostData;
			posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.createdAt).getTime() - new Date(first.createdAt).getTime()
	);

	return posts;
};

export const GET: RequestHandler = async () => {
	const posts = await getPosts();
	return json(posts);
};
