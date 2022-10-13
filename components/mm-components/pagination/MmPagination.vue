<template>
	<nav aria-label="pagination">
		<ul class="p-0 m-0 flex a-items-center pagination-list">
			<li v-show="pages > 5 && model > 3">
				<button
					type="button"
					class="btn btn-pagination btn-med box-shadow-med arrow"
					@click="model--"
				>
					<i aria-hidden="true" class="mmi mmi-chevron-left icon"></i>
					<span class="visually-hidden">Previous page</span>
				</button>
			</li>
			<li v-show="pages > 5 && model > 5">
				<button
					type="button"
					class="btn btn-med box-shadow-med medium ml-1 btn-pagination"
					@click="model -= 5"
				>
					...<span class="visually-hidden">Previous 5 pages</span>
				</button>
			</li>
			<li v-for="i in paginator" :key="'btn' + i">
				<button
					type="button"
					class="btn btn-med box-shadow-med medium m-1 width-40 btn-pagination"
					:class="{
						'btn-secondary': i + 1 === model,
						'gray-7': i + 1 !== model,
					}"
					@click="model = i + 1"
					:aria-label="`page ${i + 1}`"
					:aria-current="i + 1 === model ? 'page' : false"
				>
					{{ i + 1 }}
				</button>
			</li>
			<li v-show="pages > 5 && model < pages - 5">
				<button
					type="button"
					class="btn btn-med box-shadow-med medium mr-1 btn-pagination"
					@click="model += 5"
				>
					...<span class="visually-hidden">Next 5 pages</span>
				</button>
			</li>
			<li v-show="pages > 5 && model < pages - 3">
				<button
					type="button"
					class="btn btn-pagination btn-med box-shadow-med arrow"
					@click="model++"
				>
					<i aria-hidden="true" class="mmi mmi-chevron-right icon"></i
					><span class="visually-hidden">Next page</span>
				</button>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		props: {
			value: {
				type: Number,
			},
			pages: {
				type: Number,
				deafult: 0,
			},
		},
		watch: {
			model(newVal) {
				this.$emit('input', newVal)
			},
		},
		data() {
			return {
				model: this.value || 1,
			}
		},
		computed: {
			pagesArray() {
				return [...Array(this.pages).keys()]
			},
			paginator() {
				const currentIndex = this.model
				const arr = this.pagesArray
				// console.log('pagesArray', arr)
				if (this.model <= 3) return arr.slice(0, 5)
				if (this.model >= this.pages - 3) return arr.slice(this.pages - 5)
				return arr.slice(currentIndex - 3, currentIndex - 3 + 5)
			},
		},
		methods: {},
	}
</script>

<style>
	.btn-pagination {
		--btn-bg: var(--white);
		--btn-color: var(--gray-7);
		min-height: 34px;
		width: 40px;
	}

	.btn-pagination[aria-current] {
		--btn-bg: var(--grape);
		--btn-color: var(--white);
	}
	.btn-pagination:hover {
		/* --btn-bg: var(--grape-10); */
		/* --btn-color: var(--gray-7); */
	}

	.btn-pagination:active {
		--btn-bg: var(--grape-light);
	}
	.btn-pagination:focus,
	.btn-pagination[aria-current]:focus {
		--btn-focus-color: var(--grape-40);
	}

	.icon {
		position: relative;
		top: 2px;
	}

	.arrow {
		width: 40px;
		height: 40px;
		color: var(--navy-dark);
	}
</style>