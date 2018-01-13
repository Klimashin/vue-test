import Vue from 'vue';
import Router from 'vue-router';

import TimetablePage from './pages/TimetablePage';
import MeetingPage from './pages/MeetingPage';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Timetable',
            component: TimetablePage
        },
        {
            path: '/meeting',
            name: 'Meeting',
            component: MeetingPage
        }
    ]
});
