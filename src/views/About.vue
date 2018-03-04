<template>
	<q-page padding class="view-parallax">
		<div class="q-mx-xl q-mb-xs q-mt-md">
			<p class="caption">
				Scroll down (best using scrollbar instead of mouse scroll if on desktop) to see Parallax in action.
			</p>

			<p v-for="n in 7" :key="`a-${n}`" class="par-text">{{ loremipsum }}</p>
		</div>

		<q-parallax :src="imageURL" :height="200">
			<div slot="loading">Loading...</div>
			<h1>Parallax Title</h1>
		</q-parallax>

		<div class="q-mx-xl q-my-md">
			<p v-for="n in 7" :key="`b-${n}`" class="par-text">{{ loremipsum }}</p>
		</div>

		<q-parallax :src="imageURL">
			<div slot="loading">Loading...</div>
			<h1>Bridge</h1>
		</q-parallax>

		<div class="q-mx-xl q-my-md">
			<p v-for="n in 7" :key="`c-${n}`" class="par-text">{{ loremipsum }}</p>
		</div>

		<q-parallax :src="imageURL">
			<div slot="loading">Loading...</div>
			<h1>Title</h1>
		</q-parallax>

		<div class="q-mx-xl q-my-md">
			<p v-for="n in 7" :key="`d-${n}`" class="par-text">{{ loremipsum }}</p>
		</div>

		<q-parallax :src="imageURL" :height="200">
			<div slot="loading">Loading...</div>
			<h1>Mountains</h1>
		</q-parallax>

		<div class="q-mx-xl q-my-md">
			<p v-for="n in 7" :key="`e-${n}`" class="par-text">{{ loremipsum }}</p>
		</div>
	</q-page>
</template>

<script lang=ts>
import { Component, Vue } from 'vue-property-decorator';

@Component({

})
export default class About extends Vue {
	lorem: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	loremipsum: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	imageURL: string = 'https://c10.patreonusercontent.com/3/eyJ3IjoxNjAwfQ%3D%3D/patreon-posts/xoGk0_TfqiBqf6MSgnG5n-M5w1VMPCuBgRBx11G_SF4CitHP97ER9WCjIvL3P7R1.jpe?token-time=2145916800&token-hash=ETiwdC1Z47JdE5ybV6NHwddC7qPWe5URXMkIn6BY5Y4%3D'
}

</script>
