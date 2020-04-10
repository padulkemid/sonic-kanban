import Vue from 'vue';
import App from './App.vue';
import VueNoty from 'vuejs-noty';
import GAuth from 'vue-google-oauth2';
import 'vuejs-noty/dist/vuejs-noty.css';
import 'bulma/css/bulma.css';

const gauthOption = {
  clientId: '395365939112-3nd5a8dpqcd8566i3d2n0brqfoqf2srg.apps.googleusercontent.com',
};

Vue.use(GAuth, gauthOption);
Vue.use(VueNoty, {
  theme: 'metroui',
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
