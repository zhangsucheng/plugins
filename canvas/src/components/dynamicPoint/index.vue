<template>
    <div>
        <canvas id="can" :width="width" :height="height" style="margin: 10px;color:'#fff';">您不支持</canvas>
    </div>
</template>

<script>
    export default {
        name: "index",
        props:["width","height"],
        data(){
            return{
                arr:new Array(),
                length:0,
                isStop:false,
                ctx:""
            }
        },
        mounted() {
            this.draw()
        },
        methods:{
            draw: function (){
                let _this = this
                let can=document.getElementById("can");
                this.ctx=can.getContext("2d");
                let width=window.getComputedStyle(can).width;
                let height=window.getComputedStyle(can).height;
                width=width.substring(0,width.length-2);
                height=height.substring(0,height.length-2);
                this.ctx.strokeStyle = "#b3fff6";
                this.ctx.fillStyle="#69eada";
                for(let i=0;i<100;i++){
                    let x=this.getRandomNub(width);
                    let y=this.getRandomNub(height);
                    let color=this.getRandomColor();
                    this.ctx.fillRect(x,y,20,20);
                    let newPoint=this.getRandomPoint(x,y,width,height);
                    this.arr[this.length]={x:x,y:y,tox:newPoint.x,toy:newPoint.y,color:color};
                    this.length++;
                }

                let interval=setInterval(function(){
                    if(this.isStop){
                        window.clearTimeout(interval);
                    }else{
                        _this.ctx.clearRect(0,0,width,height);
                        for(let i=0;i<_this.length;i++){
                            let point=_this.arr[i];

                            if(point.x==point.tox){
                                let newPoint=_this.getRandomPoint(point.x,point.y,width,height);
                                point.tox=newPoint.x;
                                point.toy=newPoint.y;
                            }
                            _this.movePoint(point);
                        }
                        _this.linkPoint();
                    }

                },100);
            },
            linkPoint:function () {
                for(let i=0;i<this.length;i++){
                    let iP = this.arr[i];
                    for(let j=0;j<this.length;j++){
                        let jP=this.arr[j];
                        if(this.getDistance(iP.x,iP.y,jP.x,jP.y)<150){
                            this.ctx.beginPath();
                            this.ctx.moveTo(iP.x,iP.y);
                            this.ctx.lineTo(jP.x,jP.y);
                            this.ctx.stroke();
                        }
                    }
                }
            },
            movePoint:function (point){
                let _this = this;
                let step=(Math.sqrt((point.toy-point.y)*(point.toy-point.y)+(point.tox-point.x)*(point.tox-point.x)))/10;
                step=1;
                let k=(point.toy-point.y)/(point.tox-point.x);
                let b=point.y-k*point.x;
                let newX=0;
                let newY=0;
                if(point.x<point.tox){
                    newX=point.x+step;
                }else{
                    newX=point.x-step;
                }
                if(newX==point.x){
                    point.x=point.tox;
                    point.y=point.toy;
                    _this.ctx.fillStyle=point.color;
                    _this.ctx.fillRect(point.tox,point.toy,10,10);
                    return;
                }
                newY=k*newX+b;
                point.x=newX;
                point.y=newY;
                _this.ctx.fillRect(newX,newY,10,10);
             },
            getDistance:function (x1,y1,x2,y2){
                return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
            },
            getRandomNub(max){
                let r=Math.random();
                return Math.floor(max*r);
            },
            getRandomColor:function () {
                    return "rgb("+this.getRandomNub(255)+","+this.getRandomNub(255)+","+this.getRandomNub(255)+")";
            },
            getRandomPoint:function (x,y,wid,hei){
                let newX=0,newY=0;
                // while(true){
                    newX=this.getRandomNub(wid);
                    newY=this.getRandomNub(hei);
                    // if(Math.abs(newX-x)<50 || Math.abs(newX-y)<50){
                    //
                    // }else{
                        // break;
                    // }
                // }
                return {x:newX,y:newY};
            }
        }
    }
</script>

<style scoped>

</style>
