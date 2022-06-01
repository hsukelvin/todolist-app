<template>
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex justify-content-center align-items-center vh-100">
        <form @submit.prevent="forgetPassword">
          <h3 class="mb-3">忘記密碼</h3>
          <div class="form-group mb-3">
            <label for="email">
              信箱
              <input
                id="email"
                type="email"
                class="form-control form-control-lg rounded-0"
                v-model="user.email"
              />
            </label>
          </div>
          <div class="d-flex align-items-center">
            <router-link to="/">返回登入</router-link>
            <button type="submit" class="btn btn-dark rounded-0 ms-auto">重新設定密碼</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
      },
    };
  },
};
</script>
