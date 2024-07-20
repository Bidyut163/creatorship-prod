import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { registerCreator } from '../../../../actions/auth';

const Register = ({ auth: { isAuthenticated, userType }, registerCreator }) => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        creatorType: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const { fullname, email, password, creatorType } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();

        setFormErrors(validate(formData));

        registerCreator({ fullname, email, password, creatorType });
    };

    const validate = (values) => {
        const errors = {};
        const email_regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

        if (!values.fullname) {
            errors.fullname = 'Fullname is required';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!email_regex.test(values.email)) {
            errors.email = 'Please enter a valid Email';
        }
        if (!values.password) {
            errors.password = 'password is required';
        }
        // } else if (values.password.length < 6) {
        //     errors.password = 'password needs to be atleast 6 characters long';
        // }

        if (!values.creatorType) {
            errors.creatorType = 'Select Content Type';
        }

        return errors;
    };

    if (isAuthenticated) {
        return <Redirect to="/admin/dashboard" />;
    }

    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth px-0">
                    <div className="row w-100 mx-0">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                <div className="brand-logo">
                                    <img
                                        src={
                                            require('../../../../assets/admin/images/logo-dark.svg')
                                                .default
                                        }
                                        alt="logo"
                                    />
                                </div>
                                <h4>New here?</h4>
                                <h6 className="font-weight-light">
                                    Signing up is easy. It only takes a few
                                    steps
                                </h6>
                                <form
                                    className="pt-3"
                                    onSubmit={(e) => onSubmit(e)}
                                >
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            id="exampleInputUsername1"
                                            placeholder="Full name"
                                            name="fullname"
                                            value={fullname}
                                            onChange={(e) => onChange(e)}
                                        />
                                        {formErrors.fullname ? (
                                            <p className="invalid-feedback d-block">
                                                {formErrors.fullname}
                                            </p>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            id="exampleInputEmail1"
                                            placeholder="Email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => onChange(e)}
                                        />
                                        {formErrors.email ? (
                                            <p className="invalid-feedback d-block">
                                                {formErrors.email}
                                            </p>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <select
                                            className="form-control form-control-lg"
                                            id="exampleFormControlSelect2"
                                            name="creatorType"
                                            value={creatorType}
                                            onChange={(e) => onChange(e)}
                                        >
                                            <option
                                                value=""
                                                selected
                                                disabled
                                                hidden
                                            >
                                                Content Type
                                            </option>
                                            <option value="Youtuber">
                                                Youtuber
                                            </option>
                                            <option value="Soical Media Influencer">
                                                Soical Media Influencer
                                            </option>
                                            <option value="Website content writer">
                                                Website content writer
                                            </option>
                                            <option value="Blogger">
                                                Blogger
                                            </option>
                                            <option value="Video Creators">
                                                Video Creators
                                            </option>
                                            <option value="Photographer">
                                                Photographer
                                            </option>
                                        </select>
                                        {formErrors.creatorType ? (
                                            <p className="invalid-feedback d-block">
                                                {formErrors.creatorType}
                                            </p>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            id="exampleInputPassword1"
                                            placeholder="Password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => onChange(e)}
                                        />
                                        {formErrors.password ? (
                                            <p className="invalid-feedback d-block">
                                                {formErrors.password}
                                            </p>
                                        ) : null}
                                    </div>
                                    <div className="mb-4">
                                        {/* <div className="form-check">
                                            <label className="form-check-label text-muted">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                                I agree to all Terms &
                                                Conditions
                                            </label>
                                        </div> */}
                                    </div>
                                    <div className="mt-3">
                                        <button
                                            className="btn btn-block btn-info btn-lg font-weight-medium auth-form-btn"
                                            type="submit"
                                        >
                                            SIGN UP
                                        </button>
                                    </div>
                                    <div className="text-center mt-4 font-weight-light">
                                        Already have an account?{' '}
                                        <Link
                                            to="/creator/login"
                                            className="text-primary"
                                        >
                                            Login
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, { registerCreator })(Register);
