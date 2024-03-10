<template>
    <Transition name="fade">
        <ProfileHeader></ProfileHeader>
    </Transition>
    <Transition name="fade">
        <Introduction></Introduction>
    </Transition>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useProfileStore, useChosenProfileStore } from '@/stores/profile-store'
import { storeToRefs } from 'pinia'
import ProfileHeader from '@/components/ProfileHeader.vue'
import Introduction from '@/components/Introduction.vue'

// 초기 로드, 서버 통신, 데이터 받아오기
const profileStore = useProfileStore();
const chosenProfileStore = useChosenProfileStore();

let { isChosen, chosenName } = storeToRefs(chosenProfileStore);

console.log("음.....", isChosen.value, chosenName.value, "뭐지");


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




</style>