<template>
    <div class="container">
        <Header/>
        <div class="main">
            <transition 
                name="fade"
                mode="out-in"
            >
                <router-view/>
            </transition>
        </div>
        <Nav/>
    </div>
</template>

<script>
import Header from "./layouts/Header"
import Nav from "./layouts/Nav"

export default {
    name: "Wrapper",
    components: {
        Header,
        Nav
    }
}
</script>

<style scoped>

</style>