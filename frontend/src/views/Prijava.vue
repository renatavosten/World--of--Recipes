<template>
    <div class="login">
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <div class="wrapper fadeInDown">
                    <div class="card border-info mb-3">
                        <h1 class="card-header text-info text-center mb-5">Prijava</h1>
                        <div class="card-body">
                            <form @submit.prevent="login">
                                <div v-if="errorMessage" class="aler alert-danger">
                                    <strong>Ups!</strong>
                                    {{ errorMessage }}
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="exampleInputEmail1" >Email:</label>
                                    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" placeholder="Unesite email">
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="exampleInputPassword1">Lozinka:</label>
                                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Unesite lozinku">
                                </div>
                                <p class="card-text text-right">
                                    Nemaš račun?
                                    <router-link to="/registracija">Registriraj se</router-link>
                                </p>
                                <div class="text-center">
                                    <button type="submit" class="button">Prijavi se</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-3"></div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(error => {
        console.log(error);
        this.errorMessage = error.message;
      });
      console.log("Prijava uspješna!");
    }
  }
}
</script>

<style lang="scss">
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top:30px;
  margin-right: 30px;
  
}
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
.button {
  background-color: rgb(71, 170, 216);
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button:hover {
  background-color: rgb(30, 122, 165);
}
.login{
  padding-top: 50px;
}
</style>