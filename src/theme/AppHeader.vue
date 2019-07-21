<template>
  <nav class="nav has-shadow">
    <div class="container">
      <router-link to="/category/front-end" exact>
        <img src="http://bit.ly/vue-img" alt="Vue SPA">
      </router-link>
      <router-link class="nav-item is-tab" :to="{ name: 'category', params: { id: 'front-end' } }">
        <span v-if="isAuthenticated">Front-end</span>
      </router-link>
      <router-link class="nav-item is-tab" :to="{ name: 'category', params: { id: 'mobile' } }">
        <span v-if="isAuthenticated">Mobile</span>
      </router-link>
      <router-link class="nav-item is-tab" to="/login">
        <span v-if="isAuthenticated"><a href="javascript:;" v-on:click="logout()">Logout</a></span>
      </router-link>
    </div>
  </nav>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['isAuthenticated'])
    },
    methods: {
      ...mapActions({
        logout: 'logout'
      }),
      login () {
        this.$store.dispatch('login', {username: this.username, password: this.password})
          .then(() => {
            this.username = ''
            this.password = ''
            this.$router.push('/category/front-end')
          })
      }
    }
  }
</script>
