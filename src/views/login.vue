<!--  -->
<template>
    <h3>饱格后台管理界面</h3>
    <input type="text" placeholder="请输入用户名" v-model="form.username" />
    <input type="password" placeholder="请输入密码" v-model="form.password" />
    <button v-on:click="onSubmit">登录</button>
<!--    <el-form ref="formRef" :model="form" label-width="120px">-->
<!--      <el-form-item label="Activity name" label-position="left">-->
<!--        <el-input v-model="form.name"></el-input>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from ‘《组件路径》‘;
// import {useRouter} from 'vue-router'
export default {
  name: "login",
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    onSubmit :function () {
      // let router = useRouter();
      // router.push('/manage')
      this.$router.push('/manage')
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
.login-wrap {
  text-align: center;
}
h3 {
  text-align: center;
}
span {
  text-align: center;
}
input {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
}

p {
  color: red;
  text-align: center;
}

button {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border: none;
  background-color: #41b883;
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
}

span {
  cursor: pointer;
}

span:hover {
  color: #41b883;
}
</style>

