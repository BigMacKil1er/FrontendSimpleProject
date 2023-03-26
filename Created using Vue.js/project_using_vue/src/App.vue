<template>
    <div>
        <div>
            <button @click="addLike">Like</button>
            <button @click="addDisLike">Dislike</button>
        </div>
        <div><p>Колличество лайков:</p> <strong>{{ likes }}</strong></div>
        <div><p>Колличество дизлайков:</p> <strong>{{ dislikes }}</strong></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            likes: 0,
            dislikes: 0,
        }
    },
    methods: {
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

</style>