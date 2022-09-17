import { isNumber } from '../type-guards/is-number';

export const addPx = (value: string | number) => {
  return String(value) + 'px';
};

export const addPxIfNum = (value: string | number) => {
  if (isNumber(value)) {
    return addPx(value);
  } else return value;
};
