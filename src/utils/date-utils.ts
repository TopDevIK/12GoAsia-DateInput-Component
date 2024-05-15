// date-utils.ts
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export const browserLocale = navigator.language;

export const getDatePlaceholder = () => {
  return browserLocale === 'en-US' ? 'MM/DD/YYYY' : 'DD/MM/YYYY';
};

export const formatToISO = (dateStr: string, format: string) => {
  return dayjs(dateStr, format, true).isValid() ? dayjs(dateStr, format).format('YYYY-MM-DD') : null;
};

export const formatDateFromISO = (isoStr: string, format: string) => {
  return dayjs(isoStr).format(format);
};
