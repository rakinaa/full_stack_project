import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faAngellist,
} from "@fortawesome/free-brands-svg-icons";

const DevLinks = (props) => {
  return (
    <div className="dev-links">
      <a href="" className="dev-link">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="" className="dev-link second-link">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="" className="dev-link third-link">
        <FontAwesomeIcon icon={faAngellist} />
      </a>
    </div>
  );
};

export default DevLinks;
