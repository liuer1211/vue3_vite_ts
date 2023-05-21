<template>
  <div class="login">
    <el-row>
      <el-col :span="24">
        <el-form
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="pass">
            <el-input :prefix-icon="User"
              v-model="loginFrom.username"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="checkPass">
            <el-input
              :prefix-icon="Lock"
              type="password"
              v-model="loginFrom.pwd"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()">提交</el-button>
            <el-button @click="resetForm()">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import {User,Lock} from '@element-plus/icons'
  import {reactive} from 'vue'
  let loginFrom = reactive({username:'',pwd:""});
  let submitForm = ()=>{

  }
  let resetForm = ()=>{

}
</script>

<style scoped lang="scss">
  .login{
    width: 100%;
    height: 100vh;
    background: #000000;
    .demo-ruleForm{
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