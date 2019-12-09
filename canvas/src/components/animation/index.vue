<template>
    <div>
        <canvas ref="animateCanvas" width="512" height="512"></canvas>
    </div>
</template>

<script>
    export default {
        name: "animation",
        data(){
            return{
                count:0,
                canvas:"",
                context:"",
            }
        },
        mounted() {
            this.init()
            this.animations()
        },
        methods:{
            animations:function(){
                this.count ++
                //console.log(this.count)
                requestAnimationFrame(this.animations)
                this.draw()
            },
            requestAnimFrame:function () {

            },
            cancelAnimationFrame:function () {

            },
            init:function(){
                this.canvas = this.$refs.animateCanvas
                this.context = this.canvas.getContext( '2d' );
            },
            draw:function () {
                let time = new Date().getTime() * 0.002;
                let x = Math.sin( time ) * 192 + 256;
                let y = Math.cos( time * 0.9 ) * 192 + 256;
                console.log(x + "," + y )
                this.context.fillStyle =  'rgb(200,200,20)' ;
                this.context.beginPath();
                this.context.arc( x, y, 5, 0, Math.PI * 2, true );
                this.context.closePath();
                this.context.fill();
            }
        }
    }
</script>

<style scoped>

</style>
