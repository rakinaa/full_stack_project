import React from "react";
import { Route, Switch } from "react-router-dom";
import Splash from "./splash/splash";
import ModalContainer from "./modal/modal";
import NavBar from "./navbar/navbar";
import CreatePhotoContainer from "./photos/create_photo_container";
import PhotoIndexContainer from "./photos/photo_index_container";
import PhotoShowContainer from "./photos/photo_show_container";

const App = () => {
  return (
    <div>
      <ModalContainer />
      <NavBar />
      {/* <div className="spacer"></div> */}
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/photos/new" component={CreatePhotoContainer} />
        <Route exact path="/photos" component={PhotoIndexContainer} />
        <Route exact path="/photos/:photoId" component={PhotoShowContainer} />
      </Switch>
    </div>
  )
};

export default App;