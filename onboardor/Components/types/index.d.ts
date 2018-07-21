import { Theme } from "rebass";
import { InjectedFormProps } from "redux-form";

export interface IUrlParameter {
  [key: string]: string | number;
}

export interface IFormState {
  subscribeMailingList: InjectedFormProps;
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
    secondary: string
  };
}

export interface IRoute {
  router: {
    push: (pathname: string) => void
  };
  error: {
    _error: string[]
  };
  match: {
    location: {
      pathname: string;
    }
  };
  props?: {
    [key: string]: any
    params?: IUrlParameter
    location: {
      state: {
        [key: string]: any
      }
    }
  };
}

export interface IMatch {
  location: {
    query: IUrlParameter
  };
}
