<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @keyup.native.enter="valid && submit($event)"
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="4" offset-md="4">
          <h1>Admin login</h1>
          <br />
          <div v-if="user.loggedIn">
            <v-alert color="#4CAF50">
              Logged in.
            </v-alert>
            <router-link
              :to="{ name: 'change-password' }"
              class="register__link"
              >Change password</router-link
            >
          </div>
          <div v-else>
            <v-text-field
              v-model="form.email"
              :rules="[rules.required, rules.email]"
              placeholder="E-mail"
              outlined
              required
            ></v-text-field>
            <v-text-field
              v-model="form.password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show ? 'text' : 'password'"
              name="input-10-1"
              placeholder="Password"
              outlined
              @click:append="show = !show"
            ></v-text-field>
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
              Login
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import { mapGetters } from 'vuex'

export default {
  name: 'admin',
  data() {
    return {
      valid: false,
      show: false,
      form: {
        email: '',
        password: ''
      },
      error: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        email: v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      }
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {})
        .catch(err => {
          switch (err.code) {
            case 'auth/user-not-found':
              this.error = err.message
              break
            case 'auth/wrong-password':
              this.error = err.message
              break
            default:
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
.register__link {
  color: black;
  &:hover {
    color: gray;
  }
}
</style>
