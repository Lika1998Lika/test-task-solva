export const BASE_URL = 'https://swapi.dev/api/';

export enum AppRoute {
  AppLayout = '/',
  NotFoundScreenPages = '*',
  SignIn = '/login',
  PlanetsPage = '/planets',
  StarshipsPage = '/starships',
  SpeciesPage = '/species',
};


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
};