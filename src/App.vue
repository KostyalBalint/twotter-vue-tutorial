<template>
  <div id="app">
    <nav class="navbar navbar-light bg-dark">
      <div class="container">
        <router-link to="/">
          <h3 class="text-white mb-0">Twotter</h3>
        </router-link>
        <span class="navbar-brand mb-0 h1 text-white" v-if="user">@{{ user.username }}</span>
      </div>
    </nav>
    <router-view/>
  </div>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</template>

<script>
  import { useStore } from 'vuex';
  import { computed } from 'vue';
export default {
  name: 'App',
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);

    return {
      user
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background-color: aliceblue;
}
</style>
