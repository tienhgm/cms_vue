<template>
  <LayoutLogin>
    <div class="fixed login">
      <div class="flex justify-center mb-4 text-3xl font-semibold">Tuong Van System</div>
      <div class="flex flex-col">
        <label for="username" class="mb-1 font-semibold">Username</label>
        <el-input v-model="username" placeholder="typing username..." id="username" />
      </div>
      <div class="flex flex-col mt-3">
        <label for="password" class="mb-1 font-semibold">Password</label>
        <el-input
          type="password"
          v-model="password"
          placeholder="typing password..."
          id="password"
        />
      </div>
      <div class="w-full mt-6 rounded-md login__button" @click="onSubmitLogin()">login</div>
    </div>
  </LayoutLogin>
</template>
<script>
import { indexStore } from '@/stores/index'
import LayoutLogin from '../layout/login.vue'
import { sendPost } from '../plugins/axios.ts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'LoginPage',
  components: {
    LayoutLogin
  },
  setup() {
    const router = useRouter()
    const store = indexStore()
    let username = ref('')
    let password = ref('')
    const onSubmitLogin = async () => {
      if (!username.value || !password.value) return
      // CALL API LOGIN Ở ĐÂY
      // await sendPost('url',params);
      store.setLogin(true)
      router.push('/')
    }
    return {
      username,
      password,
      onSubmitLogin
    }
  }
}
</script>
<style lang="scss">
.login {
  padding: 32px;
  background-color: #fff;
  width: 400px;
  opacity: 1;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &__button {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #5d87ff;
    text-align: center;
    cursor: pointer;
    color: #fff;
  }
}
</style>
