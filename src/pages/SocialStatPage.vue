<script setup>
import SocialStat from '../components/SocialStat.vue';

const twitterJSON = {
    logo: "twitter",
    title: "Twitter",
    price: "$500 000",
    sensIcon: "up",
    sensText: "+40% more impressions",
    trialsText: "5% new trials"
}

const facebookJSON = {
    logo: "facebook",
    title: "Facebook",
    price: "$500 000",
    sensIcon: "up",
    sensText: "+40% more impressions",
    trialsText: "5% new trials"
}

const tiktokJSON = {
    logo: "twitter",
    title: "Facebook",
    price: "$500 000",
    sensIcon: "up",
    sensText: "+40% more impressions",
    trialsText: "5% new trials"
}

</script>

<template>
    <div class="container mx-auto">
        <div class="gap-6 grid grid-cols-3">
            <SocialStat :info="twitterJSON" />
            <SocialStat :info="facebookJSON" />
            <SocialStat :info="tiktokJSON" />
            <SocialStat :info="twitterJSON" />
            <SocialStat :info="twitterJSON" />
            <SocialStat :info="twitterJSON" />
        </div>
    </div>
</template>