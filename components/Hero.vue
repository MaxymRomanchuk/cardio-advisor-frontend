<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container-fluid d-flex py-5 mx-auto flex-column align-items-center" id="homeContainer">

        <div class="container my-lg-5" id="homeText">
            <h1 class="text-center text-shadow text-light fw-bolder">Оцініть своє серце у кілька кліків!</h1>
            <h3 class="text-center text-shadow text-description fw-bold ">
              Пройдіть короткий анонімний тест та дізнайтеся про стан своєї кровоносної системи! Ми не збираємо та не зберігаємо жодних ваших даних, а ще це безкоштовно!
            </h3>
            <p>
                <RouterLink class="btn btn-lg btn-secondary fw-bold mt-5" :to="{ name: 'test' }">
                    Пройти тест
                </RouterLink>
            </p>
        </div>

    </div>
</template>

<style>
    .text-description {
      color: rgb(203, 203, 203);
    }

    #homeContainer {
        flex-grow: 1;
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

    #homeText {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>