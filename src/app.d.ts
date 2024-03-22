// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface PostData {
		title: string;
		createdAt: string;
		author: 'Neville Brem';
		slug: string;
		description: string;
	}
}

export {};
