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
  name: 'JP-Website',
  data() {
    return {
      posts: [
        {
          id: 1,
          title: '日本 5天 esim 5GB',
          description: '探索日本五天，享受快速的 esim 網路服務，5GB 的高速數據。',
          price: 430, 
          link: 'https://moccapower186.boostime.me/products/w2akcsfi',
          image: 'https://cdn.discordapp.com/attachments/889388976392273931/1120202416185417768/Flag_of_Japan_5days.png'
        },
        {
          id: 2,
          title: '日本 8天 esim 8GB',
          description: '暢遊日本八天，無需擔心流量限制，提供8GB的高速 esim 數據。',
          price: 600, 
          link: 'https://moccapower186.boostime.me/products/hkbs9tsf',
          image: 'https://cdn.discordapp.com/attachments/889388976392273931/1120202415891824721/Flag_of_Japan_8days.png'
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
