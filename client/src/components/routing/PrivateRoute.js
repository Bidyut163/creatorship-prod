import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';

import Spinner from '../../layouts/common/spinner/Spinner';
import MasterLayout from '../../layouts/admin/MasterLayout';

const PrivateRoute = ({
    loadUser,
    auth: { isAuthenticated, loading, user },
    ...rest
}) => {
    useEffect(() => {
        loadUser();
    }, [loadUser]);

    if (loading) {
        return <Spinner />;
    }

    return isAuthenticated ? (
        <Route {...rest} render={(props) => <MasterLayout {...props} />} />
    ) : (
        <Redirect to="/" />
    );
};

const mapStateToProps = (state) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps, { loadUser })(PrivateRoute);
