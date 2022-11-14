<template>
	<div>
		<label for="search" class="visually-hidden">Search</label>
		<div
			class="mm-search-input flex a-items-center br-12"
			:class="{ disabled }"
			ref="mmSearchInput"
		>
			<div class="search-icon mr-2">
				<i class="mmi mmi-search navy-dark" aria-hidden="true"></i>
			</div>
			<input
				id="search"
				class="search-input border-0 mr-2 w-100"
				type="search"
				placeholder="Search"
				:value="value"
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
				console.log(this.$refs.mmSearchInput)
				this.$refs.mmSearchInput.classList.add('has-focus')
			},
			blurInput() {
				this.$refs.mmSearchInput.classList.remove('has-focus')
			},
		},
	}
</script>

<style scoped>
	.mm-search-input {
		--input-border-color: var(--gray-4);
		--input-bg: var(--white);
		--input-color: var(--navy-dark);
		--input-placeholder-color: var(--gray-7);
		--input-fs: var(--body);
		--input-padding: 12px 14px;

		border: 1px solid var(--input-border-color);
		background: var(--input-bg);
		padding: var(--input-padding);
		color: var(--input-color);
		font-size: var(--input-fs);
	}
	.mm-search-input:hover {
		--input-border-color: var(--navy-hover);
	}
	.mm-search-input.has-focus {
		--input-border-color: var(--navy-dark);
	}
	.mm-search-input.disabled {
		--input-bg: var(--gray-3);
		--input-border-color: var(--gray-4);
	}
	.mm-search-input.disabled,
	.search-input[disabled] {
		cursor: not-allowed;
	}
	.search-icon .mmi {
		position: relative;
		top: 2px;
	}
	.search-input {
		color: inherit;
	}
	.search-input::placeholder {
		color: var(--input-placeholder-color);
	}
	.search-input:focus {
		outline: none;
	}
	#search::-webkit-search-cancel-button {
		display: none;
	}

	.search-icon .mmi {
		--mmi-top-safari: 3px;
	}
</style>