<template>
  <div class="layout" >
     
     <Layout :style="{height:mapHeight}">
          <Header class="header_bg"><main-menu></main-menu></Header>
         
        <Content style="background:#fff;">
             <Form :model="formLeft" label-position="left" :label-width="70" style="margin-top:30px;">
                <FormItem label="债券代码" style="width:200px;display:inline-block;">
                    <Input v-model="formLeft.input1" />
                </FormItem>
                <FormItem label="债券简称"  style="width:200px;display:inline-block;">
                    <Input v-model="formLeft.input2" />
                </FormItem>
                <FormItem label="发行企业"  style="width:200px;display:inline-block;">
                    <Input v-model="formLeft.input3" />
                </FormItem>
                <FormItem label="债券名称"  style="width:200px;display:inline-block;">
                    <Input v-model="formLeft.input4" />
                </FormItem>
                <FormItem style="display:inline-block;">
                    <Button icon="ios-search" type="info">查询</Button>
                </FormItem>
            </Form>
             <div style="margin:10px auto;">
                <Button icon="ios-eye" type="info">查看</Button>
                <Button icon="md-notifications" type="info" @click="modal1 = true">设置提醒</Button>
                <Modal
                    v-model="modal1"
                    title="设置提醒"
                    @on-ok="ok"
                    @on-cancel="cancel">
                    
                    <Row >
                        <Col span='4'>提前天数</Col>
                        <Col span='8'><Input style="width: auto" /></Col>
　　　　　　　　　　　</Row>
                     <Row class="mt">
                         <Col span='4'>提醒时间</Col>
                        <Col span='8'><Input style="width: auto" /></Col>
                     </Row>
                     <Row class="mt">
                        <Col span='4'>重复设置</Col>
                        <Col span='8'><Input style="width: auto" /></Col>
                     </Row>
                     <Row class="mt">
                        <Col span='4'>是否工作日</Col>
                        <Col span='8'>
                            <RadioGroup v-model="disabledGroup">
                                <Radio label="是"></Radio>
                                <Radio label="否"></Radio>
                            </RadioGroup>
                        </Col>
                     </Row>
                     <Row class="mt">
                        <Col span='4'>提醒方式</Col>
                        <Col span='8'><Input style="width: auto" /></Col>
                     </Row>
                    
                </Modal>
            </div>
        
            <Table border ref="selection" :columns="columns4" :data="data1" :width='1200' style="margin:0 auto;"></Table>
            
            <div style="margin-top:50px;">
                <Button type='info'>一键添加到我的债券</Button>
            </div>
        </Content>
        <Footer>@copyright</Footer>
     </Layout>
      
    </div>
</template>

<script>
import mainMenu from '../../components/mainMenu/mainMenu'
export default {
    name:'mybonds',
    components:{
        mainMenu,
    },
    data () {
        return {
        theme1: 'light',
        modal1: false,
        formLeft: {
                input1: '',
                input2: '',
                input3: '',
                input4:''
            },
        columns4: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '债券代码',
                    key: 'bondCode'
                },
                {
                    title: '债券名称',
                    key: 'bondName'
                },
                {
                    title: '发行企业',
                    key: 'issuerShortname'
                },
                {
                    title: '发行总额',
                    key: 'accIssueAmount'
                },
                {
                    title: '流通场所',
                    key: 'circulationSite'
                },
                {
                    title: '操作',
                    key: 'opterator',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, '查看'),
                            
                        ]);
                    }
                }
            ],
            data1: [
                {
                    bondCode: '',
                    bondName: '',
                    issuerShortname: '',
                    accIssueAmount: '',
                    circulationSite:'',
                    
                },
                {
                    bondCode: '',
                    bondName: '',
                    issuer: '',
                    accIssueAmount: '',
                    circulationSite:'',
                    
                },
                
            ]
        }
    },
    computed: {
        mapHeight() {
            return document.documentElement.clientHeight + "px";
        },
    },
    methods: {
        handleSelectAll (status) {
            this.$refs.selection.selectAll(status);
        },
        show(index) {
            this.$router.push({
                    name:'custom',
            });
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header_bg{
        background:#fff;
    }
    .mt{
        margin-top:10px;
    }
</style>
