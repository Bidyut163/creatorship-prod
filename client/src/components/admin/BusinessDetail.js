import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBusinessProfileById } from '../../actions/profile';
import Spinner from '../../layouts/common/spinner/Spinner';

import NoProfileFound from './profile/NoProfileFound';

const BusinessDetail = ({
    match,
    getBusinessProfileById,
    profile: { profile, loading },
    auth: { user },
}) => {
    const d = new Date();
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    let year = d.getFullYear();
    let month = months[d.getMonth()];
    let day = d.getDate();

    let date = `${day} ${month}, ${year}`;

    useEffect(() => {
        const { businessId } = match.params;

        getBusinessProfileById(businessId);
    }, []);

    if (loading) return <Spinner />;

    if (!profile)
        return (
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-sm-12 mb-4 mb-xl-0">
                        <h4 className="font-weight-bold text-dark">
                            Hi, welcome back!
                        </h4>
                        <p className="font-weight-normal mb-2 text-muted">
                            {date}
                        </p>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-xl-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <NoProfileFound />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    return (
        <div className="content-wrapper">
            <div className="row">
                <div className="col-sm-12 mb-4 mb-xl-0">
                    <h4 className="font-weight-bold text-dark">
                        Hi, welcome back!
                    </h4>
                    <p className="font-weight-normal mb-2 text-muted">{date}</p>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-xl-4 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img
                                    src={require('../../assets/admin/images/faces/business.png')}
                                    alt="image"
                                    className="rounded-circle"
                                    width="150"
                                />

                                <div className="mt-3">
                                    <h4>{profile.user.fullname}</h4>
                                    <p className="text-muted mb-1">Business</p>
                                    <p className="text-muted font-size-sm">
                                        {profile.address}
                                    </p>

                                    <button className="btn btn-primary">
                                        Connect
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Business Details</h4>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="traffic-source-legend">
                                        <div className="d-flex justify-content-between mb-1 mt-2">
                                            <div className="font-weight-bold">
                                                SOURCE
                                            </div>
                                            <div className="font-weight-bold">
                                                Details
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between legend-label">
                                            <div>
                                                <span className="bg-info"></span>
                                                Company
                                            </div>
                                            <div>{profile.user.fullname}</div>
                                        </div>
                                        <div className="d-flex justify-content-between legend-label">
                                            <div>
                                                <span className="bg-info"></span>
                                                Company Website
                                            </div>
                                            <div>{profile.website}</div>
                                        </div>
                                        <div className="d-flex justify-content-between legend-label">
                                            <div>
                                                <span className="bg-info"></span>
                                                Email Address
                                            </div>
                                            <div>{profile.email}</div>
                                        </div>

                                        <div className="d-flex justify-content-between legend-label">
                                            <div>
                                                <span className="bg-info"></span>
                                                Contact Number
                                            </div>
                                            <div>{profile.phone}</div>
                                        </div>

                                        <div className="d-flex justify-content-between legend-label">
                                            <div>
                                                <span className="bg-info"></span>
                                                Creator Required
                                            </div>
                                            <div>{profile.creatorReq}</div>
                                        </div>

                                        <div className="d-flex justify-content-between legend-label">
                                            <div>
                                                <span className="bg-info"></span>
                                                Address
                                            </div>
                                            <div>{profile.address}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-9 grid-margin-lg-0 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">About Business</h4>
                            <div className="mt-3">
                                <h5 className="card-title">About yourself</h5>
                                <p className="mt-3">{profile.description}</p>
                            </div>
                            <div className="mt-3">
                                <h5 className="card-title">
                                    How creators can help you
                                </h5>
                                <p className="mt-3">{profile.helpReq}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 grid-margin-lg-0 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title mb-3">Overall rating</h4>
                            <div className="d-flex">
                                <div>
                                    <h4 className="text-dark font-weight-bold mb-2 mr-2">
                                        4.3
                                    </h4>
                                </div>
                                <div>
                                    <select
                                        id="over-all-rating"
                                        name="rating"
                                        autoComplete="off"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                            <p className="mb-4">Based on 186 reviews</p>
                            <div className="row">
                                <div className="col-sm-2 pr-0">
                                    <div className="d-flex">
                                        <div>
                                            <div className="text-dark font-weight-bold mb-2 mr-2">
                                                5
                                            </div>
                                        </div>
                                        <div>
                                            <i className="fa fa-star text-warning"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-9 pl-2">
                                    <div className="row">
                                        <div className="col-sm-10">
                                            <div className="progress progress-lg mt-1">
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{
                                                        width: '80%',
                                                    }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="col-sm-2 p-lg-0">
                                            80%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-2 pr-0">
                                    <div className="d-flex">
                                        <div>
                                            <div className="text-dark font-weight-bold mb-2 mr-2">
                                                4
                                            </div>
                                        </div>
                                        <div>
                                            <i className="fa fa-star text-warning"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-9 pl-2">
                                    <div className="row">
                                        <div className="col-sm-10">
                                            <div className="progress progress-lg mt-1">
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{
                                                        width: '45%',
                                                    }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="col-sm-2 p-lg-0">
                                            45%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-2 pr-0">
                                    <div className="d-flex">
                                        <div>
                                            <div className="text-dark font-weight-bold mb-2 mr-2">
                                                3
                                            </div>
                                        </div>
                                        <div>
                                            <i className="fa fa-star text-warning"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-9 pl-2">
                                    <div className="row">
                                        <div className="col-sm-10">
                                            <div className="progress progress-lg mt-1">
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{
                                                        width: '30%',
                                                    }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="col-sm-2 p-lg-0">
                                            30%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-2 pr-0">
                                    <div className="d-flex">
                                        <div>
                                            <div className="text-dark font-weight-bold mb-2 mr-2">
                                                2
                                            </div>
                                        </div>
                                        <div>
                                            <i className="fa fa-star text-warning"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-9 pl-2">
                                    <div className="row">
                                        <div className="col-sm-10">
                                            <div className="progress progress-lg mt-1">
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{
                                                        width: '8%',
                                                    }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="col-sm-2 p-lg-0">
                                            8%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-2 pr-0">
                                    <div className="d-flex">
                                        <div>
                                            <div className="text-dark font-weight-bold mb-2 mr-2">
                                                5
                                            </div>
                                        </div>
                                        <div>
                                            <i className="fa fa-star text-warning"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-9 pl-2">
                                    <div className="row">
                                        <div className="col-sm-10">
                                            <div className="progress progress-lg mt-1">
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{
                                                        width: '1%',
                                                    }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="col-sm-2 p-lg-0">
                                            1%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <p className="mb-2 mt-3 mb-3 text-dark font-weight-bold">
                                        Rating by category
                                    </p>
                                    <div className="d-flex">
                                        <div>
                                            <div className="text-dark font-weight-bold mb-2 mr-2">
                                                4.3
                                            </div>
                                        </div>
                                        <div className="mr-2">
                                            <i className="fa fa-star text-warning"></i>
                                        </div>
                                        <div>
                                            <p>Work/Management</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div>
                                            <div className="text-dark font-weight-bold mb-2 mr-2">
                                                3.5
                                            </div>
                                        </div>
                                        <div className="mr-2">
                                            <i className="fa fa-star text-warning"></i>
                                        </div>
                                        <div>
                                            <p>Salary/Culture</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { profile: state.profile, auth: state.auth };
};

export default connect(mapStateToProps, { getBusinessProfileById })(
    BusinessDetail
);