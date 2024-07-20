import React, { Fragment } from 'react';
import spinner from './spinner.gif';
const Spinner = () => {
    return (
        <Fragment>
            <img
                src={spinner}
                style={{
                    width: '20vw',
                    margin: 'auto',
                    display: 'block',
                    position: 'center',
                }}
                alt="Loading..."
            />
        </Fragment>
    );
};

export default Spinner;
