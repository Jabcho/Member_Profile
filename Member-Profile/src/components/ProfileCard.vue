<template>
    <article :class="{ chosen : isChosen === true && id === chosenId }" class="profile" ref="profile">
        <img :src=imgSrc alt="">
        <h1>{{ name }}</h1>
        <h2>{{ job }}</h2>
        <a href="#" class="btnView" @click.self.prevent="btnClick">VIEW MORE</a>
    </article>
    
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useChosenProfileStore } from '@/stores/profile-store'
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const props = defineProps(['profile'])

const id = ref(0);
const name = ref('');
const job = ref('');
const imgSrc = ref('');

onMounted(() => {
    id.value = props.profile.id;
    name.value = props.profile.name;
    job.value = props.profile.job;
    imgSrc.value = props.profile.img;
})

const chosenProfileStore = useChosenProfileStore();
let { isChosen, chosenId } = storeToRefs(chosenProfileStore);

const router = useRouter();

const btnClick = (async () => {

    const res = await chosenProfileStore.getIntroduction(id, name, job, imgSrc);

    if (res === true) {
        router.push("/member");
    } else {
        alert("Error occurs. Please try again.")
    }

})

</script>

<style scoped lang="scss">


@keyframes chosen-profile-card-move {
    0% {
        transform: translateX(0%); 
        opacity: 1;
    }
    100% {
        transform: translate(-100%, 50%);
        opacity: 1;
    }
}

    article.profile {
        padding: 30px;
        background-color: #fff;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
        text-align: center;

        img {
            width: 200px; height: 200px;
            border-radius: 50%;
            margin-bottom: 20px;
            box-shadow: 5px 15px 20px rgba(41, 37, 40, 0.2);
        }

        h1 {
            font-weight: bold;
            font-size: 22px;
            font-family: "arial";
            line-height: 1;
            color: #555;
            margin-bottom: 5px;
        }

        h2 {
            font-weight: normal;
            font-size: 12px;
            font-family: "arial";
            color: #bbb;
            margin-bottom: 20px;
        }
        a.btnView {
            filter: saturate(0.4);
            display: block;
            width: 180px;
            height: 32px;
            margin: 0 auto 20px;
            border-radius: 16px;
            font-weight: bold;
            font-size: 10px;
            font-family: "arial";
            color: #fff;
            line-height: 32px;
            text-align: center;
            background: linear-gradient(45deg, #8e9898, #373a3b);
            box-shadow: 5px 15px 20px rgba(56, 59, 59, 0.493);
        }

        
        &.chosen {
            animation-name: chosen-profile-card-move;
            animation-duration: 2s;
            animation-timing-function: linear;
            transition-property: visibility;
            transition-delay: 2s;
            visibility: hidden;
        }
    }

    
</style>