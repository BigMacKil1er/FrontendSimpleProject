<template>
    <div>
        <form @submit.prevent>
            <h4>Создание поста</h4>
            <my-input
                v-model="post.title"
                type="text"
                placeholder="Название">

            </my-input>
            <my-input
                v-model="post.body"
                type="text" 
                placeholder="Описание">

            </my-input>
            <my-button
                style="align-self: self-end; margin-top: 15px;"
                @click="createPost"
                >
                Отправить
            </my-button>
        </form>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import MyInput from "@/components/UI/MyInput.vue";

export default {
  components: {MyInput, MyButton},
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post, 'String 1', 'String 2')
            this.post = {
                title: '',
                body: ''
            }
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;

}
</style>