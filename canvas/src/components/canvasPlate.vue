<template>
    <div>
        <div class="animated " :class="{bounce:active}">{{etc}}</div>
        <div>{{appName}}</div>
        <canvas ref="canvasApp" :width="cWidth" :height="cHeight"></canvas>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        name: "canvasPlate",
        data(){
            return{
                numArr:[2,3,4,0,5,7],
                cWidth:500,
                cHeight:500,
                ctx:null,
                bgColor:"#1a211b",
                etc:1,
                active:false,
                mainTrunk: "",
            }
        },
        computed:{
            ...mapState({
                appName:state => state.app.appName
            })
        },
        mounted() {
            console.log(123)
            console.log(this.$store)
            console.log(this.$store.dispatch("dispatch"))
            this.init()
            let self = this

            setInterval (function () {
                self.etc +=1
                self.active = !self.active
            },5000)
            this.dispatchMain()
        },
        methods:{
            ...mapActions(["dispatchMain"]),
            init(){
                let c = this.$refs.canvasApp
                this.ctx = c.getContext("2d")
                // ctx.clearRect(0,0,this.cWidth,this.cHeight)
                // ctx.fillStyle = "#FF0000"
                // // ctx.fillRect(0,0,200,160)
                // ctx.strokeRect(0,0,this.cWidth,this.cHeight)
                // ctx.strokeColor="#f90"
                // ctx.beginPath()
                // ctx.moveTo(0,0);
                // ctx.lineTo(this.cWidth,this.cHeight);
                // ctx.lineWidth = 10
                // ctx.closePath();
                // ctx.stroke();
                // ctx.font = "30px 黑体"
                // ctx.fillText("苏子",100,30)

                this.strokeReck()
                // this.fillRect()
                // this.rect();
                 this.linearGradient()

                this.mainTrunk = this.cWidth > this.cHeight ? this.cHeight : this.cWidth
                this.initDisc(this.mainTrunk * 0.45, this.mainTrunk * 0.45 - 20);

            },

            strokeReck(){
                //画一个无填充的矩形
                this.ctx.clearRect(0,0,this.cWidth,this.cHeight)
                this.ctx.strokeRect(0,0,this.cWidth,this.cHeight)
            },
            fillRect(){
                //画一个带填充的矩形，默认是黑色
                this.ctx.clearRect(10,10,100,50)
                this.ctx.fillStyle = "#caffcf"
                this.ctx.fillRect(10,10,100,50)
            },
            rect(){
                //单纯的画个矩形
                this.ctx.clearRect(10,70,100,50)
                this.ctx.strokeStyle = '#f90'
                this.ctx.strokeWidth = 10
                this.ctx.rect(10,70,100,100)
                this.ctx.stroke()
            },
            linearGradient(){
                let gradient = this.ctx.createLinearGradient(0,0,0,260)
                gradient.addColorStop(0.4,"red")
                gradient.addColorStop(0.8,"black")
                gradient.addColorStop(1,"#f90")
                this.ctx.fillStyle = gradient
                this.ctx.fillRect(10,180,100,50)

            },
            initDisc: function (outRadius, innerRadius) {

                this.ctx.save();
                this.ctx.beginPath();
                let cx = this.cWidth / 2;
                let cy = this.cHeight / 2;
                this.ctx.rect(0, 0, this.cWidth, this.cHeight);
                //this.ctx.fillStyle = this.bgColor;
                this.ctx.strokeStyle = 'green';
                this.ctx.fill();
                this.ctx.beginPath();
                this.ctx.arc(cx, cy, outRadius, 0, 2 * Math.PI);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.arc(cx, cy, innerRadius, 0, 2 * Math.PI);
                this.ctx.stroke();
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.strokeStyle = 'green';
                this.ctx.arc(cx, cy, 20, 0, 2 * Math.PI);
                this.ctx.strokeStyle = 'green';
                this.ctx.lineWidth = 10;
                this.ctx.stroke();
                this.ctx.restore();
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.translate(cx, cy);
                for (var i = 0; i < 24; i++) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(0, 0);
                    this.ctx.lineTo(0, -outRadius);
                    if (i == 0 || i % 3 == 0) {
                        this.ctx.setLineDash([0]);
                    } else {
                        this.ctx.setLineDash([6]);
                    }
                    this.ctx.rotate(Math.PI / 12);
                    this.ctx.stroke();
                }
                this.ctx.restore();
                this.ctx.restore();
            },
        }
    }
</script>

<style scoped>

</style>
