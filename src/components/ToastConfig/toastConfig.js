import InternetConnection from './InternetConnection';
import Success from './Success';
import Error from './Error';
import Info from './Info';
import Common from './Common';

export const toastConfig = {
  common: Common,
  connection: InternetConnection,
  success: Success,
  error: Error,
  info: Info,
};
