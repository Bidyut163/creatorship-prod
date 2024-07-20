import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginCreator } from '../../../../actions/auth';

const Login = ({ auth: { isAuthenticated, userType }, loginCreator }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setFormErrors(validate(formData));

        loginCreator(email, password);
    };

    const validate = (values) => {
        const errors = {};
        const email_regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!email_regex.test(values.email)) {
            errors.email = 'Please enter a valid Email';
        }
        if (!values.password) {
            errors.password = 'password is required';
        }

        return errors;
    };

    // Redirect if Logged in
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
                                <h4>Hello! let's get started</h4>
                                <h6 className="font-weight-light">
                                    Sign in to continue.
                                </h6>
                                <form
                                    className="pt-3"
                                    onSubmit={(e) => onSubmit(e)}
                                >
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
                                    <div className="mt-3">
                                        <button
                                            className="btn btn-block btn-info btn-lg font-weight-medium auth-form-btn"
                                            type="submit"
                                        >
                                            SIGN IN
                                        </button>
                                    </div>
                                    <div className="my-2 d-flex justify-content-between align-items-center">
                                        {/* <div className="form-check">
                                            <label className="form-check-label text-muted">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                                Keep me signed in
                                            </label>
                                        </div>
                                        <a
                                            href="#"
                                            className="auth-link text-black"
                                        >
                                            Forgot password?
                                        </a> */}
                                    </div>
                                    <div className="mb-2">
                                        {/* <button
                                            type="button"
                                            className="btn btn-block btn-facebook auth-form-btn"
                                        >
                                            <i className="mdi mdi-facebook mr-2"></i>{' '}
                                            Connect using facebook
                                        </button> */}
                                    </div>
                                    <div className="text-center mt-4 font-weight-light">
                                        Don't have an account?{' '}
                                        <Link
                                            to="/creator/signup"
                                            className="text-primary"
                                        >
                                            Create
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

export default connect(mapStateToProps, { loginCreator })(Login);
