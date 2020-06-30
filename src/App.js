import React from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Index from "./components/index";
import Jobs from "./components/jobs";
import Blog from "./components/blog";
import configureStore from "./store/configureStore";
import Companies from "./components/companies";
import Login from "./components/login";
import User from "./components/user";
import Logout from "./components/logout";
import ProtectedRoute from "./components/protectedRoute";
import "./App.css";
import JobPost from "./components/jobPost";

const store = configureStore();

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/empleos/:id" component={JobPost} />
            <Route path="/empleos" component={Jobs} />
            <ProtectedRoute path="/empresas" component={Companies} />
            <Route path="/blog" component={Blog} />
            <ProtectedRoute path="/usuario" component={User} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/" component={Index} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
