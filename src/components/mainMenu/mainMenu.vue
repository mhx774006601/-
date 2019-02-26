<template>
    <div >
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <div style="width:1200px;margin:0 auto;">
                <MenuItem name='1' class="menuSty">Tool</MenuItem>
                <MenuItem name='2' class="menuSty" to='mybonds'>首页</MenuItem>
                <MenuItem name='3' class="menuSty">工具</MenuItem>
            </div>
            
       </Menu>
      
    </div>
    
</template>
<script>
 export default {
     name:'mainMenu',
     data(){
         return{
             theme1: 'light',
            //  navbar:[
            //      {
            //         id:'0',
            //         name:'Tool',
            //         title:'Treasury Tool'
            //      },
            //      {
            //         id:'1',
            //         name:'index',
            //         title:'首页'
            //      },
            //      {
            //         id:'2',
            //         name:'index',
            //         title:'工具' 
            //      }
            //  ]
         }
     }
 }
</script>
<style>
    .active{
        color:#fff;
        border-bottom:3px solid #fff;
        font-weight: bold;
    }
    .menuSty{
        font-size:20px;width:33%;
    }
</style>