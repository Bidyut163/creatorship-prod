import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

import routes from '../../routes/routes';

import '../../assets/admin/css/style.css';
import '../../assets/admin/vendors/mdi/css/materialdesignicons.min.css';
import '../../assets/admin/vendors/feather/feather.css';
import '../../assets/admin/vendors/base/vendor.bundle.base.css';
import '../../assets/admin/vendors/font-awesome/css/font-awesome.min.css';
import '../../assets/admin/vendors/jquery-bar-rating/fontawesome-stars-o.css';
import '../../assets/admin/vendors/jquery-bar-rating/fontawesome-stars.css';
// import '../../assets/admin/fonts';
// import '../../assets/admin/images/auth';

// js
// import '../../assets/admin/vendors/base/vendor.bundle.base';
// import '../../assets/admin/js/off-canvas';
// import '../../assets/admin/js/hoverable-collapse';
// import '../../assets/admin/js/template';
// import '../../assets/admin/vendors/chart.js/Chart.min';
// import '../../assets/admin/vendors/jquery-bar-rating/jquery.barrating.min';
// import '../../assets/admin/js/dashboard';

const MasterLayout = () => {
    return (
        <div className="container-scroller">
            <Navbar />

            <div className="container-fluid page-body-wrapper">
                <Sidebar />

                <div className="main-panel">
                    <Switch>
                        {routes.map((route, idx) => {
                            return (
                                route.component && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={(props) => (
                                            <route.component {...props} />
                                        )}
                                    />
                                )
                            );
                        })}
                        <Redirect from="/admin" to="/admin/dashboard" />
                    </Switch>

                    <Footer />
                </div>
                {/* main panel ends */}
            </div>
            {/* body wrapper ends */}
        </div>
        // Container scroller ends
    );
};

export default MasterLayout;
