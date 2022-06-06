<template>
    <div class="container mx-auto py-10 px-5 max-w-3xl">
        <PageHead/>
        <UserIDInput/>
        <AvatarDisplay v-if="$store.state.loadedUser && !$store.state.fetching"/>
    </div>
</template>

<script>
import PageHead from './components/PageHead/index.vue';
import UserIDInput from './components/UserIDInput/index.vue';
import AvatarDisplay from './components/AvatarDisplay/index.vue';

export default {
    name:"App",
    components:{
        PageHead,
        UserIDInput,
        AvatarDisplay
    }
}
</script>

<style>
    html, body {
        @apply bg-gray-900 text-gray-100
    }
</style>