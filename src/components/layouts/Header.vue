<template>
    <transition 
        name="fade"
        mode="out-in"
    >
        <div class="header" v-if="currentUserChat.name">
            <div class="info" @click="toContactInfo(currentUserChat)">
                <div class="user">
                    <div class="user-name">
                        {{currentUserChat.name}}
                    </div>
                    <div class="user-image" v-bind:style="{ backgroundImage: 'url(' + currentUserChat.image + ')' }"></div>
                </div>
            </div>
        </div>
        <div class="header home" v-else>
            <div class="logo">
                VueChat
            </div>
            <div class="copyright">
                by Yurii Skarbek
            </div>
        </div>
    </transition>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import customIcon from 'vue-icon/lib/vue-feather.esm'
import { mapState, mapActions } from "vuex";

export default {
    name: "Header",
    components: {
        customIcon
    },
    props: {},
    data() {
        return {}
    },
    computed: {
        ...mapState([
            'currentUserChat'
        ]),
        isCoreRoute(){
            return this.$route.path === '/'
        }
    },
    methods: {
        ...mapActions([
            'USER_TO_HEADER'
        ]),
        goBack() {
            this.$router.go(-1);
            this.USER_TO_HEADER({});
        },
        toContactInfo(contact){
            this.USER_TO_HEADER(this.currentUserChat);
            if(this.currentUserChat.id != this.$route.query.id){
                this.$router.push({
                    name: 'contact',
                    query: {'id' : this.currentUserChat.id}
                })
            }
        }
    }
}
</script>

<style scoped>
    .header{
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        background-color: #1a1a2e;
        border-bottom: 2px solid #444;
    }

    .back{
        display: flex;
        align-items: center;
        cursor: pointer;
        opacity: .9;
        transition: .4s;
        padding: 0 30px;
        
    }

    .back:hover{
        background-color: #16213e;

    }

    .back:hover{
        opacity: 1;
    }

    .back .icon{
        width: 40px;
        height: 40px;
        margin-right: 12px;
    }

    .info{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }

    .user{
        display: flex;
        align-items: center;
        padding: 0 30px;
        cursor: pointer;
        transition: .4s;
    }

    .user:hover{
        background-color: #16213e;

    }
    .user-name{
        font-weight: bold;
        color: #fafafa;
    }

    .user-image{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #CCC;
        background-size: cover;
        background-position: center;
        margin-left: 12px;
    }

    .header.home{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo{
        /* width: 100%; */
        font-size: 38px;
        font-weight: 900;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #ccc;
        -webkit-text-fill-color: transparent;
    }
    .header.home .copyright{
        color: #ccc;
        margin-left: 8px;
        align-self: flex-end;
        margin-bottom: 8px;
    }
</style>