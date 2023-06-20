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
  name: 'MX-Website',
  data() {
    return {
      posts: [
        {
          id: 1,
          title: '墨西哥 7天 esim 3GB',
          description: '探索墨西哥七天，享受快速的esim網路服務，3GB的高速數據。',
          link: 'https://moccapower186.boostime.me/products/gget14yd',
          price: 3065,
          image: 'https://cdn.discordapp.com/attachments/889388976392273931/1120207877710286919/MX-7days.png'
        },
        {
          id: 2,
          title: '墨西哥 14天 esim 3GB',
          description: '暢遊墨西哥十四天，無需擔心流量限制，提供3GB的高速esim數據。',
          price: 3360,
          link: 'https://moccapower186.boostime.me/products/76dcaw7i',
          image: 'https://cdn.discordapp.com/attachments/889388976392273931/1120207877156655114/MX-14days.png'
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
