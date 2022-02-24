<!--  -->
<template>
  <body id="poster">
  <el-form class="login-container" label-position="left" v-model="loginForm"
           label-width="0px">
    <h3 class="login_title">饱格后台管理系统系统登录</h3>
    <el-form-item prop="u_id">
      <el-input type="text" v-model="loginForm.u_id"
                auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="u_password">
      <el-input type="password" v-model="loginForm.u_password"
                auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none"
                 v-on:click="login">登录</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from ‘《组件路径》‘;
// eslint-disable-next-line no-unused-vars
import {login} from "@/request/api";
import {saveToken} from "@/util/tokenUtil";
import {ElMessage} from "element-plus";
export default {
  name: "login",
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      loginForm: {
        u_id: '',
        u_password: ''
      },
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    login(){
      // this.$router.push('/manage')
      login(this.loginForm.u_id,this.loginForm.u_password)
        .then((data)=>{
          saveToken(data.data.token)
          localStorage.setItem('userId',data.data.userId)
          localStorage.setItem('username',this.loginForm.u_id)
          this.$router.push('/manage')
        })
        .catch((data)=>{
          ElMessage.error('登录失败,请检查账号或密码是否正确')
          console.log('登录失败',data)
        })
    },

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
/*@import "~@/assets/css/style.css";*/
#poster {
  background: url("~@/assets/img/background.jpg") no-repeat center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body{
  margin: 0px;
}
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 230px auto 90px;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

</style>

