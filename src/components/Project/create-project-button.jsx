import React from "react";
import { Link } from "react-router-dom";
const CreateProjectButton = () => {
  return (
    <div>
      <Link to="/addproject" className="btn btn-lg btn-info">
        Create a Project
      </Link>
    </div>
  );
};

export default CreateProjectButton;
