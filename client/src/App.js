import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

import Landing from './components/frontend/Landing';
import CreatorLogin from './components/frontend/auth/creator/Login';
import CreatorRegister from './components/frontend/auth/creator/Register';
import BusinessLogin from './components/frontend/auth/business/Login';
import BusinessRegister from './components/frontend/auth/business/Register';
// import MasterLayout from './layouts/admin/MasterLayout';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route
                            exact
                            path="/creator/login"
                            component={CreatorLogin}
                        />
                        <Route
                            exact
                            path="/creator/signup"
                            component={CreatorRegister}
                        />
                        <Route
                            exact
                            path="/business/login"
                            component={BusinessLogin}
                        />
                        <Route
                            exact
                            path="/business/signup"
                            component={BusinessRegister}
                        />
                        {/* <Route
                            path="/admin"
                            name="Admin"
                            render={(props) => <MasterLayout {...props} />}
                        /> */}
                        <PrivateRoute path="/admin" name="Admin" />
                    </Switch>
                </Router>
            </div>
        </Provider>
    );
};

export default App;
