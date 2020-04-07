<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="12" md="4" offset-md="4">
          <h1>Set new password</h1>
          <br />
          <v-text-field
            v-model="form.password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show ? 'text' : 'password'"
            name="input-10-1"
            placeholder="New password"
            outlined
            @click:append="show = !show"
          ></v-text-field>
          <v-text-field
            v-model="form.password2"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, rules.match]"
            :type="show ? 'text' : 'password'"
            name="input-10-1"
            placeholder=" Confirm password"
            outlined
            @click:append="show2 = !show2"
          ></v-text-field>
          <v-alert v-if="response" color="#4CAF50">
            {{ response }}
          </v-alert>
          <v-alert v-if="error" color="#FF5252">
            {{ error }}
          </v-alert>
          <v-btn
            :disabled="!valid"
            outlined
            color="#333"
            class="login__button mr-4"
            @click="submit"
          >
            Submit
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <router-link :to="{ name: 'admin' }" class="login__link"
      >Sign in</router-link
    >
  </v-form>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'admin',
  data() {
    return {
      valid: false,
      show: false,
      show2: false,
      form: {
        password: '',
        password2: ''
      },
      error: '',
      response: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        match: v =>
          this.form.password === this.form.password2 || "Passwords don't match"
      }
    }
  },
  methods: {
    submit() {
      var user = firebase.auth().currentUser
      if (!user) {
        this.error = 'Please login first!'
        return
      }
      user
        .updatePassword(this.form.password)
        .then(() => {
          this.response = 'Successfully changed password!'
          setTimeout(() => {
            this.$router.replace({ name: 'admin' })
          }, 1000)
        })
        .catch(function(err) {
          switch (err.code) {
            case 'auth/requires-recent-login':
              this.error = err.message
              break
            default:
              this.error = err.message
              break
          }
        })
    }
  }
}
</script>
<style lang="less" scoped>
.login__button {
  & span {
    color: white;
  }
}
.login__link {
  color: black;
  &:hover {
    color: gray;
  }
}
</style>
