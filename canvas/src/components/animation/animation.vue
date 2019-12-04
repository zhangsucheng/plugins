<template>
    <div></div>
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
                console.log(this.count)
                requestAnimationFrame(this.animations)
                this.draw()
            },
            requestAnimFrame:function () {

            },
            cancelAnimationFrame:function () {

            },
            init:function(){
                this.canvas = document.createElement( 'canvas' );
                this.canvas.width = 512;
                this.canvas.height = 512;

                this.context = this.canvas.getContext( '2d' );

                document.body.appendChild( this.canvas );
            },
            draw:function () {
                let time = new Date().getTime() * 0.002;
                let x = Math.sin( time ) * 192 + 256;
                let y = Math.cos( time * 0.9 ) * 192 + 256;
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
