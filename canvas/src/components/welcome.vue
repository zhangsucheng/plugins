<template>
    <div class="welcome">
        <ul class="welcome-menu">
            <li v-for="(item,index) in menuList" :key="index" @click="goPlate(item)">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'welcome',
        data(){
            return{
                menuList:[
                    {
                        name:"animation",
                        alias:"动画"
                    },
                    {
                        name:"dynamicPoint",
                        alias:"粒子"
                    }
                ]
            }
        },
        computed: {

        },
        methods:{
            goPlate(item){
                console.log(item)
                this.$router.push({
                    name:"wrap",
                    query:item
                })
            }
        }
    }
</script>

<style >
    ul li{
        list-style: none;
    }
    .welcome-menu li {
        cursor: pointer;
    }
</style>

