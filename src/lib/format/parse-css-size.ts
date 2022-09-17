import { isUndefined } from '../type-guards/is-defined';
import { addPxIfNum } from './add-px';

/**
 * parse padding or margin
 */
export const parseCssSize = (size: string | number | undefined, defaultValue: string | number = 0) => {
  return isUndefined(size) ? defaultValue : addPxIfNum(size);
};
