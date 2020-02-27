<template>
    <div class="wrap">
        <div :class="{rotateX:rotateX}" @mouseenter="mouseEnterAction1" @mouseleave="mouseleaveAction1">
            rotateX rotateX rotateX rotateX rotateX rotateX rotateX rotateX rotateX rotateX rotateX rotateX rotateX
            rotateX rotateX rotateX rotateX
        </div>
        <div :class="{rotateY:rotateY}" @mouseenter="mouseEnterAction3" @mouseleave="mouseleaveAction3">
            rotateY
        </div>
        <div :class="{translate:translate}" @mouseenter="mouseEnterAction2" @mouseleave="mouseleaveAction2">
            translate3d translate3d translate3d translate3d translate3d translate3d translate3d translate3d translate3d
            translate3d translate3d translate3d translate3d translate3d translate3d translate3d
        </div>
        <div :class="{translateX:translateX}" @mouseenter="mouseEnterAction4" @mouseleave="mouseleaveAction4">
            translateX
        </div>

        <div :class="{scaleX:scaleX}" @mouseenter="mouseEnterAction5" @mouseleave="mouseleaveAction5">
            scaleX
        </div>

    </div>
</template>

<script>
    export default {
        name: "threed",
        data() {
            return {
                rotateX: false,
                rotateY:false,
                translate: false,
                translateX:false,
                scaleX:false
            }
        },
        methods: {
            mouseEnterAction1() {
                this.rotateX = true
            },
            mouseleaveAction1() {
                this.rotateX = false
            },
            mouseEnterAction3() {
                this.rotateY = true
            },
            mouseleaveAction3() {
                this.rotateY = false
            },
            mouseEnterAction2() {
                this.translate = true
            },
            mouseleaveAction2() {
                this.translate = false
            },
            mouseEnterAction4() {
                this.translateX = true
            },
            mouseleaveAction4() {
                this.translateX = false
            },
            mouseEnterAction5() {
                this.scaleX = true
            },
            mouseleaveAction5() {
                this.scaleX = false
            },

        }
    }
</script>

<style scoped>
    .wrap div {
        width: 200px;
        height: 100px;
        border: 1px solid #f90;
        margin: 50px;
        overflow: hidden;
        text-overflow: clip;
        background-image: linear-gradient(to right bottom, rgba(255, 0, 255, .3) 20%, deepskyblue);
    }

    .wrap .rotateX {
        transform: rotateX(60deg);
    }

    .wrap .rotateY{
        transform: rotateY(60deg);
    }

    .wrap .translate{
        transform: translate3d(100px, 100px,0px);
    }
    .wrap .translateX{
        transform: translateX(100px);
    }
    .wrap .scaleX{
        transform: scaleX(3);
    }
</style>