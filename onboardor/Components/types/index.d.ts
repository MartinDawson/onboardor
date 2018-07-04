import { InjectedFormProps } from 'redux-form';

export interface UrlParameter {
  [key: string]: string | number
}

export interface FormState {
  subscribeMailingList: InjectedFormProps
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
