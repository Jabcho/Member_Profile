import { defineStore, createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import axios from 'axios';


const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);


export const useProfileStore = defineStore('profiles', {
    state: () => {
        return {
            profiles: []
        }
    },
    persist: true,
    actions: {
        async initialize() {
            this.profiles = [];

            try {
                const res = await axios.get("http://localhost:3000/profiles");

                for (let i = 0; i < res.data.length; i++) {
                    this.profiles.push(res.data[i]);
                }

                console.log("초기작업 완료");

            } catch(err) {
                console.log("에러는 : ", err);
            }
        }
    }
})

export const useChosenProfileStore = defineStore('chosenProfiles', {
    state: () => {
        return {
            isChosen: false,
            chosenId: 0,
            chosenName: "",
            chosenJob: "",
            chosenImgSrc: "",
            career: "",
            project: "",
            description: "",
        }
    },
    persist: true,
    actions: {
        async saveChosenInfo(id, name, job, imgSrc) {
            try {
                this.isChosen = true;
                this.chosenId = id;
                this.chosenName = name;
                this.chosenJob = job;
                this.chosenImgSrc = imgSrc;

                console.log("누가 저장되는거? : => ", this.chosenName)

                return true;
            } catch(err) {
                console.log(err);
            }
        },
        async getIntroduction(id, name, job, imgSrc) {
            try {
                await this.saveChosenInfo(id, name, job, imgSrc);

                console.log("저장됨")

                const res = await axios.get('http://localhost:3000/introductions', { params: {
                    "id": id.value
                }})

                
                this.career = res.data[0].career.replace("\n", "\\n");
                this.project = res.data[0].project;
                this.description = res.data[0].description;
                
                console.log("받아옴", this.career)
                
                return true;
            } catch(err) {
                console.log(err);
            }      
        },
        async resetChosenInfo() {
            try {
                this.isChosen = false;
                this.chosenId = 0;
                this.chosenName = "";
                this.chosenJob = "";
                this.chosenImgSrc = "";

                console.log("리셋")

                return true;
            } catch (err) {
                console.log(err);
            }
        }


        
    }
})