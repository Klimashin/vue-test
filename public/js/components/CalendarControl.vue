<template>
<div class="calendar-panel">
    <button class="button-round control-left"></button>
    <span class="current-date">14 Дек &bull; Сегодня</span>
    <button class="button-round control-right"></button>
</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "./../../scss/global_classes.scss";

.calendar-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.current-date {
    font-family: HelveticaNeue-Medium;
    font-size: 15px;
    color: #000000;
    letter-spacing: 0;
    line-height: 18px;
    margin-left: 13px;
    margin-right: 12px;
}

.control-left {
    background-image: url('/imgs/arrow2.svg');
    background-position: 40% 50%;
    background-repeat:no-repeat;
    background-color: #E9ECEF;
}

.control-right {
    background-image: url('/imgs/arrow.svg');
    background-position: 60% 50%;
    background-repeat:no-repeat;
    background-color: #E9ECEF;
}
</style>
