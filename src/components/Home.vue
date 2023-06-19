<template>
  <div>
    <h2>Home</h2>
    <p>Welcome to the Home page!</p>
    <button @click="goToJP">Go to JP</button>
    <button @click="goToCNHKMO">Go to CN-HK-MO</button>
    <button @click="goToEURO">Go to EURO</button>
    <button @click="goToUSCA">Go to US-CA</button>
    <button @click="goToMX">Go to MX</button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToJP() {
      this.$router.push({ name: 'JP' });
    },
    goToCNHKMO() {
      this.$router.push({ name: 'CN-HK-MO' });
    },
    goToEURO() {
      this.$router.push({ name: 'EURO' });
    },
    goToUSCA() {
      this.$router.push({ name: 'US-CA' });
    },
    goToMX() {
      this.$router.push({ name: 'MX' });
    }
  }
};
</script>

<style scoped>
h2 {
  color: blue;
}
</style>
