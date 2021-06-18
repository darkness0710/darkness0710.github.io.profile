<template>
    <div class="main main-raised mt-100">
        <div class="profile-content">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 ml-auto mr-auto">
                        <div class="profile">
                            <div class="avatar">
                                <img src="https://st4.depositphotos.com/4329009/19956/v/380/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg" alt="Circle Image" class="img-raised rounded-circle img-fluid">
                            </div>
                            <div class="name">
                                <h3 class="title">Darkness0710</h3>
                                <h6>Developer</h6>
                                <a href="#pablo" class="btn btn-just-icon btn-link btn-facebook"><i class="fa fa-facebook"></i></a>
                                <a href="#pablo" class="btn btn-just-icon btn-link btn-twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#pablo" class="btn btn-just-icon btn-link btn-github"><i class="fa fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="cards" class="cd-section">
            <div class="cards" id="morphingCards">
                <div class="container">
                    <div class="title">
                        <h3 id="rotatingCards">Demo with skills</h3>
                    </div>
                    <div class="row">
                        <div class="col-md-6 ml-auto mr-auto">
                            <div class="rotating-card-container">
                                <div class="card card-rotate">
                                    <div class="front">
                                        <div class="card-body">
                                            <h5 class="card-category card-category-social text-success">
                                                <i class="fa fa-shopping-cart"></i> OusayShop
                                            </h5>
                                            <h4 class="card-title">
                                                <a href="#pablo">Shoppping pet project (SPA)</a>
                                            </h4>
                                            <p class="card-description">
                                                Programming languages: Vue CLI (Vue 3)<br>
                                                <br>
                                                <br>
                                                <br>
                                                <br>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="back">
                                        <div class="card-body">
                                            <div class="footer text-center">
                                                <a href="https://ousayshop.github.io/" class="btn btn-rose btn-round" target="_blank">
                                                    <i class="material-icons">subject</i> Demo
                                                </a>
                                                <!-- <a href="#pablo" class="btn btn-rose btn-round">
                                                    <i class="fa fa-github"></i> Link GitHub
                                                </a> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 ml-auto mr-auto">
                            <div class="rotating-card-container">
                                <div class="card card-rotate">
                                    <div class="front">
                                        <div class="card-body">
                                            <h5 class="card-category card-category-social text-success">
                                                <i class="fa fa-file"></i> Demo
                                            </h5>
                                            <h4 class="card-title">
                                                <a href="#pablo">Example Crud List</a>
                                            </h4>
                                            <p class="card-description">
                                                Programming languages:<br>
                                                Laravel8<br>
                                                VueJs<br>
                                                VueX<br>
                                                Json Web Token<br>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="back">
                                        <div class="card-body">
                                            <div class="footer text-center">
                                               <!--  <a href="https://ousayshop.github.io/" class="btn btn-rose btn-round" target="_blank">
                                                    <i class="material-icons">subject</i> Demo
                                                </a> -->
                                                <a href="https://github.com/darkness0710/vuex-laravel/tree/master" class="btn btn-rose btn-round" target="_blank">
                                                    <i class="fa fa-github"></i> Link GitHub
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="description text-center">
                <p>&nbsp; </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
  	console.log('???');
  }
};
</script>

<style>
	.mt-100 {
		margin-top: 100px !important;
	}

	.mb-minus-100 {
		margin-bottom: -100px !important;
	}
</style>
