<div class="container">
	<header>
		<img src="/images/ecoform.png" alt="Logo EcoForm" height="50" />
		<nav>
			<a href="/">Accueil</a> |
			<a href="/formulaire">Formulaire</a> |
			<a href="/resultats">Resultats</a> |
			<a href="/apropos">A Propos</a>
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer>© 2025 EcoForm</footer>
</div>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(html, body) {
		height: 100%;
	}

	:global(body) {
		line-height: 1.5;
		font-family: 'Courier New', Courier, monospace;
	}

	:global(input, button, textarea, select) {
		font-family: inherit;
	}

	.container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
	}

	header {
		display: flex;
		align-items: end;
		gap: 1rem;
		background-color: #f0f0f0;
		padding: 1rem;
		border-bottom: 1px solid #ccc;
		margin-bottom: 20px;
	}

	nav a {
		margin-right: 1rem;
		text-decoration: none;
		color: #333;
	}

	nav a:hover {
		text-decoration: underline;
	}

	footer {
		background-color: #f0f0f0;
		padding: 1rem;
		text-align: center;
		border-top: 1px solid #ccc;
		margin-top: 20px;
	}
</style>
