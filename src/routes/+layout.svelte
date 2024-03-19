<script lang="ts">
	import '../app.postcss';
</script>

<nav class="flex justify-between m-8 items-center">
	<a href="/" class="text-7xl font-black text-primary-500">NB</a>
	<div class="flex gap-8 text-2xl font-bold text-secondary-500">
		<a href="/gallery">Gallery</a>
		<a href="/about">About</a>
	</div>
</nav>
<main class="md:w-[60%] md:mx-auto">
	<slot />
</main>
