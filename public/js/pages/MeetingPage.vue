<template>
    <div>
        <Header/>
        <div class="content-wrapper">
            <div class="content-header">
                <h1>{{ meeting ? 'Редактирование встречи' : 'Новая встреча' }}</h1>
                <router-link to="/">
                    <button class="button-round button-close"></button>
                </router-link>
            </div>
            <MeetingForm class="meeting-body"/>
            <div class="meeting-footer">
                <button class="button-rectangle button-grey">Отмена</button>
                <button class="button-rectangle button-blue">Создать встречу</button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './../components/Header';
import MeetingForm from './../components/MeetingForm';

export default {
    components: {
        Header, MeetingForm
    },
    data: function() {
        return {
            meeting: false
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./../../scss/global_classes.scss";

.content-wrapper {
    padding: 30px 180px 0;
}

.content-header {
    display: flex;
    justify-content: space-between;
}

.meeting-body {
    height: 517px;
}

.meeting-footer {
    display: flex;
    justify-content: center;
    align-items: center;

    >* {
        margin-right: 16px;
    }
}

h1 {
    font-family: HelveticaNeue-Bold;
    font-size: 20px;
    color: #000000;
    letter-spacing: 0;
    line-height: 25px;
    margin: 0;
}

.button-close {
    background-repeat:no-repeat;
    background-color: #E9ECEF;
    background-image: url('/imgs/close.svg');
    background-position: 50% 50%;
}
</style>
