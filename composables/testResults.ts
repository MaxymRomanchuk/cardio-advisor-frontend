export const useTestResults = () => useState('testResults', () => reactive({
  heartAttack: 0,
  angina: 0,
  stroke: 0,
}));
