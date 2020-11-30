<template lang="pug">
#app: router-view
</template>

<script>
export default {
  name: 'App',
  beforeMount: function () {
    if (!this.$route.params.building) {
      this.$router.push({ name: 'Home', params: { building: 'The_Arc' } })
    }
    if (!this.$route.params.level) {
      this.$router.push({ name: 'Home', params: { level: 1 } })
    }
  },
}
</script>

<style lang="scss">
@import 'scss/style.scss';
</style>
