<template>
    <div class="app">
      <h1>Страница с постами</h1>
      <div class="app_btns">
        <my-button @click="showDialog">Создать пост</my-button>
        <my-select :model-value="selectedSort"
                   @update:model-value="sortOptions"></my-select>
      </div>

        <my-dialog v-model:show="dialogVisible">
          <post-form-vue @create="createPost"></post-form-vue>
        </my-dialog>

        <post-list-vue
            :posts="posts"
            @remove="removePost"
            v-if="!isPostLoading"></post-list-vue>
        <div v-else>Идет загрузка...</div>
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
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";
import MySelect from "@/components/UI/MySelect.vue";
export default {
    components: {
      MySelect,
      MyButton,
      MyDialog,
        PostListVue, PostFormVue
    },
    data(){
        return {
            likes: 0,
            dislikes: 0,
            posts: [],
            dialogVisible: false,
            isPostLoading: false,
            selectedSort: '',
            sortOptions: [
              {value: 'title', name: 'По названию'},
              {value: 'body', name: 'По описанию'},
            ]
        }
    },
    methods: {
        createPost(post, second, third) {
            this.posts.push(post)
            this.dialogVisible = false
        },
        removePost(post) {
          this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog(){
          this.dialogVisible = true
        },
        async fetchPosts() {
          try {
            this.isPostLoading = true
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            this.posts = response.data
          } catch (e){
            alert('Error')
          } finally {
            this.isPostLoading = false
          }
        },
        addLike() {
            this.likes += 1;
        },
        addDisLike() {
            this.dislikes += 1;
        }
    },
    mounted() {
      this.fetchPosts()
    },
    watch: {
      selectedSort(newValue){
        console.log(newValue)
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
.app_btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
</style>