<script setup lang="ts">
  const title = 'Ваші результати вже готові!'
  const description = 'Всі дані анонімні та будуть назавжди стерті при переході на іншу сторінку.' +
    'Ми не зберігаємо ваших даних, щоб ви не соромилися чесно відповідати!';
  const dataRow = useDataRow();
  const results = useTestResults();
  
  const conditions = {
    eSmoker: computed(() => dataRow.value.ECigaretteUsage === 'Use them every day'),
    insomniac: computed(() => dataRow.value.SleepHours < 6),
    noCheckups: computed(() => dataRow.value.LastCheckupTime !== 'Within past year (anytime less than 12 months ago)'),
    noScans: computed(() => dataRow.value.ChestScan !== 'Yes'),
    noTetanusVac: computed(() => dataRow.value.TetanusLast10Tdap === 'No, did not receive any tetanus shot in the past 10 years'),
    obese: computed(() => dataRow.value.BMI > 30 || dataRow.value.WeightInKilograms > 100),
    smoker: computed(() => dataRow.value.SmokerStatus === 'Current smoker - now smokes every day'),
  };

  function getSuffix(prefix: string, probability: number) {
    if (probability > 0.85) {
      return prefix + 'Настійливо рекомендуємо відвідати сімейного лікаря для підтвердження підозри або профілактики.';
    } else if (probability > 0.65) {
      return prefix + 'Рекомендуємо відвідати сімейного лікаря для оцінки стану серцевосудинної системи.';
    } else {
      return prefix + 'Немає явних ризиків, але не забувайте про регулярні огляди у сімейного лікаря та кардіолога.';
    }
  }

  const noAdvice = computed(() => {
    return !Object.values(conditions).find((condition: ComputedRef<boolean>) => condition.value)
  })

  const heartAttackText = computed(() => getSuffix('Серцевий напад: ', results.value.heartAttack));
  const anginaText = computed(() => getSuffix('Стенокардія: ', results.value.angina));
  const strokeText = computed(() => getSuffix('Інсульт: ', results.value.stroke));
</script>

<template>
  <Heading :title="title" :description="description" />
  <Section title="Загальні рекомендації">
    <h6 class="text-light" v-if="conditions.noCheckups.value">
      Профілактичні дослідження: Рекомендуємо проходити медогляд з консультацією кардіолога щороку.
    </h6>
    <h6 class="text-light" v-if="conditions.noScans.value">
      Профілактичні дослідження: Рекомендуємо проходити флюорографію грудної клітки щороку.
    </h6>
    <h6 class="text-light" v-if="conditions.obese.value">
      Вага та індекс маси тіла: Настійливо рекомендуємо схуднути для зменшення навантаження на серцево-судинну систему
    </h6>
    <h6 class="text-light" v-if="conditions.eSmoker.value">
      Використання засобів альтернативного паління: Рекомендуємо перейти на безнікотинові форми паління, щоб зменшити навантаження на дихальну систему.
    </h6>
    <h6 class="text-light" v-if="conditions.smoker.value">
      Паління: Рекомендуємо припинити або зменшити інтенсивність паління.
    </h6>
    <h6 class="text-light" v-if="conditions.insomniac.value">
      Тривалість сну: Рукомендована тривалість сну 6-8 годин на добу. Якщо не вдається стільки спати - спробуйте збільшити фізичну активність на свіжому повітрі.
    </h6>
    <h6 class="text-light" v-if="conditions.noTetanusVac.value">
      Вакцинація: Настійливо рекомендуємо проходити вакцинацію від правця кожні 10 років.
    </h6>
    <h6 class="text-light" v-if="noAdvice">
      Все чудово! У вас хороший спосіб життя, проте не забувайте про регулярні огляди та вакцинації.
    </h6>
  </Section>
  <Section title="Ризики захворюваності">
    <h6 class="text-light">{{ heartAttackText }}</h6>
    <h6 class="text-light">{{ anginaText }}</h6>
    <h6 class="text-light">{{ strokeText }}</h6>
  </Section>
</template>

<style scoped>
</style>