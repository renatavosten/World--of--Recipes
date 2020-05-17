<template>
    <div class="container">
        <Pocetna />
        <Recepti />
    </div>
    
  
</template>

<script>
import Pocetna from '@/components/Pocetna.vue';
import Recepti from '@/views/Recepti.vue';
export default {
  name: 'home',
  components: {
    Pocetna,
    Recepti
  }
}
</script>

<style lang="scss">
.container {
  padding: 0px;
}
</style>