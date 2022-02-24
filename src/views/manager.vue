<!--  -->
<template>
  <el-container>
    <el-header>
      <el-select v-model="choose.province"
                 @change="changeProvince"
                 class="m-2" placeholder="选择对应省" size="large">
        <el-option
            v-for="item in provinces"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select v-model="choose.city" class="m-2" placeholder="选择对应市" size="large">
        <el-option
            v-for="item in cities"
            :key="item.label"
            :label="item.label"
            :value="item.label"
        >
        </el-option>
      </el-select>
      <el-select v-model="choose.area" class="m-2" placeholder="选择对应区" size="large">
        <el-option
            v-for="item in areas"
            :key="item.label"
            :label="item.label"
            :value="item.label"
        >
        </el-option>
      </el-select>
      <el-select v-model="choose.school" class="m-2" placeholder="选择对应学校" size="large">
        <el-option
            v-for="item in schools"
            :key="item.label"
            :label="item.label"
            :value="item.label"
        >
        </el-option>
      </el-select>
      <el-select v-model="choose.build" class="m-2" placeholder="选择对应楼和外卖柜" size="large">
        <el-option
            v-for="item in builds"
            :key="item.label"
            :label="item.label"
            :value="item.label"
        >
        </el-option>
      </el-select>
      <el-button type="primary" :disabled="buttonDisabled" :onclick="search">{{buttonLabel}}</el-button>
      <el-button type="primary" :disabled="buttonDisabled" :onclick="showDialog">修改密码</el-button>
      <el-dialog
          v-model="dialogVisible"
          title="修改密码"
          width="30%"
          :before-close="handleClose"
      >
        <el-input type="password" v-model="inputPassword" placeholder="输入新密码" />
        <el-input type="password" v-model="reInputPassword" placeholder="再次输入新密码" />
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="changePassword"
            >确认</el-button
            >
          </span>
        </template>
      </el-dialog>
    </el-header>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="16" :offset="4">
          <cabinetShow v-show="cabinetShow" v-bind:cabinet-data="cabinetData" ></cabinetShow>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from ‘《组件路径》‘;
import data from '@/assets/js/manageChooseData'
import manageTable from "@/components/manageTable";
import cabinetShow from "@/components/cabinetShow";
import {findCabinetId,findCabinetSituation,changePassword} from "@/request/api";
import {ElMessage, ElMessageBox} from 'element-plus'
export default {
  name: "manager",
  // import引入的组件需要注入到对象中才能使用
  components: {
    // eslint-disable-next-line vue/no-unused-components
    manageTable,
    cabinetShow
  },
  data() {
    // 这里存放数据
    return {
      provinces:[],
      cities:[],
      areas:[],
      schools: [],
      campus:[],
      builds:[],
      choose:{
        province:'',
        city: '',
        area:'',
        school: '',
        build:'',
      },
      buttonDisabled:false,
      buttonLabel:'请选择搜索条件',
      tableData : [],
      cabinetShow: false,
      cabinetData: [],
      reInputPassword: '',
      inputPassword: '',
      dialogVisible:false,
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {
    'choose.province':{
      handler (val,old) {
        console.log('深度监听province：', val,old);
        var that=this
        data.provinces.forEach(function (i){
            if(i.value===val){
              that.cities=i.data
              return
            }
        })
      },
      // deep: true,
      // immediate: true
    },
    'choose.city':{
      handler (val,old){
        console.log('深度监听city：', val,old);
        var that=this
        this.cities.forEach(function (i){
          if(i.value===val){
            that.areas=i.data
            return
          }
        })
      },
    },
    'choose.area': {
      handler(val, old) {
        console.log('深度监听area：', val, old);
        var that = this
        this.areas.forEach(function (i) {
          if (i.value === val) {
            that.schools = i.data
            return
          }
        })
      }
    },
    'choose.school': {
      handler(val, old) {
        console.log('深度监听school：', val, old);
        var that = this
        this.schools.forEach(function (i) {
          if (i.value === val) {
            that.builds = i.data
            return
          }
        })
      }
    },
    'choose.build':{
      handler(){
        this.buttonDisabled=false
        this.buttonLabel='请点击以查找'
      }
    }
  },
  // 方法集合
  methods: {
    changeProvince:function (province){
      console.log('province data',province)
      this.choose.province=province
      console.log('choose data',this.choose)
    },
    search(){

      findCabinetId(this.choose).then((data)=>{
        console.log('查找成功',data)
        findCabinetSituation(data.data).then((res)=>{
          console.log('查找具体信息成功',res)
          console.log('this.cabinetData old',this.cabinetData)
          this.cabinetShow=true
          this.cabinetData=res.data
          console.log('this.cabinetData new',this.cabinetData)
          // this.tableData=data.res.overdueCabinetResult
        }).catch((res)=>{
          console.log('查找具体信息失败',res)
        })
      }).catch((data)=>{
        console.log('查找失败',data)
      })
    },
    showDialog(){
      this.dialogVisible=true
    },
    changePassword(){
      if(this.inputPassword!==this.reInputPassword){
        ElMessage.error('两次密码不一致')
      }else{
        // eslint-disable-next-line no-unused-vars
        changePassword(this.inputPassword).then((res)=>{
          console.log('密码修改成功')
          localStorage.removeItem('u_id')
          localStorage.removeItem('username')
          this.$router.push('/')
        }).catch((res)=>{
          console.log(res)
          ElMessage.error('修改密码接口出错')
        })
      }
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
    this.provinces=data.provinces
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

