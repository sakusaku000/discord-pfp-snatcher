<template>
    <div class="select-none">
        <h1 class="text-3xl font-bold">Discord Avatar Snatcher</h1>
        <h2 class="mb-2">by <a href="https://saku.dev/" target="_blank" class="underline">saku</a></h2>

        <p>View and download Discord avatars by entering the ID of a user below</p>
        <p class="text-xs text-gray-300">To find the ID <span class="underline cursor-pointer" @click="$refs.HelpPopup.open()">click here for help</span></p>

        <hr class="border-gray-600 mt-4">
    </div>

    <Modal ref="HelpPopup">
        <UserIDHelpPopup/>
    </Modal>
</template>

<script>
import Modal from '../Reuse/Modal.vue';
import UserIDHelpPopup from './UserIdHelpPopup.vue';

export default {
    name:"PageHeadIndex",
    components:{
        Modal,
        UserIDHelpPopup
    }
}
</script>