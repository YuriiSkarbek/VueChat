<template>
    <div class="user" @click="toUserChat">
        <div class="avatar" :style="{ backgroundImage: 'url(' + user_data.image + ')' }"></div>
        <div class="user-body">
            <div class="name">
                <div class="name-text">
                    {{user_data.name}}
                </div> 
                <div class="time">
                    {{user_data.chat[user_data.chat.length-1].time}}
                </div>
            </div>
            <div class="last-msg">
                {{user_data.chat[user_data.chat.length-1].text}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "User",
    components: {
    },
    props: {
        user_data: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        ...mapActions([
            'USER_TO_HEADER'
        ]),
        toUserChat(){
            this.USER_TO_HEADER(this.user_data);
            this.$router.push({
                name: 'chat',
                params: {'messeges': this.user_data.chat, 'user': this.user_data}
            })
        }
    }
}
</script>

<style scoped>
.user{
        width: 100%;
        height: 100px;
        box-sizing: border-box;
        padding: 15px 30px;
        border-bottom: 2px solid #444;
        display: flex;
    }

    .user .avatar-wrap{
        width: 30%;
    }

    .user .avatar{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-position: center;
        background-size: cover;
        background-color: #ccc;
    }

    .user .user-body{
        margin-left: 30px;
        width: 70%;
    }

    .user .name{
        font-weight: bold;
        margin-bottom: 8px;
        display: flex;
        justify-content: space-between;
        width: ;
    }

    .user .name .time{
        margin-left: auto;
    }

    .user .last-msg{
        color: #ccc;
    }
</style>