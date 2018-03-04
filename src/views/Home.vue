<template>
	<q-page padding class="card-examples row items-start">
		<q-card inline class="bigger q-ma-sm" v-for="star in stars">
			<q-card-media>
				<img :src="imageURL" style="width: 350px">
			</q-card-media>
			<q-card-title class="relative-position">
				<q-btn fab color="primary" icon="place" class="absolute" style="top: 0; right: 8px; transform: translateY(-50%);" />

				<div class="ellipsis">Cafe Basilico</div>
				<q-rating slot="subtitle" v-model="stars" :max="5" />
				<div slot="right" class="row items-center">
					<q-icon name="place" /> 250 ft
				</div>
			</q-card-title>
			<q-card-main>
				<p>$・Italian, Cafe</p>
				<p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
			</q-card-main>
			<q-card-separator />
			<q-card-actions>
				<q-btn flat round icon="event" />
				<q-btn flat>5:30PM</q-btn>
				<q-btn flat>7:30PM</q-btn>
				<q-btn flat>9:00PM</q-btn>
				<q-btn flat color="primary">Reserve</q-btn>
			</q-card-actions>
		</q-card>
	</q-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({

})
export default class Home extends Vue {
	imageURL: string = 'https://pbs.twimg.com/profile_images/883473889954852864/BC5h3cmj_400x400.jpg'
	stars: number = 5
}
</script>
