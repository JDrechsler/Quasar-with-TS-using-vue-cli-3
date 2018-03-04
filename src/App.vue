<template>
	<!-- main wrapping component -->
	<q-layout view="hHr LpR lFf">
		<!-- Header -->
		<q-layout-header>
			<!-- First row of header is a QToolbar -->
			<q-toolbar>
				<!-- showLeft is a model attached to left side drawer below -->
				<q-btn flat round dense @click="showLeft = !showLeft" icon="menu" />

				<q-toolbar-title>
					Layout Header
					<span slot="subtitle">Optional subtitle</span>
				</q-toolbar-title>

				<!-- showRight is a model attached to right side drawer below -->
				<q-btn flat round dense @click="showRight = !showRight" icon="menu" />
			</q-toolbar>

			<!-- Second row of header is a QTabs -->
			<q-tabs>
				<q-route-tab slot="title" icon="view_quilt" to="/" replace hide="icon" label="Home" />
				<q-route-tab slot="title" icon="view_day" to="/about" replace hide="icon" label="About" />
				<q-route-tab slot="title" icon="view_day" to="/test-layout/tabs" replace label="Tabs" />
				<q-route-tab slot="title" icon="input" to="/test-layout/drawer" replace label="Drawer" />
			</q-tabs>
		</q-layout-header>

		<!-- Left Side Drawer -->
		<q-layout-drawer side="left" v-model="showLeft">
			<q-list no-border link inset-separator>
				<q-list-header>Essential Links</q-list-header>
				<q-item to="/docs">
					<q-item-side icon="school" />
					<q-item-main label="Docs" sublabel="quasar-framework.org" />
				</q-item>
				<q-item to="/forum">
					<q-item-side icon="record_voice_over" />
					<q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
				</q-item>
				<q-item to="/chat">
					<q-item-side icon="chat" />
					<q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
				</q-item>
				<q-item to="/twitter">
					<q-item-side icon="rss feed" />
					<q-item-main label="Twitter" sublabel="@quasarframework" />
				</q-item>
			</q-list>
		</q-layout-drawer>

		<!-- Right Side Panel -->
		<q-layout-drawer side="right" v-model="showRight">
			Right Side of Layout
		</q-layout-drawer>

		<!-- sub-routes get injected here: -->
		<q-page-container>
			<router-view />
		</q-page-container>

		<!-- Footer -->
		<q-layout-footer>
			<q-toolbar-title>
				Layout Footer
			</q-toolbar-title>
		</q-layout-footer>
	</q-layout>
</template>

<script lang=ts>
import { Component, Vue } from 'vue-property-decorator';

@Component({

})
export default class App extends Vue {

	showLeft: boolean = true
	showRight: boolean = false

	imageURL: string = "https://media.aircorsica.com/sites/default/files/2017-07/destinations-nice-1_1.jpg"
	loremipsum: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}


</script>
