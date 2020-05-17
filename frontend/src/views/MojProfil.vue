<template>
    <div class="mojprofil">
        <div class="row">
            <div class="col-sm-9">
                <div class="card text-center">
                    <h4 class="card-header">Moj profil</h4>
                    <div class="card-body">
                        <router-link to="/favoriti">
                            <button class="button">Favoriti</button>
                        </router-link>
                        <router-link to="/mojirecepti">
                            <button class="button">Moji recepti</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.mojprofil{
    padding-top: 100px;
}
.card-header{
    color: black;
}
.col-sm-9{
    margin-left: 130px;
    
}
</style>