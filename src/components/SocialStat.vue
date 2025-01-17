<script setup>
import TwitterLogo from "../assets/TwitterHashtags-HERO.webp"
import 'bootstrap-icons/font/bootstrap-icons.css';

const props = defineProps(["info"])

let logo = undefined;
import { onBeforeMount } from "vue"
onBeforeMount(() => {
    if (props.info.logo == "twitter") {
        logo = TwitterLogo;
    }
})

</script>

<template>
    <div v-if="props.info" class="w-full flex flex-col bg-pink-200 p-2 rounded-md drop-shadow-md">
        <div class="flex"> <img :src="logo" alt="Twitter" class="h-8"> {{ props.info.title }} </div>
        <div> {{ props.info.price }} </div>
        <div> <i class="bi bi-arrow-90deg-up"></i> {{ props.info.sensText }}</div>
        <div> {{ props.info.trialsText }} </div>
    </div>
</template>