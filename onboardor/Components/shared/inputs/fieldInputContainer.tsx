import { compose, withHandlers, withProps } from "recompose";
import { Field } from "redux-form";

import createFieldValidator from "./createFieldValidator";
import FieldInput from "./fieldInput";

interface IProps {
  name: string;
  placeholder?: string;
  type: string;
  validations?: string[];
  required?: boolean;
  [key: string]: any;
}

export default compose<{}, IProps>(
  withHandlers({ validate: createFieldValidator }),
  withProps(() => ({ component: FieldInput })),
)(Field);
