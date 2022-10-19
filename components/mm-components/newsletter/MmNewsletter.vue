<template>
	<div
		tabindex="0"
		role="button"
		class="newsletter flex flex-col br-12"
		:class="{
			'grape-light-bg newsletter-selected': selected,
		}"
		@click="select"
		@keyup.enter="select"
		@keyup.space="select"
		:aria-pressed="`${selected}`"
	>
		<img :src="value.image" class="img" alt="" />
		<div class="mm-body m-4 navy-dark">
			<div class="flex title-bar">
				<div class="flex-1 title-5_semibold m-0 p-0">
					{{ value.title }}
				</div>
				<span
					class="btn btn-sm btn-circle"
					:class="{
						'btn-selected': selected,
					}"
				>
					<i
						aria-hidden="true"
						:class="`mmi mmi-${selected ? 'check' : 'plus'}`"
					></i>
				</span>
			</div>
			<div class="caption" :class="{ 'gray-5': !selected }">
				{{ value.frequency }}
			</div>
			<div class="caption mt-2" :class="{ 'gray-7': !selected }">
				{{ value.description }}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			value: {
				type: Object,
				default() {
					return {
						id: this.$nanoid(),
						title: 'Mamamia Daily',
						frequency: 'Daily',
						description: 'Get across the stories women are talking about today.',
						image: 'https://picsum.photos/350/150',
					}
				},
			},
		},
		data() {
			return {
				selected: false,
			}
		},
		computed: {},
		methods: {
			select() {
				this.selected = !this.selected
				this.$emit('select', this.selected)
			},
		},
	}
</script>

<style>
	.btn {
		background: rgba(0, 0, 0, 0.1);
	}

	.btn-selected {
		background: var(--grape);
		color: var(--white);
	}

	.newsletter {
		width: 327px;
		max-height: 183.7px;
		border: 1px solid var(--gray-4);
		cursor: pointer;
	}

	.newsletter-selected {
		border: 2px solid var(--grape);
	}

	.img {
		position: relative;
		bottom: 0px;
		border-radius: 11.5px 11.5px 0 0;
		height: 65.7px;
		width: 100%;
		object-fit: cover;
	}
</style>
