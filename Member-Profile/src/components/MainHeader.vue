<template>
    <header>
        <h1>MEMBERS</h1>
        <ul>
            <li>
                <a href="#">Add New Member</a>
                <span>→</span>
            </li>
            <li>
                <a href="#">Edit My Profile</a>
                <span>→</span>
            </li>
        </ul>
    </header>
</template>

<script setup>
import { useProfileStore, useChosenProfileStore } from '@/stores/profile-store'
import { storeToRefs } from 'pinia'

const chosenProfileStore = useChosenProfileStore();
let { isChosen } = storeToRefs(chosenProfileStore);

</script>

<style scoped lang="scss">

header {
    width: 400px; height: 100%;
    background: linear-gradient(45deg, #b8afaf, #383737);
    position: fixed;
    top: 0px; left: 0px;

    h1 {
        font: bold 50px/0.8 'orbitron';
        color: #fff;
        position: absolute;
        left: 0; top: 50%;
        width: 100%;
        text-align: center;
        transform: translateY(-300%);   

        &::before {
            content: "JABCHO Co.";
            display: block;
            font: 14px/1.3 'orbitron';
            color: #fff;
            letter-spacing: 2px;
            position: absolute;
            right: 40px; top: 50%;
            transform: translateY(350%);
            opacity: 0.8;
        }
        &::after {
            content: "";
            display: block;
            width: 200px;
            height: 2px;
            background: #fff;
            margin-top: 30px;
            position: absolute;
            right: 40px;
        }
    }

    ul {
        position: absolute;
        width: 100%;

        left: 0; bottom: 80px;
        text-align: right;

        li {
            width: 100%;
            padding-right: 20px;
            margin-bottom: 10px;

            a {
                font-size: 20px;
                color: #fff;
                opacity: 0.7;
                transform: scale(0.7);
            }

            span {
                font-size: 20px;
                color: #fff;
                margin-left: 10px;
            }
        }
    }

}

@media screen and (max-width:1199px) {
    header {
        width: 100%;
        height: 200px;
        position: relative;
        display: flex;

        h1 {
            font: bold 40px/1 "orbitron";
            transform: translateY(-50%);

            &::before {
                content: "JABCHO Co.";
                display: block;
                font: 14px/1.3 'orbitron';
                color: #fff;
                letter-spacing: 2px;
                position: absolute;
                left: 0px; top: 0px;
                transform: translate(10px, 350%);
                text-align: center;
                opacity: 0.8;
            }
            &::after {
                display: none;
            }
        }

        ul {
            transform: translateY(120%);

            li {
                margin-right: 20px;
                margin-bottom: 0px;

                a {
                    font-size: 15px;
                    span {
                        display: none;
                    }
                }
            }

        }
    }
    
}



</style>