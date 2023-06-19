
<template>
  <div class="home-container">
    <h2>Choose your destinations  !</h2>
    <p>Click the botton to see the details:</p>
    <div class="button-container">
      <div v-for="destination in destinations" :key="destination.name" class="destination">
        <img :src="destination.image" :alt="destination.name" class="destination-image">
        <button @click="goToDestination(destination.name)" class="destination-button">{{ destination.name }}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  data() {
    return {
      destinations: [
        {
          name: 'JP',
          image: 'https://cdn.discordapp.com/attachments/889388976392273931/1120325646929895534/Flag_of_Japan.svg.png'
        },
        {
          name: 'CN-HK-MO',
          image: 'https://cdn.discordapp.com/attachments/889388976392273931/1120326819787317309/CN.png'
        },
        {
          name: 'EURO',
          image: 'https://cdn.discordapp.com/attachments/889388976392273931/1120326819493711913/EURO.png'
        },
        {
          name: 'US-CA',
          image: 'https://cdn.discordapp.com/attachments/889388976392273931/1120326819225284638/US-CA.png'
        },
        {
          name: 'MX',
          image: 'https://cdn.discordapp.com/attachments/889388976392273931/1120326818776489994/MX.png'
        }
      ]
    };
  },
  methods: {
    goToDestination(destination) {
      this.$router.push({ name: destination });
    }
  }
};
</script>
<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
}

h2 {
  color: blue;
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.destination {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.destination-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.destination-button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #ddd;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.destination-button:hover {
  background-color: #ccc;
}
</style>