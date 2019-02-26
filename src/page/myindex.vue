<template>
    <div class="layout">
         
        <Layout :style="{padding: '0 24px 24px',border:'2px solid #000;'}">
             <Content>
                <router-view></router-view>
            </Content>
        </Layout>
      
    </div>
   
</template>
<script>

 export default {
     name:'myindex',
     
     data(){
         return{
             data:[]
         }
     },
    
 }
</script>