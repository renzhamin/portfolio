<script lang="ts">
	import Card from '../Card/Card.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import Chip from '../Chip/Chip.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import { getAssetURL } from '$lib/data/assets';

	export let blog: any;
</script>

<Card margin="0px 0px 20px 0px" tiltDegree={2}>
	<a class="experience" href={blog.link} target="_blank">
		<!-- <CardLogo src={getAssetURL(blog.logo)} alt={blog.company} size={75} /> -->
		<svelte:component this={blog.icon} width="75" height="75" />
		<div class="experience-data">
			<h3 class="experience-title">
				<CardTitle title={blog.name} />
				<div class="experience-title-divider" />
			</h3>
			<div class="experience-description">{blog.description}</div>
			<div class="experience-skills">
				{#each blog.skills as skill}
					<ChipIcon logo={getAssetURL(skill.logo)} name={skill.name} />
				{/each}
			</div>
		</div>
	</a>
</Card>

<style lang="scss">
	.experience {
		display: flex;
		align-items: flex-start;

		&-data {
			display: flex;
			flex-direction: column;
			margin-left: 20px;
		}

		@media (max-width: 800px) {
			flex-direction: column;

			&-data {
				margin-left: 0px;
			}
		}

		&-title {
			margin: 0;
			display: flex;
			align-items: center;

			&-divider {
				width: 10px;
			}

			@media (max-width: 800px) {
				& {
					align-items: center;
					margin: 5px 0px;
				}
			}
		}

		&-company-name {
			margin-bottom: 5px;
			font-family: var(--title-f);
			font-size: 1.15em;
		}

		&-period,
		&-location {
			color: var(--accent-text);
			font-size: 0.9em;
			margin-bottom: 5px;
		}

		&-location {
			margin-bottom: 15px;
		}

		&-description {
			margin-bottom: 20px;
		}

		&-skills {
			display: flex;
			flex-wrap: wrap;
		}
	}
</style>
