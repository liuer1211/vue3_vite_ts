<template>
  <div class="login">
    <el-row>
      <el-col :span="24">
        <el-form
          class="demo-ruleForm"
          :model="loginFrom"
          :rules="rules"
          ref="loginForms"
        >
          <el-form-item label="用户名" prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginFrom.username"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input
              :prefix-icon="Lock"
              type="password"
              v-model="loginFrom.pwd"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" type="primary" @click="submitForm()"
              >提交</el-button
            >
            <el-button @click="resetForm()">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from "@element-plus/icons";
import { reactive, ref } from "vue";
import useUserStore from "@/store/modules/user";
import { useRouter, useRoute } from "vue-router";
import { ElNotification } from "element-plus";
//引入获取当前时间的函数
import { getTime } from "@/utils/time";
//获取路由器
let $router = useRouter();
//路由对象
let $route = useRoute();
//定义变量控制按钮加载效果
let loading = ref(false);

let userStore = useUserStore();

let loginFrom = reactive({ username: "", pwd: "" });

//获取el-form组件
let loginForms = ref();

let submitForm = async () => {
  //保证全部表单相校验通过再发请求
  await loginForms.value.validate();

  console.log(userStore);
  loading.value = true;

  userStore.userLogin(loginFrom);
  loading.value = false;

  let redirect: any = $route.query.redirect;
  $router.push({ path: redirect || "/" });
  //登录成功提示信息
  ElNotification({
    type: "success",
    message: "欢迎回来",
    title: `HI,${getTime()}好`,
  });
};
let resetForm = () => {};
const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback();
  } else {
    callback(new Error("密码长度至少六位"));
  }
};

const rules = {
  username: [
    {
      required: true,
      min: 6,
      max: 10,
      message: "账号长度至少六位",
      trigger: "change",
    },
  ],
  pwd: [{ required: true, trigger: "change", validator: validatorPassword }],
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100vh;
  background: #000000;
  .demo-ruleForm {
    width: 400px;
    height: 300px;
    background: #6ca7ff;
    border-radius: 4px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 100px;
    transform: translate(-50%);
    margin-left: 50%;
    ::v-deep .el-form-item__label {
      width: 80px;
    }
  }
}
</style>
