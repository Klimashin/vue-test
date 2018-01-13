<template>
<div class="timetable-grid-overlay">
    <div class="timetable-grid-overlay_left-item"></div>
    <div class="timetable-grid-overlay_right-item">
        <div class="timline">
            <div v-for="item in timeline_marks" class="timeline-column">
                <span class="timeline-mark">{{ item.time }}</span>
            </div>
        </div>
        <div class="timetable-grid">
            <div v-for="item in timeline_marks" class="timeline-column">
                <div class="timetable-grid-line"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            timeline_marks: [
                { time: '8:00' },
                { time: '9' },
                { time: '10' },
                { time: '11' },
                { time: '12' },
                { time: '13' },
                { time: '14' },
                { time: '15' },
                { time: '16' },
                { time: '17' },
                { time: '18' },
                { time: '19' },
                { time: '20' },
                { time: '21' },
                { time: '22' },
                { time: '23' }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.timetable-grid {
    height: 100%;
    display: flex;
    align-items: top;

    .timeline-column {
        height: 100%;
        position: relative;
        display: flex;
        justify-content: space-between;

        &::before {
            content: '';
            height: 100%;
            width: 100%;
            background: #F6F7F9;
            flex-grow: 1;
            z-index: -1;
        }

        &::after {
            content: '';
            height: 100%;
            width: 100%;
            background: #F6F7F9;
            flex-grow: 1;
            z-index: -1;
        }
    }
}

.timetable-grid-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    top: 0;
    left: 0;
    pointer-events: none;

    .timetable-grid-overlay_left-item {
        width: 245px;
    }

    .timetable-grid-overlay_right-item {
        flex-grow: 1;
    }
}

.timline {
    display: flex;
    align-items: center;
    height: 46px;
}

.timeline-mark {
    font-family: HelveticaNeue-Bold;
    font-size: 11px;
    color: #252525;
    letter-spacing: 0.4px;
    line-height: 13px;
}

.timeline-column {
    flex-grow: 1;
    position: relative;
    text-align: center;
}

.timetable-grid-line {
    position: absolute;
    background: rgba(19,100,205,0.10);
    width: 1px;
    height: 100%;
    right: 50%;
}
</style>
