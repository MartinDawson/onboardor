import { compose, withHandlers, withProps } from "recompose";
import { Field } from "redux-form";

import createFieldValidator from "./createFieldValidator";
import InvisibleRecpatcha from "./invisibleRecaptcha";

interface IProps {
  name: string;
}

export default compose<{}, IProps>(
  withProps(() => ({ component: InvisibleRecpatcha })),
  withHandlers({ validate: createFieldValidator }),
)(Field);
