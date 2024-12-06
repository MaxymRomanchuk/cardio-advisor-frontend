<script setup lang="ts">
  const config = useRuntimeConfig();
  const testResult = useTestResults();
  const dataRow = useDataRow();
  const isFormSubmitted = ref(false);

  async function onFormSubmit() {
    if (isFormSubmitted.value) {
      isFormSubmitted.value = false;
      return;
    }
    const resp = await $fetch(config.public.backendUrl!, {
      method: 'POST',
      body: JSON.stringify(dataRow.value),
    }) as Record<string, number>
    console.log(resp);
    testResult.value.heartAttack = resp['Heart Attack'];
    testResult.value.angina = resp['Angina'];
    testResult.value.stroke = resp['Stroke'];
    isFormSubmitted.value = true;
  }
</script>

<template>
  <main class="d-flex flex-column align-items-center">
    <QuestionsList v-if="!isFormSubmitted"/>
    <Results v-if="isFormSubmitted"/>
    <button class="btn btn-secondary btn-lg my-3" @click.stop="onFormSubmit()">{{ isFormSubmitted ? 'Спробувати знову' : 'Надіслати' }}</button>
  </main>
</template>

<style scoped>
</style>