<!--  -->
<template>
  <div class="cabinet" >
    <span v-for="i in 40"
          v-bind:key="i"
          :class="getColor(i)" @click="showDialog(i)">
      <div v-show="this.allData!==null">柜号{{i}}</div>
    </span>
    <el-dialog
        v-model="dialogVisible"
        title="查看柜台信息"
        width="73%"
        :before-close="handleClose"
    >
      <manage-table :buildName="buildName" :tableData="tableData"></manage-table>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="dialogVisible = false"
        >确认</el-button
        >
      </span>
      </template>
    </el-dialog>
  </div>

</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from ‘《组件路径》‘;
import '@/assets/css/cabinetIndex.css'
import { ElMessageBox } from 'element-plus'
import ManageTable from "@/components/manageTable";
export default {
  name: "cabinetShow",
  // import引入的组件需要注入到对象中才能使用
  props:{
    cabinetData:Object
  },
  components: {ManageTable},
  data() {
    // 这里存放数据
    return {
      cabinetColor: [],
      dialogVisible:false,
      buildName: '',
      tableData: [],
      allData:[]
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {
    cabinetData(newValue){
      if(newValue===null){
        return
      }
      this.cabinetColor=new Array(41).fill('empty')
      this.allData=newValue
      var that=this
      newValue.overdueCabinetResult.forEach(function (i){
        that.cabinetColor[i.order_doorNum]='overDue'
      })
      newValue.emptyCabinetResult.forEach(function (i){
        that.cabinetColor[i.order_doorNum]='empty'
      })
      newValue.usedCabinetResult.forEach(function (i){
        that.cabinetColor[i.order_doorNum]='full'
      })
    }
  },
  // 方法集合
  methods: {
    showDialog(index){
      this.dialogVisible=true
      if(this.cabinetColor[index]==='overDue'){
        this.tableData=this.allData.overdueCabinetResult
        this.buildName='超时订单柜子'
      }else if(this.cabinetColor[index]==='empty'){
        this.tableData=this.allData.emptyCabinetResult
        this.buildName='空柜子'
      }else{
        this.tableData=this.allData.usedCabinetResult
        this.buildName='已满柜子'
      }
    },
    getColor(index){
      return this.cabinetColor[index]+' index'+index
    },
    handleClose (done=() => {}) {
      ElMessageBox.confirm('你确定要关闭吗?')
          .then(() => {
            done()
          })
          .catch(() => {
            // catch error
          })
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  beforeCreate() {
  }, // 生命周期 - 创建之前
  beforeMount() {
  }, // 生命周期 - 挂载之前
  beforeUpdate() {
  }, // 生命周期 - 更新之前
  updated() {
  }, // 生命周期 - 更新之后
  beforeUnmount() {
  }, // 生命周期 - 销毁之前
  unmounted() {
  }, // 生命周期 - 销毁完成
  activated() {
  } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
.cabinet{
  background-image: url("~@/assets/img/cabinet.png");
  width: 750px;
  height: 750px;
  display: inline-block;
  position: relative;
}
.empty{
  background-color: white ;
  opacity: 0.5;
  position: absolute;
  color: rgba(0,0,0,0) ;
}
.full{
  background-color: blue ;
  opacity: 0.5;
  position: absolute;
  color: rgba(0,0,0,0) ;
}
.overDue{
  background-color: #ff0000;
  opacity: 0.5;
  position: absolute;
  color: rgba(0,0,0,0) ;
}
.empty:hover{
  cursor:pointer;
  opacity: 1.0;
  color: rgba(0,0,0,1) ;
}
.overDue:hover{
  cursor:pointer;
  opacity: 1.0;
  color: rgba(111, 243, 9,1);
}
.full:hover{
  cursor:pointer;
  opacity: 1.0;
  color: rgba(232, 178, 15,1);
}
</style>

