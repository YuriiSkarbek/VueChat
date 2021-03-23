<template>
    <div class="list">
        <h1 class="page-title">
            <v-icon class="icon" name="users"></v-icon>
            <span>Contact List</span>
        </h1>
        <contact-user
            v-for="contact in contacts"
            :key="contact.id"
            :contact_data="contact"
            @to-contact-info="toContactInfo(contact)"
        />
    </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import customIcon from 'vue-icon/lib/vue-feather.esm'

import ContactUser from "./ContactUser"
import { mapActions, mapState } from "vuex";

export default {
    name: "ContactList",
    components: {
        ContactUser,
        customIcon
    },
    props: {},
    data() {
        return {}
    },
    methods: {
        ...mapActions([
            'FETCH_CONTACTS',
            'USER_TO_HEADER'
        ]),
        toContactInfo(contact){
            this.USER_TO_HEADER(contact);
            this.$router.push({
                name: 'contact',
                query: {'id' : contact.id}
            })
        }
    },
    mounted() {
        this.FETCH_CONTACTS();
    },
    computed: {
        ...mapState([
            'contacts'
        ])
    }
}
</script>

<style scoped>

</style>