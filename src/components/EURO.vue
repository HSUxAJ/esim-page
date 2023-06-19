<template>
  <div class="post-container">
    <div v-for="post in posts" :key="post.id" class="post">
      <div class="post-image">
        <img :src="post.image" alt="Post Image">
      </div>
      <div class="post-content">
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
        <a :href="post.link" target="_blank">查看詳情</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EURO-Website',
  data() {
    return {
      posts: [
        {
          id: 1,
          title: '歐洲 14天 esim 5GB',
          description: '探索歐洲十四天，享受快速的esim網路服務，5GB的高速數據。',
          link: 'https://moccapower186.boostime.me/products/w2akcsfi',
          image: 'https://cdn.discordapp.com/attachments/889388976392273931/1120205199001268315/EURO-14days.png'
        },
        {
          id: 2,
          title: '歐洲 30天 esim 10GB',
          description: '暢遊歐洲三十天，無需擔心流量限制，提供10GB的高速esim數據。',
          link: 'https://moccapower186.boostime.me/products/hkbs9tsf',
          image: 'https://cdn.discordapp.com/attachments/889388976392273931/1120205198594412554/EURO-30days.png'
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

.post-content a {
  display: inline-block;
  color: blue;
  text-decoration: underline;
}
</style>
