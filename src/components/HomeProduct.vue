<script setup>
const props = defineProps(["image", "title", "rates", "reviews", "price"])
</script>

<template>
    <div class="w-full flex flex-col bg-orange-200 p-2 rounded-md drop-shadow-md">
        <img :src="props.image.link" :alt="props.image.alt" srcset="">
        <div>{{ props.title }}</div>
        <div>{{ props.rates }} <span>{{ props.reviews }}</span></div>
        <div>{{ props.price }}</div>
        <button type="button">Add To Cart</button>
    </div>
</template>