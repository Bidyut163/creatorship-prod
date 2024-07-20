import styled from 'styled-components';

const Wrapper = styled.aside`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        box-sizing: border-box;
        padding: 3rem;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        line-height: 1.7;
        color: #fff;
    }

    .heading-primary {
        color: rgba(255, 255, 255, 0.8);
    }
    .heading-primary--main {
        text-transform: uppercase;
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    .heading-primary--sub {
        font-size: 1.2rem;
        text-transform: capitalize;
        display: inline-block;
        font-weight: 100;
        text-align: center;
    }

    .paragraph {
        font-size: 1.2rem;
        color: #999;
    }

    .u-margin-bottom-small {
        margin-bottom: 1.5rem !important;
    }

    .u-margin-right-small {
        margin-right: 1rem !important;
    }

    .btn,
    .btn:link,
    .btn:visited {
        font-size: 1.4rem;
        text-transform: uppercase;
        display: inline-block;
        text-decoration: none;
        padding: 0.8rem 1.2rem;
        border: 1px solid #fff;

        text-align: center;
    }

    .btn--transparent {
        background-color: transparent;
        color: #fff;
    }

    .btn--transparent:hover {
        background-color: #fff;
        color: #28b485;
    }

    .btn--white {
        background-color: #fff;
        color: #28b485;
    }

    .btn--white:hover {
        background-color: transparent;
        color: #fff;
    }

    .header {
        /* padding: 5rem 15rem; */
        height: 100vh;
        background-image: linear-gradient(
                to right bottom,
                rgba(126, 213, 111, 0.8),
                rgba(40, 180, 133, 0.8)
            ),
            url('https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    }

    .header__text-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
`;

export default Wrapper;
