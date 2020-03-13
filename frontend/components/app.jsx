import React from "react";
import { Route, Switch } from "react-router-dom";
import Splash from "./splash/splash";
import ModalContainer from "./modal/modal";
import CreatePhotoContainer from "./photos/create_photo_container";
import PhotoIndexContainer from "./photos/photo_index_container";
import PhotoShowContainer from "./photos/photo_show_container";
import UserShowContainer from "./users/user_show_container";
import AlbumShowContainer from "./albums/album_show_container";
import AlbumFormContainer from "./albums/album_form_container";
import AlbumIndexContainer from "./albums/album_index_container";
import UserPhotoIndexContainer from "./photos/user_photo_index_container";
import NavBarContainer from "./navbar/navbar_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";


const App = () => {
  return (
    <div>
      <ModalContainer />
      <NavBarContainer />
      {/* <div className="spacer"></div> */}
      <Switch>
        <Route exact path="/" component={Splash} />
        <ProtectedRoute exact path="/photos/new" component={CreatePhotoContainer} />
        <Route exact path="/photos" component={PhotoIndexContainer} />
        <Route exact path="/photos/:photoId" component={PhotoShowContainer} />
        <ProtectedRoute exact path="/albums/new" component={AlbumFormContainer} />
        <Route exact path="/albums/:albumId" component={AlbumShowContainer} />
      </Switch>
      <Route path="/users/:userId" component={UserShowContainer} />
      <Route path="/users/:userId/photos" component={UserPhotoIndexContainer} />
      <Route path="/users/:userId/albums" component={AlbumIndexContainer} />
    </div>
  )
};

export default App;