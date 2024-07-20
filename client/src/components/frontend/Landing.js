import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/Landing';

const Landing = () => {
    return (
        <Wrapper>
            <header className="header">
                <div className="header__text-box">
                    <div className="heading-primary u-margin-bottom-small">
                        <h1 className="heading-primary--main">Creatorship</h1>
                        <span className="heading-primary--sub">
                            connect businesses and creators
                        </span>
                    </div>

                    <Link
                        to="/business/signup"
                        className="btn btn--transparent u-margin-right-small"
                    >
                        Business
                    </Link>
                    <Link to="/creator/signup" className="btn btn--white">
                        Creator
                    </Link>
                </div>
            </header>
        </Wrapper>
    );
};

export default Landing;
