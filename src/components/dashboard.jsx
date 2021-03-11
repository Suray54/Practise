import React, { Component } from "react";

import CreateProjectButton from "./Project/create-project-button";
import ProjectItem from "./Project/project-item";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 text-center">Projects</h1>
                <br />
                <CreateProjectButton />
                <br />
                <hr />
              </div>
            </div>
          </div>
        </div>
        <ProjectItem />
      </div>
    );
  }
}

export default Dashboard;
