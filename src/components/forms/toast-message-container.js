import React from "react";

import { toast } from "react-toastify";

export const SuccessMessage = (props) => {
  const { message } = props;

  return (
    <div className="d-flex align-items-center">
      <i className="fa fa-check" />
      <span className="pl-2"> {message}</span>
    </div>
  );
};

export const InfoMessage = (props) => {
  const { message } = props;

  return (
    <div className="d-flex align-items-center">
      <i className="fa fa-check" />
      <span className="pl-2"> {message}</span>
    </div>
  );
};

export const ErrorMessage = (props) => {
  const { message } = props;

  return (
    <div className="d-flex align-items-center">
      <i className="fa fa-times" />
      <span className="pl-2"> {message}</span>
    </div>
  );
};

export const WarnMessage = (props) => {
  const { message } = props;

  return (
    <div className="d-flex align-items-center">
      <i className="fa fa-times" />
      <span className="pl-2"> {message}</span>
    </div>
  );
};

const toasts = {
  success: function (messasge) {
    return toast.success(<SuccessMessage message={messasge} />);
  },

  info: function (messasge) {
    return toast.info(<InfoMessage message={messasge} />);
  },

  error: function (messasge) {
    return toast.error(<ErrorMessage message={messasge} />);
  },

  warn: function (messasge) {
    return toast.warn(<WarnMessage message={messasge} />);
  },
};

export default toasts;
