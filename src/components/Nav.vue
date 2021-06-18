<template>
    <nav id="sectionsNav" class="navbar bg-white fixed-top navbar-expand-lg ">
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
        <div class="container">
            <div class="navbar-translate">
                <a href="/" id="flip" class="navbar-brand custom-brand">
                    Darkess0710
                </a>
                <button type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span><span class="navbar-toggler-icon"></span><span class="navbar-toggler-icon"></span></button>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="button-container nav-item"><a href="https://darkness0710.github.io/" aria-current="page" class="btn btn-primary btn-round btn-block router-link-exact-active router-link-active"><i class="material-icons">view_carousel</i> My Blog </a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'Nav',
    mounted() {
    },
    metaInfo: {
        title: 'Darkess0710 Blog'
    }
};


</script>

<style scoped>

</style>
