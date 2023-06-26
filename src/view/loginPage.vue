<template>
  <MaterialInput
    v-model:value="email"
    input-key="email"
    label="邮箱"
  ></MaterialInput>
  <MaterialInput
    class="password"
    v-model:value="password"
    input-key="password"
    label="密码"
  ></MaterialInput>
  <el-button
    type="primary"
    @click="submit"
    >登录</el-button
  >
</template>

<style scoped>
.password {
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>

<script lang="ts" setup name="">
import { ref } from 'vue';
import MaterialInput from '../components/MaterialInput.vue'
import { login } from '../api/index'
import { useUserStore } from '../store/user';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');

const userStore = useUserStore()

const router = useRouter()

async function submit() {
  const res = await login(email.value, password.value)
  if (res.jwt) {
    userStore.token = res.jwt
    userStore.userInfo = res.user
    router.push('/')
  }
}
</script>
