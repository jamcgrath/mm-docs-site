<template>
	<div :class="getClass(styledLine)"></div>
</template>

<script>
	export default {
		props: {
			styledLine: {
				type: String,
				default: 'thin',
			},
		},
		methods: {
			getClass(value) {
				if (value === '2lines') return 'two_lines'

				return value
			},
		},
	}
</script>

<style scoped>
	.thin {
		border-top: 1px solid var(--gray-3);
	}

	.bold {
		border-top: 2px solid var(--gray-3);
	}

	.dotted {
		border-top: 7.57px dotted var(--grape-light);
	}

	.two_lines,
	.wavey,
	.zigzag {
		--bg-pos: 320px;
		width: 100%;
		height: 11px;
		background-repeat: no-repeat;
		background-position: 0, calc(var(--bg-pos) * 1), calc(var(--bg-pos) * 2),
			calc(var(--bg-pos) * 3), calc(var(--bg-pos) * 4), calc(var(--bg-pos) * 5);
	}

	.two_lines {
		background-image: url('/lines/2lines.svg'), url('/lines/2lines.svg'),
			url('/lines/2lines.svg'), url('/lines/2lines.svg'), url('/lines/2lines.svg'),
			url('/lines/2lines.svg');
	}

	.wavey {
		background-image: url('/lines/wavey.svg'), url('/lines/wavey.svg'),
			url('/lines/wavey.svg'), url('/lines/wavey.svg'), url('/lines/wavey.svg'),
			url('/lines/wavey.svg');
	}

	.zigzag {
		background-image: url('/lines/zigzag.svg'), url('/lines/zigzag.svg'),
			url('/lines/zigzag.svg'), url('/lines/zigzag.svg'), url('/lines/zigzag.svg'),
			url('/lines/zigzag.svg');
	}
</style>
