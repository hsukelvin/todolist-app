<template>
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex justify-content-center align-items-center vh-100">
        <div>
          <h3 class="mb-3">登入</h3>
          <div class="form-group mb-3">
            <label for="email">
              郵件地址
              <input
                id="email"
                type="email"
                class="form-control form-control-lg rounded-0"
                placeholder="請輸入郵件地址"
                v-model="user.email"
              />
            </label>
          </div>
          <div class="form-group mb-3">
            <label for="password">
              密碼
              <input
                id="password"
                type="password"
                class="form-control form-control-lg rounded-0"
                placeholder="請輸入密碼"
                v-model="user.password"
              />
            </label>
          </div>
          <div class="d-flex align-items-center">
            <router-link to="/resetpassword">忘記密碼?</router-link>
            <button type="botton" class="btn btn-dark rounded-0 ms-auto" @click="login()">
              登入
            </button>
            <router-link to="/register" class="btn btn-dark rounded-0 ms-3">註冊</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../connections/firebaseConnection';

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          console.log(userCredential.user);
          this.$router.push(`/home/${userCredential.user.uid}`);
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          console.log(error.code);
          console.log(error.message);
          this.$router.push('/');
        });
    },
  },
  created() {
    // 判斷是否登入
    this.$emit('check-login');
  },
  mounted() {
  },
};
</script>
