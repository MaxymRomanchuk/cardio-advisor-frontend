<script setup>
  const title = 'Вітаємо на сторінці тестування!';
  const description = 'Тут ви можете заповнити всі поля, які вважаєте потрібними. Пам\'ятайте, чим більше полів ви заповните, тим точнішим буде результат. Успіхів!';
</script>

<template>
  <Heading :title="title" :description="description" />
  <Section title="Блок 1: Базові питання">
    <Question 
      question="Ваша стать" 
      field="Sex"
      type="select" 
      :options="[{ name: 'Чоловіча', value: 'Male'},{ name: 'Жіноча', value: 'Female'},]"/>
    <Question 
      question="Як Ви оцінюєте власне самопочуття за останній місяць?" 
      field="GeneralHealth"
      type="select" 
      :options="[
        { name: 'Чудово', value: 'Excellent'},
        { name: 'Добре', value: 'Very good'},
        { name: 'Задовільно', value: 'Good'},
        { name: 'Погано', value: 'Fair'},
        { name: 'Дуже погано', value: 'Poor'},
      ]"/>
    <Question 
      question="Який у Вас індекс маси тіла?"
      field="BMI" 
      type="number"
      :precision="0.01"/>
    <Question 
      question="Який у Вас зріст (у метрах)?"
      field="HeightInMeters" 
      type="number"
      :precision="0.01"/>
    <Question 
      question="Яка у Вас вага (у кілограмах)?"
      field="WeightInKilograms" 
      type="number"
      :precision="0.01"/>
    <Question 
      question="До якої расової категорії Ви належите?"
      field="RaceEthnicityCategory"
      type="select"
      :options="[
        { name: 'Світлошкірі', value: 'White only, Non-Hispanic'},
        { name: 'Темношкірі', value: 'Black only, Non-Hispanic'},
        { name: 'Інші', value: 'Other race only, Non-Hispanic'},
      ]"/>
    <Question 
      question="До якої вікової категорії Ви належите?"
      field="AgeCategory" 
      type="select"
      :options="[
        { name: '80+ років', value: 'Age 80 or older'},
        { name: '75-79 років', value: 'Age 75 to 79'},
        { name: '70-74 років', value: 'Age 70 to 74'},
        { name: '65-69 років', value: 'Age 65 to 69'},
        { name: '60-64 років', value: 'Age 60 to 64'},
        { name: '55-59 років', value: 'Age 55 to 59'},
        { name: '50-54 років', value: 'Age 50 to 54'},
        { name: '45-49 років', value: 'Age 45 to 49'},
        { name: '40-44 років', value: 'Age 40 to 44'},
        { name: '35-39 років', value: 'Age 35 to 39'},
        { name: '30-35 років', value: 'Age 30 to 34'},
        { name: '25-29 років', value: 'Age 25 to 29'},
        { name: '18-24 років', value: 'Age 18 to 24'},
      ]"/>
  </Section>
  <Section title="Блок 2: Спосіб життя">
    <Question 
      question="Скільки годин на добу Ви спите (сукупно)?"
      field="SleepHours" 
      type="number"
      :precision="1"/>
    <Question 
      question="Чи займаєтеся Ви регулярними фізичними навантаженнями?"
      field="PhysicalActivities"
      type="select" 
      :options="[{ name: 'Так', value: 'Yes'},{ name: 'Ні', value: 'No'},]"
    />
    <Question 
      question="Скільки днів за останній місяць Ваш фізичний стан був за межами норми?"
      field="PhysicalHealthDays" 
      type="number"
      :precision="1"/>
    <Question 
      question="Скільки днів за останній місяць Ваш ментальний стан був за межами норми?"
      field="MentalHealthDays" 
      type="number"
      :precision="1"/>
  </Section>
  <Section title="Блок 3: Шкідливі звички">
    <Question 
      question="Яке у Вас ставлення до паління?"
      field="SmokerStatus" 
      type="select"
      :options="[
        { name: 'Щодня палю', value: 'Current smoker - now smokes every day'},
        { name: 'Інколи палю', value: 'Current smoker - now smokes some days'},
        { name: 'Колишній курець', value: 'Former smoker'},
        { name: 'Ніколи не палив(ла)', value: 'Never smoked'},
      ]"/>
    <Question 
      question="Чи користувалися Ви засобами альтернативного паління (електронні цигарки, вейп, тощо)?"
      field="ECigaretteUsage" 
      type="select"
      :options="[
        { name: 'Ні', value: 'Never used e-cigarettes in my entire life'},
        { name: 'Так, але кинув палити', value: 'Not at all (right now)'},
        { name: 'Так, інколи користуюся', value: 'Use them some days'},
        { name: 'Так, користуюся ними щодня', value: 'Use them every day'},
      ]"/>
    <Question 
      question="Чи вживаєте Ви алкоголь?"
      field="AlcoholDrinkers" 
      type="select"
      :options="[
        { name: 'Так', value: 'Yes'},
        { name: 'Ні', value: 'No'},
      ]"/>
  </Section>
  <Section title="Блок 4: Медична історія">
    <Question 
      question="Коли востаннє Ви проходили медогляд (з консультацією кардіолога)?"
      field="LastCheckupTime"
      type="select" 
      :options="[
        { name: 'Впродовж останніх 12 місяців', value: 'Within past year (anytime less than 12 months ago)'},
        { name: 'Впродовж останніх 2 років', value: 'Within past 2 years (1 year but less than 2 years ago)'},
        { name: 'Впродовж останніх 5 років', value: 'Within past 5 years (2 years but less than 5 years ago)'},
        { name: 'Давніше ніж 5 років тому', value: '5 or more years ago'},
        ]"/>
    <Question 
      question="Чи проходили Ви МРТ чи КТ грудної клітки впродовж останнього року?"
      field="ChestScan" 
      type="select"
      :options="[
        { name: 'Так', value: 'Yes'},
        { name: 'Ні', value: 'No'},
      ]"/>
    <Question 
      question="Чи проходили Ви тестування на ВІЛ/СНІД впродовж останнього року?"
      field="HIVTesting" 
      type="select"
      :options="[
        { name: 'Так', value: 'Yes'},
        { name: 'Ні', value: 'No'},
      ]"/>
    <Question 
      question="Чи проходили вакцинацію від грипу впродовж останнього року?"
      field="FluVaxLast12" 
      type="select"
      :options="[
        { name: 'Так', value: 'Yes'},
        { name: 'Ні', value: 'No'},
      ]"/>
    <Question 
      question="Чи проходили Ви вакцинацію від пневмококової інфекції?"
      field="PneumoVaxEver" 
      type="select"
      :options="[
        { name: 'Так', value: 'Yes'},
        { name: 'Ні', value: 'No'},
      ]"/>
    <Question 
      question="Чи проходили Ви вакцинацію від правця впродовж останніх 10 років?"
      field="TetanusLast10Tdap" 
      type="select"
      :options="[
        { name: 'Так', value: 'Yes, received tetanus shot but not sure what type'},
        { name: 'Ні', value: 'No, did not receive any tetanus shot in the past 10 years'},
      ]"/>
    <Question 
      question="Чи чи хворіли Ви на COVID-19?"
      field="CovidPos" 
      type="select"
      :options="[
        { name: 'Так', value: 'Yes'},
        { name: 'Ні', value: 'No'},
      ]"/>
    <Question 
      question="Чи втрачали Ви корінні зуби (з урахуванням зубів, в яких видалено нерви)?" 
      field="RemovedTeeth"
      type="select" 
      :options="[
        { name: 'Ні', value: 'None of them'},
        { name: 'Так (1-5)', value: '1 to 5'},
        { name: 'Так (6 і більше), але не всі', value: '6 or more, but not all'},
        { name: 'Так, всі', value: 'All'},
      ]"/>
  </Section>
  <Section title="Блок 5: Хвороби та патологічні стани">
    <Question 
      question="Чи був у Вас колись рак шкіри?"
      field="HadSkinCancer"
      type="select" 
      :options="[
        { name: 'Так', value: 'Yes'},
        { name: 'Ні', value: 'No'},
      ]"/>
    <Question 
      question="Чи було у Вас колись Хронічне обструктивне захворювання легень?"
      field="HadCOPD" 
      type="select" 
      :options="[
        { name: 'Так', value: 'Yes'},
        { name: 'Ні', value: 'No'},
      ]"/>
    <Question 
      question="Чи були у Вас депресивні розлади?"
      field="HadDepressiveDisorder" 
      type="select"
      :options="[
        { name: 'Так', value: 'Yes'},
        { name: 'Ні', value: 'No'},
      ]"/>
    <Question 
      question="Чи були у Вас захворювання нирок?"
      field="HadKidneyDisease" 
      type="select"
      :options="[
        { name: 'Так', value: 'Yes'},
        { name: 'Ні', value: 'No'},
      ]"/>
    <Question 
      question="Чи був у Вас артрит?"
      field="HadArthritis" 
      type="select"
      :options="[
        { name: 'Так', value: 'Yes'},
        { name: 'Ні', value: 'No'},
      ]"/>
    <Question 
      question="Чи був у Вас діабет?"
      field="HadDiabetes" 
      type="select"
      :options="[
        { name: 'Так', value: 'Yes'},
        { name: 'Так, але лише під час вагітності', value: 'Yes, but only during pregnancy (female)'},
        { name: 'Ні', value: 'No'},
        { name: 'Ні, але були ознаки', value: 'No, pre-diabetes or borderline diabetes'},
      ]"/>
    <Question 
      question="Чи були у Вас розлади слуху?"
      field="DeafOrHardHearing" 
      type="select"
      :options="[
        { name: 'Так', value: 'Yes'},
        { name: 'Ні', value: 'No'},
      ]"/>
    <Question 
      question="Чи були у Вас розлади зору?"
      field="BlindOrVisionDifficulty" 
      type="select"
      :options="[
        { name: 'Так', value: 'Yes'},
        { name: 'Ні', value: 'No'},
      ]"/>
    <Question 
      question="Чи були у Вас проблеми з концентрацією?"
      field="DifficultyConcentrating"
      type="select"
      :options="[
        { name: 'Так', value: 'Yes'},
        { name: 'Ні', value: 'No'},
      ]"/>
    <Question 
      question="Чи були у Вас складнощі при ходьбі?"
      field="DifficultyWalking" 
      type="select"
      :options="[
        { name: 'Так', value: 'Yes'},
        { name: 'Ні', value: 'No'},
      ]"/>
    <Question 
      question="Чи були у Вас складнощі з обслуговуванням своїх базових потреб (одягання, гігієна, тощо)?"
      field="DifficultyDressingBathing" 
      type="select"
      :options="[
        { name: 'Так', value: 'Yes'},
        { name: 'Ні', value: 'No'},
      ]"/>
    <Question 
      question="Чи були у Вас складнощі з виконанням типових доручень (наприклад похід за продуктами)?"
      field="DifficultyErrands" 
      type="select"
      :options="[
        { name: 'Так', value: 'Yes'},
        { name: 'Ні', value: 'No'},
      ]"/>
  </Section>
</template>

<style>
</style>