<template>
    <div class="list">
        <h1 class="page-title">
            <v-icon class="icon" name="message-square"></v-icon>
            <span>Chats</span>
        </h1>
        <User
            v-for="chat in chats"
            :key="chat.id"
            :user_data="chat"
        />
    </div>
</template>

<script>
import User from "./User"
import { mapState, mapActions } from "vuex";

export default {
    name: "UserList",
    components: {
        User
    },
    methods: {
        ...mapActions([
            'FETCH_CHATS',
            'USER_TO_HEADER'
        ])
    },
    mounted() {
        this.FETCH_CHATS();
        this.USER_TO_HEADER();
    },
    computed: {
        ...mapState([
            'chats'
        ])
    }
}
</script>