import React from "react";
import { Route, Switch } from "react-router-dom";
import Splash from "./splash/splash";
import ModalContainer from "./modal/modal";
import NavBar from "./navbar/navbar";
import CreatePhotoContainer from "./photos/create_photo_container";
import PhotoIndexContainer from "./photos/photo_index_container";
import PhotoShowContainer from "./photos/photo_show_container";
import UserShowContainer from "./users/user_show_container";
import AlbumShowContainer from "./albums/album_show_container";
import AlbumFormContainer from "./albums/album_form_container";

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
        <Route exact path="/users/:userId" component={UserShowContainer} />
        <Route exact path="/albums/new" component={AlbumFormContainer} />
        <Route exact path="/albums/:albumId" component={AlbumShowContainer} />
      </Switch>
    </div>
  )
};

export default App;