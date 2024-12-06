<script setup lang="ts">
  const props = defineProps<{
      question: string;
      field: string;
      type: 'select' | 'number' | 'text';
      options?: { name: string, value: string }[];
      precision?: 1 | 0.01;
  }>();

  const dataRow = useDataRow();
  function onChange() {
    const row = dataRow.value as Record<string, string | number>;
    row[props.field] = response.value;
  }

  const response = ref(props.type === 'number' ? 1 : '');
</script>

<template>
  <div class="question-item">
    <h5 class="text-light">{{ props.question }}</h5>
    <div class="input-group">

      <input v-if="props.type === 'text'" type="text" class="form-control" v-model="response" @change="onChange()">
      <input v-if="props.type === 'number'" type="number" :step="props.precision || 1" class="form-control" v-model="response" @change="onChange()">
      <select v-if="props.type === 'select'" :name="props.field" class="form-control select-input-bg" @change="onChange()" v-model="response">
        <option value="">Не обрано</option>
        <option v-for="opt in props.options" :value="opt.value">{{ opt.name }}</option>
      </select>
    </div>

  </div>
</template>

<style scoped>
.select-input-bg {
  background-color: aliceblue;
}
</style>