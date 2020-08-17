import React from "react";
import { Link } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import SearhBar from "./searchbar";
import DevLinks from "./dev_links";

const NavBar = (props) => {
  return (
    <nav className="nav-main">
      <div className="constrainer">
        <div className="nav-left">
          <Link className="nav-logo link-white" to={props.currentUser ? "/photos" : "/"}>
            Pictr
          </Link>
          <Link className="nav-home link-white" to="/photos">
            All Photos
          </Link>
          {props.currentUser ? (
            <Link
              className="nav-home link-white"
              to={`/users/${props.currentUser.id}/photos`}
            >
              Home
            </Link>
          ) : null}
        </div>
        {/* <SearhBar /> */}
        <div className="nav-right">
          <DevLinks />
          <GreetingContainer />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
