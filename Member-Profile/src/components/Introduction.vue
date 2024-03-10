<template>
    <section class="introduction">
        <article id="career">
            <h1>Career</h1>
            <p>{{ career }}</p>
        </article>
        <article id="project">
            <h1>Project</h1>
            <p>{{ project }}</p>
        </article>
        <article id="description">
            <h1>My Story</h1>
            <p>{{ description }}</p>
        </article>
    </section>
</template>

<script setup>
import { useChosenProfileStore } from '@/stores/profile-store'
import { storeToRefs } from 'pinia'

const chosenProfileStore = useChosenProfileStore();
const { isChosen, career, project, description } = storeToRefs(chosenProfileStore);



</script>

<style lang="scss" scoped>
@import "@/assets/style/_utils.scss";

section.introduction {
    margin-left: 400px;
    @media screen and (max-width:1199px) {
        margin-left: 0px;
    }
    padding: 20px;
    display: grid;
    #career {grid-area: career;}
    #project {grid-area: project;}
    #description {grid-area: description;}

    @include desktop {
        grid-template-areas: 
        "career project"
        "description description"
        ;
        
    }

    @include tablet {
        grid-template-areas: 
        "career project"
        "description description"
        ;
    }

    @include mobile {
        grid-template-areas: 
        "career"
        "project"
        "description"
        ;
    }

    article {
        padding: 20px;
        margin-bottom: 30px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        background: rgba(255, 255, 255, 0.06);
        opacity: 0.7;
        

        h1 {
            font: 20px/1.4 "orbitron";
            letter-spacing: 1px;
        }

        p {
            margin-top: 10px;
            font: 20px/1.8 "arial";
        }
    }
}


</style>
