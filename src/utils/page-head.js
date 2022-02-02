import React from "react";
import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const PageHead = (props) => {
  const { title } = props;
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
};

PageHead.propTypes = {
  title: PropTypes.string,
};
