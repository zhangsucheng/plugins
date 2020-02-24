<template>
    <div>
        <canvas ref="polygon" width="100" height="100">

        </canvas>
    </div>
</template>

<script>
    export default {
        name: "index",

        data() {
            return {}
        },
        mounted() {
            //this.drawPath(50, 50, 3, 50)
            this.drawLine()
        },
        methods: {
            drawPath(x, y, n, r) {
                let el = this.$refs.polygon;
                let context = el.getContext("2d");
                if (context) {
                    let i, ang;
                    ang = Math.PI * 2 / n; //旋转的角度
                    context.save(); //保存状态
                    context.fillStyle = 'rgba(0,0,0,0)'; //半透明
                    context.strokeStyle = 'hsl(120,50%,50%)'; //填充绿色
                    context.lineWidth = 1; //设置线宽
                    context.translate(x, y); //原点移到x,y处，即要画的多边形中心
                    context.moveTo(0, -r); //据中心r距离处画点
                    context.beginPath();
                    for (i = 0; i < n; i++) {
                        context.rotate(ang) //旋转
                        context.lineTo(0, -r); //据中心r距离处连线
                    }
                    context.closePath();
                    context.stroke();
                    context.fill();
                    context.restore(); //返回原始状态
                } else {
                    return false
                }
            },
            drawLine() {
                let el = this.$refs.polygon;
                let context = el.getContext("2d");
                context.save();
                context.translate(50, 50);
                context.fillStyle = 'rgba(0,0,0,.1)';
                context.strokeStyle = 'hsl(29,82%,41%)';
                context.lineWidth = 1;

                context.moveTo(0, 0);
                context.beginPath();

                context.rotate(Math.PI * 2 / 3)
                context.lineTo(0, 50);
                context.fillRect(0, 0, 30, 30)

                context.rotate(Math.PI * 2 / 3)
                context.fillRect(0, 0, 30, 30)
               // context.lineTo(0, 50);

                context.rotate(Math.PI * 2 / 3)
                context.fillRect(0, 0, 30, 30)
                //context.lineTo(0, 50);

               // context.closePath();
                context.stroke();
                // context.fill();
                //context.restore()

            }
        }
    }
</script>

<style scoped>

</style>