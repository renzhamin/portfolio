<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import about from '$lib/md/about.md?raw';
	import { TITLE_SUFFIX } from '$lib/params';
	import { useTitle } from '$lib/utils';

	const title = 'About';
</script>

<svelte:head>
	<title>{useTitle(title, TITLE_SUFFIX)}</title>
</svelte:head>

<div class="flex justify-center items-center h-full px-12 md:px-48 pb-16">
	<div>
		<Markdown content={about} />
	</div>
</div>
