import { Theme } from "rebass";
import { FormState } from "redux-form";

export interface IFormState {
  subscribeMailingList: FormState;
  onboardingCreator: FormState;
  [key: string]: any;
}

export interface IStyleProps {
  theme: ITheme;
}

export interface ITheme {
  fonts: {
    sans: string
  };
  breakpoints: [
    768,
    992,
    1200
  ];
  fontWeights: {
    normal: number
    bold: number
  };
  colors: {
    darkGrey: string
    error: string
    grey: string
    lightGrey: string
    primary: string
    primary2: string
    secondary: string
  };
}

export interface IUrlParameter {
  [key: string]: string | number;
}

export interface ILocation {
  pathname: string;
  query: IUrlParameter;
  hash: string;
  state: {
    [key: string]: any
  }
}

export interface IMatch {
  location: ILocation;
}

export interface IRoute {
  router: {
    push: (pathname: string) => void
  };
  error: {
    _error: string[]
  };
  match: IMatch;
  props?: {
    [key: string]: any
    params?: IUrlParameter
    location: ILocation
  };
}

