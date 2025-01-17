<script setup>
import HomeProduct from '../components/HomeProduct.vue';

const products = [{
    image: { link: "http://localhost:5173/images/img1.jpg", alt: "Scaun" },
    title: "Scaun",
    rates: "5",
    reviews: "112",
    price: "510"
}, {
    image: { link: "http://localhost:5173/images/img2.jpg", alt: "Masa" },
    title: "Masa",
    rates: "4.5",
    reviews: "121",
    price: "1828"
}, {
    image: { link: "http://localhost:5173/images/img3.jpg", alt: "Canapea" },
    title: "Canapea",
    rates: "2.5",
    reviews: "12",
    price: "3828"
}, {
    image: { link: "http://localhost:5173/images/img1.jpg", alt: "Scaun" },
    title: "Scaun",
    rates: "5",
    reviews: "112",
    price: "510"
},];

</script>

<template>
    <div class="container mx-auto pb-6">
        <div class="gap-6 grid grid-cols-3">
            <HomeProduct v-for="product of products" :image="product.image" :title="product.title"
                :rates="product.rates" :reviews="product.reviews" :price="product.price" />
        </div>
    </div>
</template>