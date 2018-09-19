import React from "react";

interface IProps {
  submitSucceeded: boolean;
  children: React.ReactNode;
  submitSucceededMessage: React.ReactNode;
  onSubmit: (e: any) => void;
}

const Form = ({
  submitSucceeded,
  submitSucceededMessage,
  children,
  onSubmit,
}: IProps) => (
  <div>
    {submitSucceeded ? (
      submitSucceededMessage
    ) : (
      <form
        onSubmit={onSubmit}
        action=""
      >
        {children}
      </form>
    )}
  </div>
);

export default Form;
