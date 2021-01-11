<template>
  <div class="welcome animated slideInUp">

    <ul class="welcome-menu">
      <li v-for="(item,index) in menuList" :key="index" @click="goPlate(item)">
        {{item.alias}}
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
          name:"test",
          path:"/test",
          alias:"测试"
        },
      ]
    }
  },
  components:{

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
.welcome-menu{
  position: relative;
}
.welcome-menu li {
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin:10px;
  float: left;
  width: 100px;
  height: 120px;
}
</style>

