<template>
    <div class="chat">
        <Messege
            v-for="messege in messeges"
            :key="messege.id"
            :messege="messege"
        />
        <div class="input-wrap">
            <input 
                type="text" 
                class="input"
                v-model="msgValue"
                @keypress.enter="sendMsg"
                @keyup="charLimit"
            >
            
            <div 
                class="send"
                @click="sendMsg"
            >
                <v-icon class="icon" name="send"></v-icon>
            </div>
        </div>
    </div>
    
</template>

<script>
/* eslint-disable vue/no-unused-components */
import customIcon from 'vue-icon/lib/vue-feather.esm'
import { mapActions } from 'vuex'

import Messege from './Messege'

export default {
    name: "UserChat",
    components: {
        Messege,
        customIcon
    },
    props: {
        messeges: {
            type: Array,
            default: () => []
        },
        user: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            msgValue: ''
        }
    },
    methods: {
        ...mapActions([
            'SET_MESSEGE_TO_CHAT'
        ]),
        sendMsg(){
            console.log('send msg');
            let user = {...this.user}
            let chat = {
                id: this.messeges.length + 1,
                time: new Date().toLocaleTimeString('en-US', {
                    hour12: false,
                    hour: 'numeric',
                    minute: 'numeric'
                }),
                text: this.msgValue,
                isMine: true
            }

            user.chat.push(chat);

            this.SET_MESSEGE_TO_CHAT({userId: user.id, user: user})
            .then(() => {
                this.msgValue = ''
            })
        },
        charLimit() {
            if(this.msgValue.length >= 140){
                let slicedMsgText = this.msgValue.slice(0, 140);
                this.msgValue = slicedMsgText;
            }
        }
    },
    mounted() {
    },
    computed: {
    }
}
</script>

<style scoped>

.input-wrap{
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    bottom: 60px;
}

.input{
    width: 80%;
    background-color: transparent;
    color: rgb(0, 0, 0);
    outline: none;
    border: 2px solid #ccc;
    box-sizing: border-box;
    background-color: #ccc;
    font-size: 20px;
}

.input-wrap .send{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    background-color: rgb(58, 58, 58);
    border: 2px solid #ccc;
    border-left: none;
}

.input-wrap .send .icon{
    height: 70%;
}

.chat{
    margin-bottom: 130px;
}

</style>