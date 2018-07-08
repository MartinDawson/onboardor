import { InjectedFormProps } from 'redux-form';
import { Theme } from 'rebass';

export interface UrlParameter {
  [key: string]: string | number
}

export interface FormState {
  subscribeMailingList: InjectedFormProps
}

export interface ITheme {
  fonts: {
    sans: string
  }
  breakpoints: [
    768,
    992,
    1200
  ]
  fontWeights: {
    normal: number
    bold: number
  }
  colors: {
    darkGrey: string
    error: string
    grey: string
    lightGrey: string
    primary: string
    secondary: string
  }
}

export interface Route {
  router: {
    push: (pathname: string) => void
  }
  error: {
    _error: string[]
  }
  props?: {
    [key: string]: any
    params: UrlParameter
    location: {
      state: {
        [key: string]: any
      }
    }
  }
}

export interface Match {
  location: {
    query: UrlParameter
  }
}
