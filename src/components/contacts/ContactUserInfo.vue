<template>
    <div class="list">
        <div class="page">
            <div class="avatar" :style="{ backgroundImage: 'url(' + contact_data.image + ')' }">
                <div class="info">
                    <div class="name">
                        {{contact_data.name}}
                    </div>
                    <div class="desc">
                        {{contact_data.description}}
                    </div>
                </div>
            </div>
            <div class="buttons" v-if="this.$route.query.id != 0">
                <div class="btn chat" @click="toUserChat(contact_data)">
                    Start chat
                </div>
                <div class="btn call">
                    Call
                </div>
            </div>
            <div class="info">
                <div class="row">
                    <span class="title"> Status: </span> 
                    <span class="result"> {{  ((contact_data.online) ? 'Online' : 'Offline')}} </span>
                </div>
                <div class="row">
                    <span class="title"> Phone: </span> 
                    <span class="result"> {{contact_data.phone}} </span>
                </div>
                <div class="row">
                    <span class="title"> Email: </span> 
                    <span class="result"> {{contact_data.email}} </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: "ContactUserInfo",
    components: {},
    props: {},
    data() {
        return {
            contact_data: {}
        }
    },
    computed: {
        ...mapState([
            'contacts',
            'profile'
        ])
    },
    mounted() {
        if(this.$route.query.id != 0){
            this.contacts.find((contact) => {
                if(contact.id === this.$route.query.id){
                    this.contact_data = contact
                }
            })
        } else {
            this.contact_data = this.profile;
        }
    },
    methods: {
        ...mapActions([
            'USER_TO_HEADER',
        ]),
        toUserChat(){
            this.USER_TO_HEADER(this.contact_data);
            this.$router.push({
                name: 'chat',
                params: {'messeges': this.contact_data.chat, 'user': this.contact_data}
            })
        }
    }
}
</script>

<style scoped>
    .page{
        padding: 30px;
    }
    .page .avatar{
        width: 100%;
        padding-bottom: 100%;
        background-color: #ccc;
    }
    .page .name{
        font-size: 28px;
        font-weight: bold;
        margin-top: 4px;
        margin-bottom: 8px;
    }

    .page .desc{
        color: #ccc;
    }

    .page .buttons{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 24px;
    }

    .page .btn{
        padding: 12px;
        border-radius: 12px;
        background-color: rgb(74, 143, 72);
        box-sizing: border-box;
        text-align: center;
    }

    .page .btn.call{
        width: 35%;
        background-color: rgb(90, 90, 90);
    }

    .page .btn.chat{
        width: 63%;
    }

    .page .avatar{
        position: relative;
        margin-bottom: 8px;
        background-position: center;
        background-size: cover;
        background-color: #ccc;
    }

    .page .avatar .info{
        background-color: rgba(0, 0, 0, 0.5);
        padding: 12px;
        box-sizing: border-box;
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }
    

    .page .row{
        margin-bottom: 12px;
        display: flex;
        justify-content: space-between;
    }

    .page .row .title{
        font-weight: bold;
    }
</style>