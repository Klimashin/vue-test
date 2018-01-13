'use strict';

import Vue from 'vue';
import App from './App';
import router from './router';

new Vue({
    el: '#vue-app',
    router,
    render: h => h(App)
});
