<template>
	<div
		class="c-search-input flex a-items-center br-12"
		:class="{ disabled }"
		ref="cSearchInput"
	>
		<div class="search-icon mr-2">
			<i class="mmi mmi-search navy-dark" aria-hidden="true"></i>
		</div>
		<label for="search" class="visually-hidden">Search</label>
		<input
			id="search"
			class="search-input border-0 mr-2 w-100"
			type="search"
			placeholder="Search"
			@value="value"
			@input="$emit('input', $event.target.value)"
			@focus="focusInput"
			@blur="blurInput"
			ref="searchInput"
			:disabled="disabled"
		/>
		<button
			ref="clearSearchButton"
			:class="{ invisible: !showClear }"
			@click="clearSearch"
		>
			<i
				aria-hidden="true"
				class="mmi mmi-multiply-incircle-filled body gray-6"
			></i>
			<span class="visually-hidden">Clear</span>
		</button>
	</div>
</template>

<script>
	export default {
		props: {
			value: String,
			disabled: Boolean,
		},
		data() {
			return {
				showClear: false,
			}
		},
		watch: {
			value(newValue) {
				if (newValue && newValue.length) {
					this.showClear = true
				} else {
					this.showClear = false
				}
			},
		},
		methods: {
			clearSearch() {
				this.$refs.searchInput.value = ''
				this.$emit('searchCleared')
			},
			focusInput() {
				console.log(this.$refs.cSearchInput)
				this.$refs.cSearchInput.classList.add('has-focus')
			},
			blurInput() {
				this.$refs.cSearchInput.classList.remove('has-focus')
			},
		},
	}
</script>

<style scoped>
	.c-search-input {
		--border-color: var(--gray-4);
		--bg: var(--white);
		--color: var(--navy-dark);
		--placeholder-color: var(--gray-7);
		--fs: var(--body);
		--padding: 12px 14px;

		border: 1px solid var(--border-color);
		background: var(--bg);
		padding: var(--padding);
		color: var(--color);
		font-size: var(--fs);
	}
	.c-search-input:hover {
		--border-color: var(--hover);
	}
	.c-search-input.has-focus {
		--border-color: var(--navy-dark);
	}
	.c-search-input.disabled {
		--bg: var(--gray-3);
		--border-color: var(--gray-4);
	}
	.c-search-input.disabled,
	.search-input[disabled] {
		cursor: not-allowed;
	}
	.mmi {
		position: relative;
		top: 2px;
	}
	.search-input {
		color: inherit;
	}
	.search-input::placeholder {
		color: var(--placeholder-color);
	}
	.search-input:focus {
		outline: none;
	}
	#search::-webkit-search-cancel-button {
		display: none;
	}
</style>