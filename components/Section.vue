<script setup>
  const props = defineProps({
      title: String,
  })
</script>

<template>
  <div class="section col-md-7 col-sm-8 col-10 form-group px-5 py-3 mt-1">
    <h4 class="text-light">{{ props.title }}</h4>
    <hr>
    <div>
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.section {
  background-color: #4c777b;
  border-radius: 5px;
}
</style>