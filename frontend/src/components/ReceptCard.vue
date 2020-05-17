<template>
    <div class="kartice">
        <div class="row">
            <div class="col-sm-8">
                <div class="card">
                    <img class="card-img-top" :src="info.url" alt="slika">
                    <div class="card-body">
                        <h4 class="card-title">{{info.title}}</h4>
      
                        <div v-if="showdetail">
                          <h6 class="card-title">Kategorija: {{info.kategorija}} </h6>
                          <h6 class="card-title">Vrijeme: {{info.vrijeme}} </h6>
                          <h6 class="card-title">Sastojci: </h6>
                          <p>
                            <ul>
                              <li> {{info.sastojci}} </li>
                            </ul>
                          </p>
                          <h6 class="card-title">Priprema:  </h6>
                          <p>
                            {{info.priprema}}
                          </p>
                        </div>
                    </div>
                    <div class="card-footer text-left">
                        <div> Autor: {{ info.email }}</div>
                    </div>
                </div>
          
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import store from '@/store.js'
import { Recepti } from '@/services'
export default {
  props: [ "info","showdetail" ],
  data () {
    return {
      global: store,
    }
  },
  methods: {
    
  
  },
    
  
  computed: {
    
  }
  
}
</script>

<style>
 .text-center {
  color:white;
}
.card-img-top {
  width: 100%;
  object-fit: cover;
  height: 15vw;
}
.kartice {
  margin-top: 120px;
  
}
.col-sm-8{
  margin-left: 190px;
}
</style>