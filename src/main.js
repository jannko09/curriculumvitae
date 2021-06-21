import Vue from 'vue'
import VueRouter from 'vue-router'
import VueParticles from 'vue-particles'

/* eslint-disable */
import App from "./App.vue"

import Work from "./components/Work.vue"
import Education from "./components/Education.vue"
import Projects from "./components/Projects.vue"
import ProgressBar from 'vuejs-progress-bar'


import { library } from '@fortawesome/fontawesome-svg-core'
import {  faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope, faMapMarkerAlt, faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add( faLinkedin,faEnvelope,faMapMarkerAlt,faAngleRight,faAngleDown,faGithub)
 
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueParticles)
Vue.use(VueRouter)
Vue.use(ProgressBar)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '*',
      redirect: '/work',
      component: Work,
  },
  {
      component: Work,
      name: 'work',
      path: '/work'
  },
  {
      component: Education,
      name: 'education',
      path: '/edu'
  },
  {
      component: Projects,
      name: 'projects',
      path: '/projects'
  },
  ]
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
