<template>
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Please sign in</h2>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <Loader v-if="showLoader" />
    </form>
  </div>
</template>

<script>
import Loader from './Loader'

export default {
  name: 'Login',
  components: {
    Loader
  },
  data () {
    return {
      email: '',
      password: '',
      error: false,
      showLoader: false
    }
  },
  created () {
    this.checkCurrentLogin()
  },
  updated () {
    this.checkCurrentLogin()
  },
  methods: {
    checkCurrentLogin () {
      if (localStorage.token) {
        this.$router.replace(this.$route.query.redirect || '/home')
      }
    },
    login () {
      this.showLoader = true
      this.$http.post('http://localhost:3000/oauth/token', { email: this.email, password: this.password, grant_type: 'password' })
        .then(request => this.loginSuccessful(request))
        .catch(() => this.loginFailed())
    },

    loginSuccessful (req) {
      this.showLoader = false
      if (!req.data.access_token) {
        this.loginFailed()
        return
      }

      localStorage.token = req.data.access_token
      this.error = false
      this.$router.replace(this.$route.query.redirect || '/home')
      location.reload()
    },

    loginFailed () {
      this.showLoader = false
      this.error = 'Login failed!'
      delete localStorage.token
    }
  }
}
</script>

<style lang="css">

.login-wrapper {
  background: #f3f3f3;
  width: 70%;
  margin: 12% auto;
}

.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}

.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}

.form-signin .checkbox {
  font-weight: normal;
}

.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
