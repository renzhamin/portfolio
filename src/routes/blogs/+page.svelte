<script lang="ts">
	import ArticleCard from '$lib/components/ArticleCard/ArticleCard.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { BLOGS } from '$lib/params';
	import { isBlank } from '@riadh-adrani/utils';

	const { items, title } = BLOGS;

	let result = items;

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;

		if (isBlank(query)) {
			result = items;
		}

		result = items.filter(
			(it) => it.name.toLowerCase().includes(query) || it.description.toLowerCase().includes(query)
		);
	};
</script>

<SearchPage {title} on:search={onSearch}>
	<div class="experiences">
		{#each result as blog (blog.slug)}
			<ArticleCard {blog} />
		{/each}
	</div>
</SearchPage>

<style lang="scss">
	.experiences {
		display: flex;
		flex-direction: column;
		margin-top: 40px;
	}
</style>
