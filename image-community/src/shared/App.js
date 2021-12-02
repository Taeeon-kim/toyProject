import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Header from "../components/Header";
import { Grid, Button } from "../elements";
import Signup from "../pages/Signup";
import PostWrite from "../pages/PostWrite";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { apiKey } from "../shared/firebase";
import Permit from "./Permit";
import CommentList from "../components/CommentList";
import PostDetail from "../pages/PostDetail";
import Search from "./Search"
import Notification from "../pages/Notification";

function App() {
  const dispatch = useDispatch();
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
        <Permit>
          <Route path="/" exact component={PostList} />
        </Permit>
          <Route path="/login" exact component={Login} />
          <Route path="/write" exact component={PostWrite} />
          <Route path="/write/:id" exact component={PostWrite} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/post/:id" exact component={PostDetail} />
          <Route path="/search" exact component={Search} />
          <Route path="/noti" exact component={Notification} />
          
        </ConnectedRouter>
      </Grid>
      <Permit>
        <Button is_float text="+" _onClick={()=> history.push("/write")}>
          {""}
        </Button>
      </Permit>
    </React.Fragment>
  );
}

export default App;
