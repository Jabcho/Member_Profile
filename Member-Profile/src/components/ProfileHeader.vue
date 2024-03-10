<template>
    <header>
        <a href="#" @click.prevent="homeBtnClick">
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
        </a>
        <div>
            <img :src=chosenImgSrc alt="">
            <h1>{{ chosenName }}</h1>
            <h2>{{ chosenJob }}</h2>
        </div>
        <ul>


            <li>
                <a href="#">
                    <i class="fab fa-twitter-square"></i>
                    <span>Twitter</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fab fa-facebook"></i>
                    <span>Facebook</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fab fa-envelope"></i>
                    <span>E-mail</span>
                </a>
            </li>
        </ul>
    </header>
    
</template>

<script setup>
import { useChosenProfileStore } from '@/stores/profile-store'
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useRouter } from 'vue-router';


const chosenProfileStore = useChosenProfileStore();
let { isChosen } = storeToRefs(chosenProfileStore);

const chosenName = computed(() => {
    return chosenProfileStore.chosenName;
});
const chosenJob = computed(() => {
    return chosenProfileStore.chosenJob;
});
const chosenImgSrc = computed(() => {
    return chosenProfileStore.chosenImgSrc;
});;

const router = useRouter();

const homeBtnClick = (async () => {
    const res = await chosenProfileStore.resetChosenInfo();
    if (res === true) {
        router.push("/");
    } else {
        alert("Error occurs. Please try again.")
    }
})


</script>

<style scoped lang="scss">
@import "@/assets/style/_utils.scss";

a {
    i {margin-right: 5px;}  
}

header {
    width: 400px; height: 100%;
    position: fixed;
    background: rgb(242, 242, 242);
    top: 0px; left: 0px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    display: flex;

    a {
        font-family: 'Karla', sans-serif;
        color: rgb(69, 68, 68);
        letter-spacing: 1.1px;
        line-height: 1.5px;
    }
    
    div {
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
    }
}

@media screen and (max-width:1199px) {
    header {
        width: 100%;
        height: 200px;
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 20px;

        div {
            display: grid;
            grid-template-areas: 
                "img h1"
                "img h2"
            ;
            grid-column-gap: 25px;

            img {
                width: 150px; height: 150px;
                border-radius: 50%;
                margin-bottom: 0px;
                box-shadow: 3px 10px 15px rgba(41, 37, 40, 0.2);
                grid-area: img;
            }
            h1 {
                font-weight: bold;
                font-size: 22px;
                font-family: "arial";
                // line-height: 1;
                color: #555;
                margin-bottom: 0px;
                grid-area: h1;
                transform: translateY(50px);
                text-align: left;
            }

            h2 {
                font-weight: normal;
                font-size: 12px;
                font-family: "arial";
                color: #bbb;
                margin-bottom: 0px;
                grid-area: h2;

            }
        }
    }

    
}
        

</style>