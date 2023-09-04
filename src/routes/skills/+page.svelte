<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import Xmark from '$lib/Icons/Xmark.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import { SKILLS } from '$lib/params';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import type { Skill } from '$lib/types';
	import { isBlank } from '@riadh-adrani/utils';
	import { getAssetURL } from '$lib/data/assets';
	import { curSkillType as curType } from '$lib/stores/curSkillType';

	const { items, title } = SKILLS;

	const skillTypes: Skill['type'][] = ['core', 'language', 'framework', 'tool'];
	const skillTypeText = new Map([
		['core', 'Overview'],
		['language', 'Languages'],
		['framework', 'Frameworks'],
		['tool', 'Tools']
	]);

	let result: Array<Skill> = items.filter((item) => item.type === $curType);

	function filterResults(type: Skill['type']) {
		result = items.filter((item) => item.type === type);
	}

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;

		if (isBlank(query)) {
			filterResults($curType);
			return;
		}

		result = items.filter((it) => it.name.toLowerCase().includes(query));
	};

	const showSkill = (id: string) => {
		const dg: HTMLDialogElement = document.getElementById(id) as HTMLDialogElement;
		dg?.showModal();
	};
</script>

<!-- href={`${base}/skills/${skill.slug}`} -->
<SearchPage {title} on:search={onSearch}>
	<div class="flex flex-wrap gap-4 mb-8 justify-center md:justify-end">
		{#each skillTypes as type}
			<button
				class="type-btn"
				class:text-white={$curType === type}
				class:curtype={$curType == type}
				on:click={() => {
					$curType = type;
					filterResults(type);
				}}
			>
				{skillTypeText.get(type) || type}
			</button>
		{/each}
	</div>
	<div
		class="flex flex-wrap justify-center md:justify-end lg:justify-start gap-4 md:gap-8 lg:gap-16"
	>
		{#each result as skill (skill.slug)}
			<button
				class:cursor-default={!skill.description}
				on:click={() => {
					if (skill.description) showSkill(`skilldg-${skill.slug}`);
				}}
			>
				<Card
					classes={['skill-card', 'w-40 md:w-44 flex justify-center items-center']}
					tiltDegree={5}
					bgImg={getAssetURL(skill.logo)}
				>
					{#if skill.icon}
						<svelte:component this={skill.icon} width="75" height="75" />
					{/if}
					<p class="text-[var(--tertiary-text)] font-bold">{skill.name}</p>
				</Card>
			</button>
			{#if skill.description}
				<dialog
					class="backdrop:backdrop-blur rounded-2xl"
					id={`skilldg-${skill.slug}`}
					on:click={(e) => {
						if (e.target.id == `skilldg-${skill.slug}`) {
							e.target.close();
						}
					}}
				>
					<button
						class="float-right m-4"
						on:click={() => {
							document.getElementById(`skilldg-${skill.slug}`).close();
						}}
					>
						<Xmark class="fill-white hover:fill-red-400" />
					</button>
					<div class="p-10">
						<h2 class="text-3xl font-bold mb-4">{skill.name}</h2>
						<p>{skill.description}</p>
					</div>
				</dialog>
			{/if}
		{/each}
	</div>
</SearchPage>

<style>
	dialog[open] {
		animation: slideup 200ms;
	}

	dialog {
		color: white;
		background-color: rgb(50, 100, 200);
		filter: drop-shadow(10px 10px 4px rgb(0 0 0 / 0.7));
	}

	dialog p {
		font-size: 1.3rem;
		max-width: 50ch;
	}

	:global([data-theme='dark']) dialog {
		filter: drop-shadow(0px 0px 30px rgb(255 255 255 / 0.5));
	}

	.type-btn {
		width: 8rem;
		padding: 10px;
		border-radius: 1rem;
		background-color: var(--main-hover);
	}

	.curtype,
	.type-btn:hover {
		font-weight: bold;
		background-color: var(--accent-hover);
	}
</style>
