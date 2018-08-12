<template>
  <div>
    <h1>Welcome to hogekai</h1>
    <span>{{ count }}</span>
    <button
      @click="increment()">
      Add
    </button>
  </div>
</template>


<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null
    }
  },
  computed: {
    count　() {
      return this.$store.state.test.count
    }
  },
  methods: {
    ...mapMutations([
    'increment', // `this.increment()` を `this.$store.commit('increment')` にマッピングする
    ]),
  }
}
</script>
</script>

<style scoped>
  h1 {
    margin: 5px 0px;
    font-size: 20px;
  }
</style>
