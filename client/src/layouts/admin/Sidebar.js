import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../common/spinner/Spinner';
import { logout } from '../../actions/auth';

const Sidebar = ({ auth: { user, userType, loading }, logout }) => {
    if (loading || !user) {
        return <Spinner />;
    }
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <div className="user-profile">
                <div className="user-image">
                    {userType === 'CREATOR' ? (
                        <img
                            src={require('../../assets/admin/images/faces/face28.png')}
                        />
                    ) : (
                        <img
                            src={require('../../assets/admin/images/faces/face28.png')}
                        />
                    )}
                </div>
                <div className="user-name">{user.fullname}</div>
                <div className="user-designation">{userType}</div>
            </div>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/admin/dashboard">
                        <i className="icon-box menu-icon"></i>
                        <span className="menu-title">Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/admin/businesses">
                        <i className="icon-disc menu-icon"></i>
                        <span className="menu-title">Businesses</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin/creators">
                        <i className="icon-file menu-icon"></i>
                        <span className="menu-title">Creators</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <a onClick={logout} className="nav-link" href="#!">
                        <i className="icon-head menu-icon"></i>
                        <span className="menu-title">Sign Out</span>
                    </a>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="pages/charts/chartjs.html">
                        <i className="icon-pie-graph menu-icon"></i>
                        <span className="menu-title">Charts</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        to="pages/tables/basic-table.html"
                    >
                        <i className="icon-command menu-icon"></i>
                        <span className="menu-title">Tables</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        to="pages/icons/feather-icons.html"
                    >
                        <i className="icon-help menu-icon"></i>
                        <span className="menu-title">Icons</span>
                    </Link>
                </li> */}

                {/* <li className="nav-item">
                    <Link className="nav-link" to="docs/documentation.html">
                        <i className="icon-book menu-icon"></i>
                        <span className="menu-title">Documentation</span>
                    </Link>
                </li> */}
            </ul>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps, { logout })(Sidebar);
