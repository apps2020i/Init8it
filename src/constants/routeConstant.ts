export interface RouteInterface {
  [index: string]: string;
}

export const ROUTES = {
  login: 'Login',
  forgotPassword: 'ForgotPassword',
  home: 'Home',
  details: 'Details',
  splash: 'Splash',
  auth: 'Auth',
  app: 'App',
};

export const MODALS = {
  loader: 'Loader',
  network: 'Network',
  confirmation: 'Confirmation',
  alertMessage: 'AlertMessage',
};
