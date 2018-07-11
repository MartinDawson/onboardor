import React from "react";

interface IProps {
  error?: string;
}

const ValidationError = ({
  error,
}: IProps) => (
  error && (
    <span>
      {error}
    </span>
  )
);

export default ValidationError;
