import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export const PageHead = (props) => {
  const { title } = props;
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

PageHead.propTypes = {
  title: PropTypes.string,
};
