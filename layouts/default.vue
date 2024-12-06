<template>
  <div id="layout">
    <NavBar />
    <slot />
    <footer class="text-center">
        Made with Nuxt 3 by Max '
    </footer>
  </div>
</template>

<style>
#layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color:antiquewhite;
}

footer {
  color:azure;
  margin-top: auto;
  background-color: #4c777b;
}
</style>