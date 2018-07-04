import { createConnectedRouter, createRender } from "found";

interface IProps {
  error: {
    status: number
    data: number,
  };
  router: any;
}

const RenderError = ({ error, router }: IProps) => {
  router.replace({
    pathname: `/error/${error.status}`,
    state: {
      error: error.data,
    },
  });
};

export default createConnectedRouter({
  render: createRender({
    renderError: RenderError,
  }),
});
