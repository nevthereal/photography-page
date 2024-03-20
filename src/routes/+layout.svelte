<script lang="ts">
	import '../app.pcss';
</script>

<nav class="flex justify-between m-8 items-center">
	<a href="/" class="text-5xl font-black text-primary">NB</a>
	<div class="flex gap-8 text-2xl font-bold text-secondary">
		<a href="/gallery">Gallery</a>
		<a href="/about">About</a>
	</div>
</nav>
<main class="md:w-[60%] md:mx-auto">
	<slot />
</main>
