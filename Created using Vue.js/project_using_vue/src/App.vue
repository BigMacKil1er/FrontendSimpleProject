<template>
    <div class="app">
        <post-form-vue @create="createPost"></post-form-vue>
        <post-list-vue :posts="posts"></post-list-vue>
        <!-- <div> -->
            <!-- <button @click="addLike">Like</button> -->
            <!-- <button @click="addDisLike">Dislike</button> -->
        <!-- </div> -->
        <!-- <div><p>Колличество лайков:</p> <strong>{{ likes }}</strong></div> -->
        <!-- <div><p>Колличество дизлайков:</p> <strong>{{ dislikes }}</strong></div> -->
                
    </div>
</template>

<script>
import PostFormVue from './components/PostForm.vue'
import PostListVue from './components/PostList.vue'
export default {
    components: {
        PostListVue, PostFormVue
    },
    data(){
        return {
            likes: 0,
            dislikes: 0,
            posts: [
                {id: 1, title: 'Javasript 1', body: 'Описание поста'},
                {id: 2, title: 'Javasript 2', body: 'Описание поста 2'},
                {id: 3, title: 'Javasript 3', body: 'Описание поста 3'},
                {id: 3, title: 'Javasript 4', body: 'Описание поста 5'}
            ],
        }
    },
    methods: {
        createPost(post, second, third) {
            this.posts.push(post)
        },
        addLike() {
            this.likes += 1;
        },
        addDisLike() {
            this.dislikes += 1;
        }
    }
}
</script>

<style>
* {
    margin: 0;
    box-sizing: border-box;
}
.app {
    padding: 20px;
}
</style>