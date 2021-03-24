<template>
    <nav class="nav" @click="move">
        <router-link :to="{name: 'home'}" class="link">
            <v-icon class="icon" name="users"></v-icon>
            <div class="text">Contacts</div>
        </router-link>

        <router-link :to="{name: 'chats'}" class="link">
            <v-icon class="icon" name="message-square"></v-icon>
            <div class="text">Chats</div>
        </router-link>

        <router-link :to="{name: 'contact', query: {'id' : 0}}" class="link">
            <v-icon class="icon" name="user"></v-icon>
            <div class="text">Profile</div>
        </router-link>

    </nav>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import customIcon from 'vue-icon/lib/vue-feather.esm'
import { mapState, mapActions } from "vuex";

export default {
    name: "Nav",
    components: {
        customIcon
    },
    methods: {
        ...mapActions([
            'USER_TO_HEADER',
            'FETCH_PROFILE'
        ]),
        move(){
            this.USER_TO_HEADER({});
            this.FETCH_PROFILE();
        }
    }
}
</script>

<style scoped>
    .nav{
        width: 100%;
        height: 60px;
        background: #1a1a2e;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .link{
        padding: 0 30px;
        transition: .4s;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .link:hover{
        background-color: #16213e;
    }

    .link .icon{
        width: 32px;
        height: 32px;
        margin-bottom: 2px;
    }

    .link .text{
        font-size: 12px;
        text-decoration: none;
    }
</style>