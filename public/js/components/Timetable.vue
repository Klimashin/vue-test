<template>
<div class="timetable-wrapper">
    <div class="timetable-header">
        <CalendarControl class="timetable-header_left-item"/>
        <div class="timetable-header_right-item"></div>
    </div>
    <div class="timetable-body">
        <div v-for="(rooms, floor_number) in floors">
            <div class="timetable-floor">
                <span class="floor-title">{{ floor_number }} Этаж</span>
            </div>
            <div v-for="room in rooms" class="timetable-room-wrapper">
                <div class="timetable-room">
                    <span class="room-title">{{ room.title }}</span>
                    <span v-if="room.min_capacity" class="room-capacity">{{ room.min_capacity }}-{{ room.max_capacity }} человек</span>
                    <span v-else class="room-capacity">До {{ room.max_capacity }} человек</span>
                </div>
                <div class="room-timeline">
                </div>
            </div>
        </div>
    </div>
    <TimetableGridOverlay/>
</div>
</template>

<script>
import CalendarControl from './CalendarControl';
import TimetableGridOverlay from './TimetableGridOverlay';

export default {
    components: { CalendarControl, TimetableGridOverlay },
    data: function() {
        return {
            floors: {
                1: [
                    { title: 'Ржавый Фред', min_capacity: 3, max_capacity: 10 },
                    { title: 'Красный Майк', min_capacity: 0, max_capacity: 5 }
                ],
                3: [
                    { title: 'Бедлам', min_capacity: 1, max_capacity: 3 },
                    { title: 'Красный Майк', min_capacity: 4, max_capacity: 6 }
                ]
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import './../../scss/variables.scss';

.timetable-wrapper {
    position: relative;
}

.timetable-body {
    min-height: 500px;

    >:first-child {
        padding-top: 20px;
    }
}

.timetable-floor {
    padding-left: 25px;
    margin-bottom: 8px;
}

.timetable-room-wrapper {
    padding-left: 25px;
    display: flex;
    margin-bottom: 16px;
}

.timetable-room {
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 220px;
}

.room-title {
    font-family: HelveticaNeue-Medium;
    font-size: 15px;
    color: #000000;
    line-height: 17px;
}

.floor-title {
    font-family: HelveticaNeue-Bold;
    font-size: 11px;
    color: #858E98;
    letter-spacing: 0.4px;
}

.room-capacity {
    font-family: HelveticaNeue;
    font-size: 13px;
    color: #000000;
    line-height: 17px;
}

.room-timeline {
    flex-grow: 1;
    background: #D5DFE9;
}

.timetable-header {
    box-shadow: 0 1px 0 0 #E9ECEF;
    height: 46px;
    display: flex;
    padding: $contentPadding;

    .timetable-header_left-item {
    }

    .timetable-header_right-item {
        flex-grow: 1;
    }
}
</style>
