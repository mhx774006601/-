<!-- 详情 -->
import func from './vue-temp/vue-editor-bridge';
<template>
   <Table border :columns="columns1" :tableData="{tableData}" :show-header='false' :highlight-row = 'true'></Table>
</template>
<script>
import {baseUrl} from '../../components/config/baseUrl'
  export default{
      name:'detail',
      data(){
          return{
              columns1: [
                {
                    title: 'Name',
                    key: 'one',
                    className:'col_bg'
                },
                {
                    title: '内容1',
                    key: 'two'
                },
                {
                    title: '三列',
                    key: 'three',
                    className:'col_bg'
                },
                {
                    title:'四列',
                    key:'four'
                }
            ],
            limit:1,
            start:1,
            tableData:[
                {
                    one: '债券名称',
                    bondName: '',
                    three: '基本利差(%)',
                    interestRateSpreads: ''
                },
                {
                    one2: '债券简称',
                    bondShortname: '',
                    base: '基础利率(%)',
                    baseInterestRate: ''
                },
                {
                    one3: '债券代码',
                    bondCode: '',
                    three: '首次划款日',
                    firstGetAmountDate: ''
                },
                {
                   one4: '发行日期',
                    two: '2014/12/3',
                    three: '起息日',
                    four: '2014/12/3'
                },
                {
                   one5: '债券期限(年/月/日)',
                    two: '7年',
                    three: '到期日',
                    four: '2021/12/3'
                },
                {
                   one6: '计划发行总额(亿元)',
                    two: '13',
                    three: '流通标志',
                    four: '已流通'
                },
                {
                   one7: '实际发行总额(亿元)',
                    two: '13',
                    three: '上市流通日',
                    four: '2014/12/12'
                },
                {
                   one8: '发行人简称',
                    two: '其它',
                    three: '发行手续费率(%)',
                    four: '0'
                },
                {
                   one9: '债券品种',
                    two: '地方企业债',
                    three: '流通场所',
                    four: '银行间债券市场 上交所'
                },
                {
                   one10: '选择权',
                    two: '',
                    three: '首次发行范围',
                    four: '银行间、交易所'
                },
                {
                   one11: '本息状态',
                    two: '',
                    three: '首次发行价格',
                    four: '100'
                },
                {
                   one12: '付息频率(月)',
                    two: '12',
                    three: '计息方式',
                    four: '附息式固定利率'
                },
                {
                   one13: '票面利率(%)',
                    two: '6',
                    three13: '兑付手续费率(%)',
                    four: '0'
                },
                {
                   one14: '债券评级',
                    two: 'AA',
                    three14: '债券评级机构',
                    four: '鹏元资信评估有限公司'
                },
                 {
                   one15: '主体评级',
                    two: '',
                    three15: '主体评级机构',
                    four: ''
                },
                {
                   one16: '备注：',
                    two: '',
                    three16: '剩余本金值：',
                    four: '80'
                },
            ]
          }
      },
      methods:{
          detail(){
              let vm=this;
              vm.$http.api.get(baseUrl+'/bond/list?start='+vm.start+'&limit='+vm.limit+'&bondCode='+vm.data1.bondCode+'&bondShortname='+'sddd'+'&bondName='+'sdfsdf'+'&issuer='+sdfds).then(function(res){

              })
          }
      }
  }
</script>