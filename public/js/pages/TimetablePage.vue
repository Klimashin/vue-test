<template>
    <div>
        <Header showNewMeetingButton="true"/>
        <Timetable/>
    </div>
</template>

<script>
import Header from './../components/Header';
import Timetable from './../components/Timetable';

export default {
    components: {
        Header,
        Timetable
    }
}
</script>

<style lang="scss">
</style>
