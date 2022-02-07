import React from "react";
import { connect } from "react-redux";

import "./git.styles.scss";

import { getReduxState } from "utils/common-helper";

const GitList = (props) => {
  const { userDetail, error } = props;

  return userDetail.login ? (
    <div className="user-detail">
      <img src={userDetail.avatar_url} alt="" />
      <p>{userDetail.login} </p>
    </div>
  ) : (
    <p>
      <b>{error.message ? error.message : "Please Search..."}</b>
    </p>
  );
};

const mapStateToProps = (state) => {
  return {
    userDetail: getReduxState(["git", "user"], state),
    error: getReduxState(["git", "error"], state),
  };
};

export default connect(mapStateToProps)(GitList);
