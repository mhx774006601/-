<template>
   <Table border :columns="columns1" :data="data1" :highlight-row = 'true'></Table>
</template>
<script>
  export default{
      name:'fundFlow',
      data(){
          return{
              columns1: [
                {
                    title:'期数',
                    key:'stage',
                },
                {
                    title: '兑付日期',
                    key: 'date'
                },
                {
                    title: '资金类型',
                    key: 'type',
                },
                {
                    title:'金额',
                    key:'money'
                },
                {
                    title:'开始日期',
                    key:'start'
                },
                {
                    title:'结束日期',
                    key:'end'
                },
                {
                    title:'天数',
                    key:'days'
                },
                {
                    title:'剩余本金',
                    key:'surplus'
                },
                {
                    title:'基准利率',
                    key:'rate'
                },
                {
                    title:'当期利率',
                    key:'curr_rate'
                },
                {
                    title:'利差',
                    key:'diff_rate'
                }
            ],
             data1: [
                {
                    stage: '1',
                    date: '',
                    type: '',
                    money: '',
                    start:'',
                    end:'',
                    days:'',
                    surplus:'',
                    rate:'',
                    curr_rate:'',
                    diff_rate:''
                },
                {
                    stage: '2',
                    date: '',
                    type: '',
                    money: '',
                    start:'',
                    end:'',
                    days:'',
                    surplus:'',
                    rate:'',
                    curr_rate:'',
                    diff_rate:''
                },
                {
                    stage: '3',
                    date: '',
                    type: '',
                    money: '',
                    start:'',
                    end:'',
                    days:'',
                    surplus:'',
                    rate:'',
                    curr_rate:'',
                    diff_rate:''
                },
            
            ]
          }
      }
  }
</script>