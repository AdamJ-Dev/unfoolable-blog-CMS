import { getSupportEmail } from '../../../config/contact/selectors';

export const DEFAULT_ERROR = `Oops! We ran into an error. Try again later. If your issue persists, contact ${getSupportEmail()} for support`;

export const DEFAULT_404 = '404. The resource you are looking for could not be found.';
export const DEFAULT_500 = 'Our server had an issue with that request.';

export const USER_NOT_FOUND = 'User could not be found.';

export const PASSWORDS_DONT_MATCH = "Your passwords don't match.";
