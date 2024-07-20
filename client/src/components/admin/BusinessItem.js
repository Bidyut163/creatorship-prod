import React from 'react';
import { Link } from 'react-router-dom';

const BusinessItem = ({ business: { fullname, _id, industry } }) => {
    return (
        <tr>
            <td class="py-1">
                <img
                    src={require('../../assets/admin/images/faces/business.png')}
                    alt="image"
                />
            </td>
            <td>{fullname}</td>
            {/* <td>
                <div class="progress">
                    <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: '25%' }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
            </td> */}
            <td>{industry}</td>
            <td>
                <Link
                    style={{ fontSize: '.8rem', padding: '.2rem' }}
                    className="btn btn-sm btn-inverse-info"
                    to={`/admin/businesses/${_id}`}
                >
                    Details
                </Link>
            </td>
        </tr>
    );
};

export default BusinessItem;
