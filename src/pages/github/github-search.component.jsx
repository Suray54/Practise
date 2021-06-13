import { connect } from "react-redux";
import React, { Component } from "react";

import "./git.styles.scss";
import GitList from "./github-list.component";
import { fetchUser } from "../../redux/github/git.actions";

export class GitSearch extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { user } = this.state;
    const { fetchUser } = this.props;

    fetchUser(user);

    // fetchUserRequest();
    // fetch(`https://api.github.com/users/${user}`)
    //   .then((response) => {
    //     if (response.status >= 200 && response.status <= 299) {
    //       return response.json();
    //     } else {
    //       throw Error("could not find the user");
    //     }
    //   })
    //   .then((userdetail) => {
    //     fetchUserSuccess(userdetail);
    //   })
    //   .catch((error) => {
    //     fetchUserFailure(error);
    //   });

    this.setState({
      user: "",
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="github">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-2">
            <input
              name="user"
              type="text"
              placeholder="Enter username"
              onChange={this.handleChange}
              value={this.state.user}
              autoComplete="off"
              required
              autoFocus
            />
          </div>
        </form>
        <GitList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (user) => dispatch(fetchUser(user)),
});

export default connect(null, mapDispatchToProps)(GitSearch);
