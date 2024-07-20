import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
                    Copyright © creatorship.io 2024
                </span>
                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                    {' '}
                    By{' '}
                    <a href="https://www.findbidyut.in/" target="_blank">
                        Bidyut Deka
                    </a>{' '}
                    from findbidyut.in
                </span>
            </div>
            <span className="text-muted d-block text-center text-sm-left d-sm-inline-block mt-2">
                Developed By:{' '}
                <a href="https://www.themewagon.com/" target="_blank">
                    Bidyut R. Deka
                </a>
            </span>
        </footer>
    );
};

export default Footer;
