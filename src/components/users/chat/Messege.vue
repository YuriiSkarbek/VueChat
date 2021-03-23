<template>
    <div class="msg" v-bind:class="{ own: messege.isMine }">
        <div class="text">
            {{messege.text}}
        </div>
        <div class="footer">
            <div class="status" v-show="messege.readed">Readed</div>
            <div class="time">{{messege.time}}</div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Messege",
    components: {
    },
    props: {
        messege: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {}
    },
    methods: {
    },
    mounted() {
    },
    computed: {
    }
}
</script>

<style scoped>
    .msg{
        margin: 12px 20px;
        padding: 20px;
        display: block;
        background-color: #1a1a2e;
        width: 60%;
        border-radius: 20px;
        border-bottom-left-radius: 0px;
    }

    .msg.own{
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 0px;
        margin-left: auto;
    }


    .footer{
        display: flex;
        justify-content: space-between;
        color: #ccc;
        margin-top: 8px;
    }

    .footer .time,
    .footer .status{
        color: #ccc;
        font-size: 12px;
    }

    .footer .time{
        margin-left: auto;
    }
</style>