import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { showErrors } from "../../redux/selector/error-selector";
import { createProject } from "../../redux/actions/project-actions";

class AddProject extends Component {
  constructor() {
    super();

    this.state = {
      projectName: "",
      projectIdentifier: "",
      description: "",
      start_date: "",
      end_date: "",
      errors: {},
    };
  }
  componentDidUpdate = (prevProps) => {
    if (this.props.showErrors !== prevProps.showErrors) {
      return this.setState({
        errors: this.props.showErrors,
      });
    }
    console.log(this.state.errors);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ errors: {} });
  };

  onSubmit = (e) => {
    const { createProject } = this.props;
    e.preventDefault();
    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
    };
    createProject(newProject, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 mx-auto">
              <h5 className="display-4 text-center">Create Project form</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={
                      errors.projectName
                        ? " form-control form-control-lg border-danger"
                        : "form-control form-control-lg"
                    }
                    placeholder="Project Name"
                    name="projectName"
                    value={this.state.projectName}
                    onChange={this.onChange}
                  />
                  {errors.projectName && (
                    <small className="text-danger">{errors.projectName}</small>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={
                      errors.projectIdentifier
                        ? " form-control form-control-lg border-danger"
                        : "form-control form-control-lg"
                    }
                    placeholder="Unique Project ID"
                    name="projectIdentifier"
                    value={this.state.projectIdentifier}
                    onChange={this.onChange}
                  />
                  {errors.projectIdentifier && (
                    <small className="text-danger">
                      {errors.projectIdentifier}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <textarea
                    className={
                      errors.description
                        ? " form-control form-control-lg border-danger"
                        : "form-control form-control-lg"
                    }
                    placeholder="Project Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                  {errors.description && (
                    <small className="text-danger">{errors.description}</small>
                  )}
                </div>
                <h6>Start Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="start_date"
                    value={this.state.start_date}
                    onChange={this.onChange}
                  />
                </div>
                <h6>Estimated End Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="end_date"
                    value={this.state.end_date}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  showErrors: PropTypes.object.isRequired,
};
const mapStateToProps = createStructuredSelector({
  showErrors: showErrors,
});

const mapDispatchToProps = (dispatch) => ({
  createProject: (project, history) =>
    dispatch(createProject(project, history)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
