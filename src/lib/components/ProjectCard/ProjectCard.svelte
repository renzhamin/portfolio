<script lang="ts">
	import { getPeriod, getMonthName } from '$lib/utils/helpers';
	import Chip from '../Chip/Chip.svelte';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import type { Project } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';

	export let project: Project;
	const period = getPeriod(project.period.from, project.period.to);
	const from = `${getMonthName(
		project.period.from.getMonth()
	)} ${project.period.from.getFullYear()}`;
	const to = project.period.to
		? `${getMonthName(project.period.to.getMonth())} ${project.period.to.getFullYear()}`
		: 'now';
</script>

<Card color={project.color}>
	<CardLogo alt={project.name} src={getAssetURL(project.logo)} size={40} radius={'0'} />
	<div class="project-card-top">
		<CardTitle title={project.name} />
		<div class="project-card-links">
			{#each project.links as link}
				<CardLink label={link.label ?? ''} to={link.to} />
			{/each}
		</div>
	</div>
	<CardDivider />
	<div class="project-card-mid">
		<p class="project-card-type">{project.type}</p>
		<p class="project-card-period">{period}</p>
	</div>
	<p class="project-card-description">{project.description}</p>
	<div class="project-card-bottom">
		<Chip label={from} />
		{#if from !== to}
			<Chip label={to} />
		{/if}
	</div>
	<CardDivider />
	<div class="project-card-technologies">
		{#each project.skills as tech}
			<ChipIcon logo={getAssetURL(tech.logo)} name={tech.name} />
		{/each}
	</div>
</Card>

<style lang="scss">
	.project-card {
		&-period,
		&-description {
			margin-bottom: 20px;
		}

		&-top {
			margin-top: 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&-links,
		&-technologies {
			display: flex;
		}

		&-mid {
			display: flex;
			justify-content: space-between;
			color: var(--secondary-text);
			font-size: 0.9em;
			font-style: italic;
			font-weight: 300;
		}

		&-bottom {
			display: flex;
			justify-content: space-between;
			font-size: 0.75em;
			font-weight: 400;
		}

		&-type {
			text-transform: uppercase;
		}

		&-description {
			line-height: 1.4em;
			font-size: 0.9em;
			flex: 1;
			color: var(--accent-text);
		}
	}
</style>
