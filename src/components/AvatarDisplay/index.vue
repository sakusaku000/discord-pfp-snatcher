<template>
    <div class="p-3 bg-gray-700 rounded">
        <h1 class="text-lg font-bold mb-2">Fetched {{$store.state.loadedUser.name}}#{{$store.state.loadedUser.discrim}}'s avatar</h1>
        <a :href="`https://cdn.discordapp.com/avatars/${$store.state.loadedUser.id}/${$store.state.loadedUser.avatar}.png?size=4096`" target="_blank">
            <img class="rounded" :src="`https://cdn.discordapp.com/avatars/${$store.state.loadedUser.id}/${$store.state.loadedUser.avatar}.png?size=4096`" draggable="false">
        </a>
    </div>
</template>

<script>
export default {
    name:"AvatarDisplay"
}
</script>