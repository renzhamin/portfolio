<script lang="ts">
	export let src: string;
	export let size = 50;
	export let radius = '15px';
	export let classes = '';
</script>

<svg>
	class={`card-logo ${classes}`}
	height={size}
	width={size}
	style={`border-radius:${radius};`}
	<use href={src} class="card-logo"></use>
</svg>
