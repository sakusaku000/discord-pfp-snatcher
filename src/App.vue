<template>
    <div class="h-screen bg-gray-900 text-gray-100 flex flex-col justify-center items-center">
        <div v-if="!fetched && !fetching" class="text-center">
            <h1 class="font-bold text-3xl mb-5 select-none">enter a discord id</h1>
        
            <div class="bg-gray-200 rounded-lg pl-4 p-2 border-r-4 border-b-4 border-gray-400 w-screen sm:w-96">
                <form @submit.prevent="fetchAvatar" class="grid gap-2" style="grid-template-columns:1fr 70px;">
                    <input type="text" class="bg-transparent text-gray-900 outline-none" placeholder="353978725332680707" v-model="user_id">
                    <button class="bg-green-300 hover:bg-green-400 duration-100 rounded-lg px-3 py-2 border-r-4 border-b-4 border-green-400 font-bold">find</button>
                </form>
            </div>

            <span class="fixed bottom-4 left-4 select-none">discord avatar snatcher</span>
            <span class="fixed bottom-4 right-4 select-none">by <a href="https://github.com/sakusaku000" target="_blank">saku</a> :)</span>
        </div>

        <div v-if="fetching">
            <h1 class="font-bold text-3xl">one moment :)</h1>
        </div>

        <div v-if="!fetching && fetched">
            <div class="flex gap-4 items-center mb-4">
                <button class="bg-red-300 hover:bg-red-400 duration-100 rounded-lg px-3 py-2 border-r-4 border-b-4 border-red-400 font-bold" @click="reset">⬅</button>
                <h1>fetched {{user_id}}</h1>
            </div>
            <div class="bg-gray-200 p-3 border-r-4 border-b-4 border-gray-400 rounded-lg w-96">
                <a :href="`https://cdn.discordapp.com/avatars/${user_id}/${user_avatar}.png?size=4096`" target="_blank">
                    <img :src="`https://cdn.discordapp.com/avatars/${user_id}/${user_avatar}.png?size=4096`">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:"App",
    data() {
        return {
            fetched:false,
            fetching:false,
            user_id:"",
            user_avatar:""
        }
    },
    methods:{
        async fetchAvatar() {
            this.fetching = true;

            try {
                const avatar = await axios.get(`/api/avatarfetch?id=${this.user_id}`);
                this.user_avatar = avatar.data;
                this.fetched = true;
                this.fetching = false;
            } catch (err) {
                this.fetching = false;
                this.fetched = false;
                this.user_id = "";
                this.user_avatar = "";
            };
        },
        reset() {
            this.fetching = false;
            this.fetched = false;
            this.user_id = "";
            this.user_avatar = "";
        }
    }
}
</script>