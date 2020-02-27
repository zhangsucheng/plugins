<template>
    <div class="wrap">
        <div class="transition-width" :class="{transitionW:transitionW}" @mouseenter="mouseEnterAction1"
             @mouseleave="mouseleaveAction1"></div>
        <div class="transitions">多项变换</div>
        <div class="transition-delay">延迟</div>
    </div>
</template>

<script>
    export default {
        name: "transtion",
        data() {
            return {
                transitionW: false
            }
        },
        methods: {
            mouseEnterAction1() {
                this.transitionW = true
            },
            mouseleaveAction1() {
                this.transitionW = false
            },
        }
    }
</script>

<style scoped>
    .wrap div {
        width: 100px;
        height: 100px;
        border: 1px solid #f90;
        margin: 50px;
        background-image: linear-gradient(to right bottom, rgba(255, 0, 255, .3) 20%, deepskyblue);
    }

    .transition-width {
        transition: width, 3s;
    }

    .wrap .transitionW {
        width: 300px;
    }

    .wrap .transitions {
        transition: width 2s,height 1s linear,transform 2s;
    }

    .wrap .transitions:hover{
        width: 200px;
        height: 300px;
        transform: rotate(360deg) scale(0.5,0.2);
    }
    .wrap  .transition-delay{
        transition: width 2s linear,transform 2s  ;
    }
    .wrap .transition-delay:hover{
        width: 300px;
        transform: rotate(360deg);
    }

</style>