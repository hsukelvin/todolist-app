<template>
  <router-view :user-info="userInfo" @check-login="checkLogin()" />
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from './connections/firebaseConnection';

export default {
  data() {
    return {
      userInfo: {},
    };
  },
  methods: {
    checkLogin() {
      const auth = getAuth(app);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          // const uid = user.uid;
          this.userInfo = user;
          console.log('登入...');
          this.$router.push(`/home/${this.userInfo.uid}`);
          // ...
        } else {
          // User is signed out
          // ...
          console.log('未登入...');
          this.$router.push('/');
        }
      });
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss">
</style>
