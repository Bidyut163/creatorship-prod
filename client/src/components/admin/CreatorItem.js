import React from 'react';
import { Link } from 'react-router-dom';

const CreatorItem = ({ creator: { fullname, _id, creatorType } }) => {
    return (
        <tr>
            <td class="py-1">
                <img
                    src={require('../../assets/admin/images/faces/roundFace.png')}
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
            <td>{creatorType}</td>
            <td>
                <Link
                    to={`/admin/creators/${_id}`}
                    style={{ fontSize: '.8rem', padding: '.2rem' }}
                    className="btn btn-sm btn-inverse-info"
                >
                    Details
                </Link>
            </td>
        </tr>
    );
};

export default CreatorItem;
