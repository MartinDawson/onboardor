import EmptyPipeline from "./emptyPipeline";
import { compose, withStateHandlers, withHandlers } from "recompose";
import { reduxForm } from "redux-form";
import addPipelineMutation from "./addPipelineMutation";

interface IState {
  isAddingPipeline: boolean;
}

interface IProps {
  organizationId: number;
  memberId?: number;
  togglePipeline: () => void;
}

interface IAddPipelineInput {
  name: string;
}

const handlers = {
  addPipeline: ({ organizationId, memberId, togglePipeline }: IProps) => (input: IAddPipelineInput) => {
    addPipelineMutation({
      organizationId,
      memberId,
      ...input,
    });
    togglePipeline();
  },
};

const stateHandlers = {
  togglePipeline: ({ isAddingPipeline }: IState) => () => ({
    isAddingPipeline: !isAddingPipeline,
  }),
};

export default compose(
  withStateHandlers({ isAddingPipeline: false }, stateHandlers),
  withHandlers(handlers),
  reduxForm({
    form: "addPipeline",
  }),
)(EmptyPipeline);
