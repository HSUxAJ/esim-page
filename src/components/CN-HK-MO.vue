<template>
  <div class="post-container">
    <div v-for="post in posts" :key="post.id" class="post">
      <div class="post-image">
        <img :src="post.image" alt="Post Image">
      </div>
      <div class="post-content">
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
        <p class="post-price">價格: NT$ {{ post.price }}</p>
        <a :href="post.link" target="_blank">查看詳情</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CN-HK-MO-Website',
  data() {
    return {
      posts: [
        {
          id: 1,
          title: '大陸 香港 澳門 3天 esim 1GB',
          description: '探索大陸 香港 澳門五天，享受快速的esim網路服務，1GB的高速數據。',
          link: 'https://moccapower186.boostime.me/products/2c7uipme',
          price: 240,
          image: 'https://cdn.discordapp.com/attachments/889388976392273931/1120204048973439017/CN-HK-MO-3days.png'
        },
        {
          id: 2,
          title: '大陸 香港 澳門 8天 esim 3GB',
          description: '暢遊大陸 香港 澳門八天，無需擔心流量限制，提供3GB的高速esim數據。',
          price: 325,
          link: 'https://moccapower186.boostime.me/products/h9ujgzo2',
          image: 'https://cdn.discordapp.com/attachments/889388976392273931/1120204048755343500/CN-HK-MO-8days.png'
        }
      ]
    };
  }
};
</script>

<style scoped>
.post-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.post {
  display: flex;
  align-items: center;
  max-width: 500px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
}

.post-image {
  margin-right: 20px;
  flex: 0 0 150px;
}

.post-image img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.post-content {
  flex: 1;
}

.post-content h2 {
  margin-bottom: 10px;
  font-size: 24px;
}

.post-content p {
  margin-bottom: 10px;
  line-height: 1.5;
}

.post-content .post-price {
  margin-bottom: 10px;
  font-weight: bold;
}

.post-content a {
  display: inline-block;
  color: blue;
  text-decoration: underline;
}
</style>
