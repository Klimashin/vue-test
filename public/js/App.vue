<template>
    <div id="app" class="app-content">
        <router-view></router-view>
    </div>
</template>

<script>
import 'normalize.css';

export default {
}
</script>

<style lang="scss">
@font-face {
    font-family: 'HelveticaNeue-Medium';
    src: url('/fonts/HelveticaNeueCyr-Medium.ttf') format('ttf'), url('/fonts/HelveticaNeueCyr-Medium.woff') format('woff');
}

@font-face {
    font-family: 'HelveticaNeue-Bold';
    src: url('/fonts/HelveticaNeueCyr-Bold.ttf') format('ttf'), url('/fonts/HelveticaNeueCyr-Bold.woff') format('woff');
}

@font-face {
    font-family: 'HelveticaNeue';
    src: url('/fonts/HelveticaNeueCyr-Roman.woff') format('woff');
}

.app-content {
    max-width: 1280px;
    min-width: 500px;
    margin: auto;
}
</style>
