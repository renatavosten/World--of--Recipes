<template>
    <div v-if="store.authenticated">
        
        <div @click="gotoDetails(card)" :key="card.id" v-for="card in cards">
            <ReceptCard :info="card" />
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import { Recepti } from '@/services';
import ReceptCard from '@/components/ReceptCard.vue';
import store from '@/store.js';
export default {
    data() {
        return {
            store,
            cards: [],
            
        };
    },
    
    created() {
        this.fetchRecepti();
    },
    name: 'recepti',
    methods: {
        async fetchRecepti() {
            this.cards = await Recepti.getAll();
            
        },
        gotoDetails(card) {
            console.log("idem u detalje")
            this.$router.push({ path:`recept/${card.id}` });
        }
    },
    components: {
        ReceptCard
    }
};
</script>

<style scoped>
button {
    margin-bottom: 20px;
}
.najpost {
    border-style: dashed
}
</style>