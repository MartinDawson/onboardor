import { createConnectedRouter, createRender } from "found";
import React from "react";

interface IProps {
  error: {
    status: number
  };
}

export default createConnectedRouter({
  render: createRender({
    renderError: ({ error }: IProps) => (
      <div>
        {error.status === 404 ? 'Not found' : 'Error'}
      </div>
    ),
  }),
});
