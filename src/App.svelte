<script>
	export let appName;
</script>

<main>
	<h1>Welcome to {appName} App!</h1>
	<img src="/favicon.png" alt="Svelte Logo" />
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
<footer>
	<nav>
		<a href="https://svelte.dev/docs">API</a>
		<a href="https://svelte.dev/examples">Examples</a>
		<a href="https://svelte.dev/repl/hello-world">REPL</a>
		<a href="https://svelte.dev/blog">Blog</a>
		<a href="https://svelte.dev/faq">FAQ</a>
		<a href="https://discord.com/invite/yy75DKs">Discord</a>
		<a href="https://github.com/sveltejs/svelte">GitHub</a>
	</nav>
</footer>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #676778;
		text-transform: uppercase;
		font-size: 2.4em;
		font-weight: 700;
	}

	img {
		height: 40vmin;
		margin: 0.8em;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	nav a {
		margin: 16px;
		margin-top: 24px;
		color: #ff3e00;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>