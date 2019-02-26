<template>
   <div class="layout" >
      <Layout :style="{height:mapHeight}">
          <Header class="header_bg"><main-menu></main-menu></Header>
            <Content style="background:#fff;">
                <div style="width:60%;margin:10px auto;">
                    <Button icon="ios-eye" type="info" @click="detailShow">详情</Button>
                    <Button icon="md-notifications" type="info" @click="flowShow">资金流</Button>
                    <Button icon="ios-eye" type="info" @click="costShow">费用分摊</Button>
                    <Button icon="md-notifications" type="info">会计分录</Button>
                    <detail v-if='show1'></detail>
                    <fund-flow v-if='show2'></fund-flow>
                    <cost v-if='show3'></cost>
                </div>
            </Content>
            <Footer>@copyright</Footer>
      </Layout>
       
   </div>
</template>

<script>
import mainMenu from '../../components/mainMenu/mainMenu'
import detail from './detail'
import fundFlow from './fundFlow'
import cost from './cost'
   export default {
       name:'custom',
       components:{
            mainMenu,
            detail,
            fundFlow,
            cost,
        },
       data(){
           return{
　　　　　　   show1:true,
              show2:false,
              show3:false,
           }
       },
       computed: {
            mapHeight() {
                return document.documentElement.clientHeight + "px";
            },
        },
       methods:{
           detailShow(){
                this.show1 = true;
                this.show2 = false;
                this.show3 = false;
           },
           flowShow(){
                this.show2 = true;
                this.show1 = false;
                this.show3 = false;
           },
           costShow(){
               this.show3 = true;
               this.show1 = false;
               this.show2 = false;
           }
       }
   }
</script>
<style>
   .ivu-table .col_bg{
       background:rgb(241, 240, 240);
   }
   .header_bg{
        background:#fff;
    }
</style>
