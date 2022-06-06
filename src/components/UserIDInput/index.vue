<template>
    <div class="py-4">
        <h5 class="mb-1 text-sm">Enter ID of Discord user</h5>
        <form @submit.prevent="fetchUser" class="grid gap-2 w-full p-2 px-3 bg-gray-700 focus-within:bg-gray-800 duration-100 rounded focus-within:ring ring-gray-400" style="grid-template-columns:1fr 70px">
            <input type="text" placeholder="353978725332680707" class="bg-transparent outline-none" v-model="user_id">
            <button class="hover:bg-gray-600 duration-100 -my-2 -mr-3 rounded">Find</button>
        </form>

        <p class="mt-2" v-if="$store.state.error">Error: {{$store.state.error}}</p>
    </div>
</template>

<script>
export default {
    name:"UserIDInput",
    data() {
        return {
            user_id:""
        }
    },
    methods:{
        fetchUser() {
            this.$store.commit("setLoadedUserData", null);

            if (this.user_id.match(/^\d+$/)) {
                this.$store.commit("setErrorMessage", "");
                this.$store.dispatch("fetchUser", this.user_id);
            } else {
                this.$store.commit("setErrorMessage", "Not a valid user ID");
            }
        }
    }
}
</script>