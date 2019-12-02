<template>
    <div>
        <canvas id="can" width="500" height="500" style="margin: 10px;color:'#fff';">您不支持</canvas>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                arr:new Array(),
                length:0,
                isStop:false,
                ctx:""
            }
        },
        mounted() {

        },
        methods:{
            draw: function (){
                let can=document.getElementById("can");
                this.ctx=can.getContext("2d");
                let width=window.getComputedStyle(can).width;
                let height=window.getComputedStyle(can).height;
                width=width.substring(0,width.length-2);
                height=height.substring(0,height.length-2);
                this.ctx.strokeStyle = "#b3fff6";
                this.ctx.fillStyle="#69eada";
                for(let i=0;i<20;i++){
                    let x=this.getRandomNub(width);
                    let y=this.getRandomNub(height);
                    let color=this.getRandomColor();
                    //ctx.fillStyle=color;
                    this.ctx.fillRect(x,y,20,20);
                    let newPoint=this.getRandomPoint(x,y,width,height);
                    this.arr[length]={x:x,y:y,tox:newPoint.x,toy:newPoint.y,color:color};
                    length++;
                }

                let interval=setInterval(function(){
                    if(this.isStop){
                        window.clearTimeout(interval);
                    }else{
                        this.ctx.clearRect(0,0,width,height);
                        for(let i=0;i<length;i++){
                            let point=this.arr[i];

                            if(point.x==point.tox){
                                let newPoint=this.getRandomPoint(point.x,point.y,width,height);
                                point.tox=newPoint.x;
                                point.toy=newPoint.y;
                            }
                            this.movePoint(point,this.ctx);
                        }
                        this.linkPoint(this.ctx);
                    }

                },100);
            },
            linkPoint:function () {
                for(let i=0;i<length;i++){
                    let iP=this.arr[i];
                    for(let j=0;j<length;j++){
                        let jP=arr[j];
                        if(this.getDistance(iP.x,iP.y,jP.x,jP.y)<150){
                            this.ctx.beginPath();
                            this.ctx.moveTo(iP.x,iP.y);
                            this.ctx.lineTo(jP.x,jP.y);
                            this.ctx.stroke();
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
