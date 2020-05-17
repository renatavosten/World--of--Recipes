<template>
  <div id="app">
    <div class="header">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="navbar fixed-top">
              <router-link class="active" to="/">Početna</router-link>
              <div v-if="authenticated" class="navbar-center">
                <input  class="form-control mr-sm-2" type="search" placeholder="Trazi nesto" aria-label="Search">
              </div>
              <div class="navbar-right">
                <router-link v-if="authenticated" class="nav-link" to="/dodajrecept">Dodaj recept</router-link>
                <router-link v-if="authenticated" class="nav-link" to="/mojprofil">Moj profil</router-link>
                <router-link v-if="authenticated" class="nav-link" to="/postavke">Postavke</router-link>
                <a v-if="authenticated" @click="logout" class="nav-link" href="#">Odjava</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import store from '@/store.js';
export default {
  data() {
    return store;
  },
  methods: {
   logout() {
     firebase.auth().signOut();
   }
  },
created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("User is logged in with email " + user.email);
        this.userEmail = user.email;
        this.authenticated = true;
         db.collection("Korisnici")
          .doc(this.userEmail)
          .get()
          .then(doc => {
              if (doc.exists) {
                console.log("Document data:", doc.data());
                this.username = doc.data().username;
                 
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
              }
          });
        this.userEmail = user.email
        if (this.$route.name !== 'home')
          this.$router.push({name: 'home'}).catch(err => console.log(err))
      }
      else {
        console.log("User is not logged in")
        this.authenticated = false
        if (this.$route.name !== 'pocetna')
          this.$router.push({name: 'pocetna'}).catch(err => console.log(err))
      }
    });
    
    
  }
}
</script>

<style lang="scss">
.navbar {
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgb(13, 18, 41);
  padding: 0px;
}
.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
}
.navbar a:hover {
  background: #ddd;
  color: black;
}
.navbar-right{
  float: right;
}
.nav-link{
color:white;
font-size: 30px;
 }
</style>