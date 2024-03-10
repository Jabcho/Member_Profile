<template>
    <transition name="fade">
        <MainHeader></MainHeader>
    </transition>
    <TransitionGroup name="fade" tag="section" class="profile-cards">
        <!--section class="profile-cards"-->
            <ProfileCard v-for="profile in profiles" :key="profile" :profile="profile"></ProfileCard>
        <!--/section-->
    </TransitionGroup>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useProfileStore, useChosenProfileStore } from '@/stores/profile-store'
import { storeToRefs } from 'pinia'
import MainHeader from '@/components/MainHeader.vue'
import ProfileCard from '@/components/ProfileCard.vue'

// 초기 로드, 서버 통신, 데이터 받아오기
const profileStore = useProfileStore();
const chosenProfileStore = useChosenProfileStore();

// onMounted(() => {
//     profileStore.initialize();
// })

// const { profiles } = storeToRefs(profileStore);

const profiles = computed(() => {
    profileStore.initialize();
    return profileStore.profiles;
})

</script>

<style scoped lang="scss">
// transition 3s는 효과 확인을 위한 것, 나중에 시간 다 줄이고 조정하기

.fade-enter {
    opacity: 0.5;
    transform: skewX(30deg);
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s cubic-bezier(0,1.11,.39,.97);
    transform: skewX(90deg);
}
.fade-leave-to {
    opacity: 0;
}

section.profile-cards {
    margin-left: 400px;
    @media screen and (max-width:1199px) {
        margin-left: 0px;
    }
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 300px));
    justify-content: space-around;
    gap: 30px 7px;

    &.profile-card-appear {
        visibility: visible;
    }
    &.profile-card-disappear:not(.chosen) {
        transition-property: all;
        transition-delay: 2s;
        visibility: hidden;
        animation-name: profile-card-disappear;
        animation-duration: 2s;
        animation-timing-function: linear;
    }
}

</style>