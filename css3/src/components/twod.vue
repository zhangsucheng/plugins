<template>
    <div class="wrap">
        <div :class="{translate:translate}" @mouseenter="mouseEnterAction1" @mouseleave="mouseleaveAction1">
            translate
        </div>
        <div :class="{rotate:rotate}" @mouseenter="mouseEnterAction2" @mouseleave="mouseleaveAction2">
            rotate
        </div>
        <div :class="{scale:scale}" @mouseenter="mouseEnterAction3" @mouseleave="mouseleaveAction3">
            scale
        </div>
        <div :class="{skew:skew}" @mouseenter="mouseEnterAction4" @mouseleave="mouseleaveAction4">
            skew
        </div>
        <div :class="{matrix:matrix}" @mouseenter="mouseEnterAction5" @mouseleave="mouseleaveAction5">
            matrix
        </div>
    </div>
</template>

<script>
    export default {
        name: "transform",
        data() {
            return {
                translate:false,
                rotate:false,
                scale:false,
                skew:false,
                matrix:false
            }
        },
        methods:{
            mouseEnterAction1(){
                this.translate = true
            },
            mouseleaveAction1(){
                this.translate = false
            },
            mouseEnterAction2(){
                this.rotate = true
            },
            mouseleaveAction2(){
                this.rotate = false
            },
            mouseEnterAction3(){
                this.scale = true
            },
            mouseleaveAction3(){
                this.scale = false
            },
            mouseEnterAction4(){
                this.skew = true
            },
            mouseleaveAction4(){
                this.skew = false
            },
            mouseEnterAction5(){
                this.matrix = true
            },
            mouseleaveAction5(){
                this.matrix = false
            }
        }
    }
</script>

<style scoped>
    .wrap div {
        width: 200px;
        height: 200px;
        border: 1px solid #f90;
        margin:50px;
        background-image: linear-gradient(to right bottom, rgba(255, 255, 255, .3) 20%, rgba(0, 0, 0, .2));
    }

    .wrap .translate {
        transform: translate(20px, 30px);
    }
    .wrap .rotate{
        transform: rotate(45deg);
    }
    .wrap .scale{
       transform: scale(0.5,0.5);
    }
    .wrap .skew{
        transform: skew(0deg,45deg);
    }
    .wrap .matrix{
        transform: matrix(0.866,0.5,-0.5,0.866,0,0);
    }
</style>