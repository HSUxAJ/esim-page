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
  name: 'US-CA-Website',
  data() {
    return {
      posts: [
        {
          id: 1,
          title: '美國 加拿大 14天 esim 每日1GB',
          description: '探索美國 加拿大十四天，享受快速的esim網路服務，每日1GB的高速數據。',
          price: 830,
          link: 'https://moccapower186.boostime.me/products/qs5czigc',
          image: 'https://cdn.discordapp.com/attachments/889388976392273931/1120206624171245639/US-CA-14days.png'
        },
        {
          id: 2,
          title: '美國 加拿大 30天 esim 每日1GB',
          description: '暢遊美國 加拿大三十天，無需擔心流量限制，每日提供1GB的高速esim數據。',
          price: 1100,
          link: 'https://moccapower186.boostime.me/products/vxzpwfnl',
          image: 'https://cdn.discordapp.com/attachments/889388976392273931/1120206623881822218/US-CA-30days.png'
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
