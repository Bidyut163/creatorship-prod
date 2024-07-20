import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { registerBusiness } from '../../../../actions/auth';

const Register = ({
    auth: { isAuthenticated, userType },
    registerBusiness,
}) => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        industry: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const { fullname, email, password, industry } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();

        setFormErrors(validate(formData));

        registerBusiness({ fullname, email, password, industry });
    };

    const validate = (values) => {
        const errors = {};
        const email_regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

        if (!values.fullname) {
            errors.fullname = 'Organization name is required';
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

        if (!values.industry) {
            errors.industry = 'Select an Industry';
        }

        return errors;
    };

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
                                <h4>New here?</h4>
                                <h6 class="font-weight-light">
                                    Join us today! It takes only few steps
                                </h6>
                                <form
                                    class="pt-3"
                                    onSubmit={(e) => onSubmit(e)}
                                >
                                    <div class="form-group">
                                        <label>Username</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend bg-transparent">
                                                <span class="input-group-text bg-transparent border-right-0">
                                                    <i class="mdi mdi-account-outline text-primary"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                class="form-control form-control-lg border-left-0"
                                                placeholder="Organization Name"
                                                name="fullname"
                                                value={fullname}
                                                onChange={(e) => onChange(e)}
                                            />
                                        </div>
                                        {formErrors.fullname ? (
                                            <p className="invalid-feedback d-block">
                                                {formErrors.fullname}
                                            </p>
                                        ) : null}
                                    </div>
                                    <div class="form-group">
                                        <label>Email</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend bg-transparent">
                                                <span class="input-group-text bg-transparent border-right-0">
                                                    <i class="mdi mdi-email-outline text-primary"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="email"
                                                class="form-control form-control-lg border-left-0"
                                                placeholder="Email"
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
                                        <label>Industry</label>
                                        <select
                                            class="form-control form-control-lg"
                                            id="exampleFormControlSelect2"
                                            name="industry"
                                            value={industry}
                                            onChange={(e) => onChange(e)}
                                        >
                                            <option
                                                value=""
                                                selected
                                                disabled
                                                hidden
                                            >
                                                Industry
                                            </option>
                                            <option value="Information Techonlogy">
                                                Information Techonlogy
                                            </option>
                                            <option value="Healthcare">
                                                Healthcare
                                            </option>
                                            <option value="Agriculture">
                                                Agriculture
                                            </option>
                                            <option value="Manufacturing">
                                                Manufacturing
                                            </option>
                                            <option value="Construction">
                                                Construction
                                            </option>
                                            <option value="Education">
                                                Education
                                            </option>
                                            <option value="Entertainment">
                                                Entertainment
                                            </option>
                                        </select>
                                        {formErrors.industry ? (
                                            <p className="invalid-feedback d-block">
                                                {formErrors.industry}
                                            </p>
                                        ) : null}
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
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
                                    {/* <div class="mb-4">
                                        <div class="form-check">
                                            <label class="form-check-label text-muted">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                />
                                                I agree to all Terms &
                                                Conditions
                                            </label>
                                        </div>
                                    </div> */}
                                    <div class="mt-3">
                                        <button
                                            class="btn btn-block btn-info btn-lg font-weight-medium auth-form-btn"
                                            type="submit"
                                        >
                                            SIGN UP
                                        </button>
                                    </div>
                                    <div class="text-center mt-4 font-weight-light">
                                        Already have an account?{' '}
                                        <Link
                                            to="/business/login"
                                            class="text-primary"
                                        >
                                            Login
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6 register-half-bg d-flex flex-row">
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

export default connect(mapStateToProps, { registerBusiness })(Register);
