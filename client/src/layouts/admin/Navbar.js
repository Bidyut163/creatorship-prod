import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

const Navbar = ({
    profile: { profile, loading },
    auth: { userType },
    getCurrentProfile,
}) => {
    const updateProfileLink =
        profile === null ? 'create-profile' : 'edit-profile';

    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <Link className="navbar-brand brand-logo" to="index.html">
                    <img
                        src={
                            require('../../assets/admin/images/logo.svg')
                                .default
                        }
                        style={{ height: '50px' }}
                        alt="logo"
                    />
                </Link>
                <Link className="navbar-brand brand-logo-mini" to="index.html">
                    <img
                        src={
                            require('../../assets/admin/images/logo-mini.svg')
                                .default
                        }
                        alt="logo"
                    />
                </Link>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <button
                    className="navbar-toggler navbar-toggler align-self-center"
                    type="button"
                    data-toggle="minimize"
                >
                    <span className="icon-menu"></span>
                </button>
                <ul className="navbar-nav mr-lg-2">
                    <li className="nav-item nav-search d-none d-lg-block">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="search">
                                    <i className="icon-search"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Businesses.."
                                aria-label="search"
                                aria-describedby="search"
                            />
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item dropdown d-lg-flex d-none">
                        {userType === 'CREATOR' ? (
                            <Link
                                to={`/admin/creator/${updateProfileLink}`}
                                type="button"
                                className="btn btn-info font-weight-bold"
                            >
                                + Update Profile
                            </Link>
                        ) : (
                            <Link
                                to={`/admin/business/${updateProfileLink}`}
                                type="button"
                                className="btn btn-info font-weight-bold"
                            >
                                + Update Profile
                            </Link>
                        )}
                    </li>
                    <li className="nav-item dropdown d-flex">
                        <Link
                            className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                            id="messageDropdown"
                            to="#"
                            data-toggle="dropdown"
                        >
                            <i className="icon-mail mx-0"></i>
                        </Link>
                        <div
                            className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                            aria-labelledby="messageDropdown"
                        >
                            <p className="mb-0 font-weight-normal float-left dropdown-header">
                                Messages
                            </p>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <img
                                        src={require('../../assets/admin/images/faces/face4.jpg')}
                                        alt="image"
                                        className="profile-pic"
                                    />
                                </div>
                                <div className="preview-item-content flex-grow">
                                    <h6 className="preview-subject ellipsis font-weight-normal">
                                        David Grey
                                    </h6>
                                    <p className="font-weight-light small-text text-muted mb-0">
                                        The meeting is cancelled
                                    </p>
                                </div>
                            </a>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <img
                                        src={require('../../assets/admin/images/faces/face2.jpg')}
                                        alt="image"
                                        className="profile-pic"
                                    />
                                </div>
                                <div className="preview-item-content flex-grow">
                                    <h6 className="preview-subject ellipsis font-weight-normal">
                                        Tim Cook
                                    </h6>
                                    <p className="font-weight-light small-text text-muted mb-0">
                                        New product launch
                                    </p>
                                </div>
                            </a>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <img
                                        src={require('../../assets/admin/images/faces/face3.jpg')}
                                        alt="image"
                                        className="profile-pic"
                                    />
                                </div>
                                <div className="preview-item-content flex-grow">
                                    <h6 className="preview-subject ellipsis font-weight-normal">
                                        {' '}
                                        Johnson
                                    </h6>
                                    <p className="font-weight-light small-text text-muted mb-0">
                                        Upcoming board meeting
                                    </p>
                                </div>
                            </a>
                        </div>
                    </li>
                    {/* <li className="nav-item dropdown d-flex mr-4 ">
                        <Link
                            className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center"
                            id="notificationDropdown"
                            to="#"
                            data-toggle="dropdown"
                        >
                            <i className="icon-cog"></i>
                        </Link>
                        <div
                            className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                            aria-labelledby="notificationDropdown"
                        >
                            <p className="mb-0 font-weight-normal float-left dropdown-header">
                                Settings
                            </p>
                            <Link className="dropdown-item preview-item">
                                <i className="icon-head"></i> Profile
                            </Link>
                            <Link className="dropdown-item preview-item">
                                <i className="icon-inbox"></i> Logout
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown mr-4 d-lg-flex d-none">
                        <Link
                            className="nav-link count-indicatord-flex align-item s-center justify-content-center"
                            to="#"
                        >
                            <i className="icon-grid"></i>
                        </Link>
                    </li> */}
                </ul>
                <button
                    className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                    type="button"
                    data-toggle="offcanvas"
                >
                    <span className="icon-menu"></span>
                </button>
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return { auth: state.auth, profile: state.profile };
};

export default connect(mapStateToProps, { getCurrentProfile })(Navbar);
