<script>
	import './styles.css';

	import TopFold from '$lib/components/topfold/index.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&family=Roboto&display=swap"
		rel="stylesheet"
	/>
	<title>My Page</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="home__container">
	<svelte:component this={TopFold} />
</section>

<style>
    .home__container {
        position: relative;
        background: linear-gradient(165deg, rgba(31,31,31,1) 0%, rgba(62,61,61,1) 65%, rgba(75,75,75,1) 100%);
        min-width: 100%;
        min-height: 100vh;
    }
</style>