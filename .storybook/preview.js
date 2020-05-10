// preview.js (ex config.js)
// preview.js configures the "preview" iframe that renders your components.

import Vue from 'vue'
import Vuex from 'vuex'

// global style
import '../assets/css/variables.css'



Vue.use(Vuex)

export const parameters = {
	passArgsFirst: true,
	docs: {
		iframeHeight: '60px'
	}
}

// https://dev.to/f3ltron/storybook-tailwind-nuxt-one-webpack-config-3kbj
Vue.component('nuxt-link', {
	functional: true,
	render: function (createElement, context) {
		let allClass = {}
		let arrClass = context.data.staticClass
			? context.data.staticClass.split(' ')
			: []
		arrClass.forEach(theClass => {
			allClass[theClass] = true
		})
		return createElement('a', { class: allClass }, context.children)
	}
})

Vue.component('client-only', {
	functional: true,
	render (_createElement, context) {
		return context.children
	}
})
