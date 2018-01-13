<template>
<div class="header">
    <router-link to="/">
        <div class="logo"></div>
    </router-link>
    <router-link v-if="showNewMeetingButton" to="/meeting">
        <button class="button-rectangle button-blue">Создать встречу</button>
    </router-link>
</div>
</template>

<script>
export default {
    props: ['showNewMeetingButton']
}
</script>

<style scoped lang="scss">
@import './../../scss/variables.scss';
@import './../../scss/global_classes.scss';

.header {
    padding: $contentPadding;
    background: #FFFFFF;
    box-shadow: 0 1px 0 0 #E9ECEF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 71px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;

    button {
        float: right;
    }
}

.logo {
    background: url('/imgs/logo.svg');
    height: 25px;
    width: 175px;
    float: left;
    cursor: pointer;
}
</style>
