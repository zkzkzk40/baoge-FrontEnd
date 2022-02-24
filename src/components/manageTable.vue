<!--  -->
<template>
  <el-table :data="tableData" border style="width: 100%" max-height="500px">
    <el-table-column label="外卖柜名称" width="180" >
      <template #default>
        {{buildName}}
      </template>
    </el-table-column>
    <el-table-column prop="order_doorNum" label="柜号" width="50" />
    <el-table-column prop="order_number" label="订单编号" width="400"/>
    <el-table-column prop="order_createTime" label="订单建立时间" width="180" />
    <el-table-column  label="操作" >
      <template #default>
        <el-button type="success" size="small"   @click="openOutDoor">
          打开内侧柜门
        </el-button>
        <el-button type="success" size="small"   @click="openInnerDoor">
          打开外侧柜门
        </el-button>
        <el-button v-if="buildName!=='空柜子'" type="info" size="small"   @click="sendSMS">
          发送短信
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from ‘《组件路径》‘;
import { ElMessage } from 'element-plus'
export default {
  name: "manageTable",
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props:{
    tableData:Array,
    buildName:String
  },
  data() {
    // 这里存放数据
    return {
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    sendSMS(){
      ElMessage.success('短信发送成功')
    },
    openInnerDoor(){
      ElMessage.success('打开内侧门成功')
    },
    openOutDoor(){
      ElMessage.success('打开外侧门成功')
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

</style>

