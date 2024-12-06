<script setup lang="ts">
  const props = defineProps({
      title: String,
      description: String,
  })
</script>

<template>
    <div class="container-fluid d-flex py-5 mx-auto flex-column align-items-center background-holder">
        <div class="container my-lg-5 flex-centered" id="homeText">
            <h1 class="text-center text-shadow text-light fw-bolder">{{ props.title }}</h1>
            <h3 class="text-center text-shadow text-description fw-bold ">{{  props.description }}</h3>
        </div>
    </div>
</template>

<style>
    .text-description {
      color: rgb(203, 203, 203);
    }

    .background-holder {
        background-image:  
            linear-gradient(
            rgba(0, 0, 0, 0.25),
            rgba(0, 0, 0, 0.25)
            ),
            url(@/assets/background.jpg);
        background-size: cover;
        background-position: center;
    }

    .text-shadow {
        text-shadow: 0 0 15px black;
    }

    .flex-centered {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>