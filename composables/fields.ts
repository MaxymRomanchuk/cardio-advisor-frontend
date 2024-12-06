import * as uaLocale from '../assets/locales/ua.json';
import * as enLocale from '../assets/locales/en.json';

export const useFields = () => {
  const config = useRuntimeConfig();
  if(config.public.locale === 'en') {
    return enLocale;
  }
  return uaLocale;
}