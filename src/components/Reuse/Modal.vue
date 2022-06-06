<template>
    <teleport to="body">
        <transition name="modal">
            <div class="flex flex-col justify-center items-center trans-bg fixed top-0 bottom-0 left-0 right-0 select-none" v-if="active" @click="cancel">
                <div class="p-5 bg-gray-700 rounded shadow">
                    <slot/>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script>
export default {
    name:"Modal",
    data() {
        return {
            active:false,
        }
    },
    methods:{
        open() {
            this.active = true;
            this.disableClose = false;
        },
        cancel() {
            this.active = false;
        }
    }
}
</script>

<style scoped>
    .trans-bg {
        background-color:#00000090;
    }

    .modal-enter-active, .modal-leave-active {
        transition-duration:0.2s !important;
    }
    .modal-enter-from, .modal-leave-to {
        opacity:0;
    }
    .modal-leave-from, .modal-enter-to {
        opacity:1;
    }
</style>