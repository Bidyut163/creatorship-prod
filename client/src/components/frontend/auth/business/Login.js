import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginBusiness } from '../../../../actions/auth';

const Login = ({ auth: { isAuthenticated, userType }, loginBusiness }) => {
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

        loginBusiness(email, password);
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
        <div class="container-scroller">
            <div class="container-fluid page-body-wrapper full-page-wrapper">
                <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
                    <div class="row flex-grow">
                        <div class="col-lg-6 d-flex align-items-center justify-content-center">
                            <div class="auth-form-transparent text-left p-3">
                                <div class="brand-logo">
                                    <img
                                        src={
                                            require('../../../../assets/admin/images/logo-dark.svg')
                                                .default
                                        }
                                        alt="logo"
                                    />
                                </div>
                                <h4>Welcome back!</h4>
                                <h6 class="font-weight-light">
                                    Happy to see you again!
                                </h6>
                                <form
                                    class="pt-3"
                                    onSubmit={(e) => onSubmit(e)}
                                >
                                    <div class="form-group">
                                        <label for="exampleInputEmail">
                                            Email
                                        </label>
                                        <div class="input-group">
                                            <div class="input-group-prepend bg-transparent">
                                                <span class="input-group-text bg-transparent border-right-0">
                                                    <i class="mdi mdi-account-outline text-primary"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                class="form-control form-control-lg border-left-0"
                                                id="exampleInputEmail"
                                                placeholder="Business Email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => onChange(e)}
                                            />
                                        </div>
                                        {formErrors.email ? (
                                            <p className="invalid-feedback d-block">
                                                {formErrors.email}
                                            </p>
                                        ) : null}
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword">
                                            Password
                                        </label>
                                        <div class="input-group">
                                            <div class="input-group-prepend bg-transparent">
                                                <span class="input-group-text bg-transparent border-right-0">
                                                    <i class="mdi mdi-lock-outline text-primary"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="password"
                                                class="form-control form-control-lg border-left-0"
                                                id="exampleInputPassword"
                                                placeholder="Password"
                                                name="password"
                                                value={password}
                                                onChange={(e) => onChange(e)}
                                            />
                                        </div>
                                        {formErrors.password ? (
                                            <p className="invalid-feedback d-block">
                                                {formErrors.password}
                                            </p>
                                        ) : null}
                                    </div>
                                    <div class="my-2 d-flex justify-content-between align-items-center">
                                        {/* <div class="form-check">
                                            <label class="form-check-label text-muted">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                />
                                                Keep me signed in
                                            </label>
                                        </div>
                                        <a
                                            href="#"
                                            class="auth-link text-black"
                                        >
                                            Forgot password?
                                        </a> */}
                                    </div>
                                    <div class="my-3">
                                        <button
                                            class="btn btn-block btn-info btn-lg font-weight-medium auth-form-btn"
                                            type="submit"
                                        >
                                            LOGIN
                                        </button>
                                    </div>
                                    {/* <div class="mb-2 d-flex">
                                        <button
                                            type="button"
                                            class="btn btn-facebook auth-form-btn flex-grow mr-1"
                                        >
                                            <i class="mdi mdi-facebook mr-2"></i>
                                            Facebook
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-google auth-form-btn flex-grow ml-1"
                                        >
                                            <i class="mdi mdi-google mr-2"></i>
                                            Google
                                        </button>
                                    </div> */}
                                    <div class="text-center mt-4 font-weight-light">
                                        Don't have an account?{' '}
                                        <Link
                                            to="/business/signup"
                                            class="text-primary"
                                        >
                                            Create
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6 login-half-bg d-flex flex-row">
                            <p class="text-white font-weight-medium text-center flex-grow align-self-end">
                                Copyright &copy; 2020 All rights reserved.
                            </p>
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

export default connect(mapStateToProps, { loginBusiness })(Login);
