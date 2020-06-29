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
      <a href="https://github.com/rakinaa" target="_blank" className="dev-link">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/rakin-rouf-6607b21a4/"
        target="_blank"
        className="dev-link second-link"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        href="https://angel.co/u/rakin-rouf"
        target="_blank"
        className="dev-link third-link"
      >
        <FontAwesomeIcon icon={faAngellist} />
      </a>
    </div>
  );
};

export default DevLinks;
