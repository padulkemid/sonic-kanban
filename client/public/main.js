import Vue from 'vue';
import App from './App.vue';
import VueNoty from 'vuejs-noty';
import 'vuejs-noty/dist/vuejs-noty.css';
import 'bulma/css/bulma.css';

Vue.use(VueNoty, {
  theme: 'metroui',
});
new Vue({
  render: (h) => h(App),
}).$mount('#app');
