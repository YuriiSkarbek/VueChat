<template>
    <div class="user" @click="toContactInfo">
        <div class="avatar" :style="{ backgroundImage: 'url(' + contact_data.image + ')' }"></div>
        <div class="user-body">
            <div class="name">
                {{contact_data.name}}
            </div>
            <div class="desc">
                {{contact_data.description}}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ContactUser",
    components: {},
    props: {
        contact_data: Object,
        default: {}
    },
    data() {
        return {}
    },
    computed: {},
    methods: {
        toContactInfo() {
            this.$emit('to-contact-info')
        }
    }
}
</script>

<style scoped>
    .user{
        width: 100%;
        height: 80px;
        box-sizing: border-box;
        padding: 15px 30px;
        border-bottom: 2px solid #444;
        display: flex;
    }

    .user .avatar{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-position: center;
        background-size: cover;
        background-color: #ccc;
    }

    .user .user-body{
        margin-left: 30px;
    }

    .user .name{
        font-weight: bold;
        margin-bottom: 4px;
    }

    .user .desc{
        color: #ccc;
        font-size: 14px;
    }
</style>