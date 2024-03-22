<script lang="ts">
	import '../app.pcss';
</script>

<nav class="m-8 flex items-center justify-between">
	<a href="/" class="text-5xl font-black text-primary">NB</a>
	<div class="flex gap-8 text-2xl font-bold text-secondary">
		<a href="/gallery">Gallery</a>
		<a href="/blog">Blog</a>
	</div>
</nav>
<main class="md:mx-auto md:w-[60%]">
	<slot />
</main>
