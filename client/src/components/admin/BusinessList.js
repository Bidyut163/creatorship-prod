import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBusinesses } from '../../actions/business';
import Spinner from '../../layouts/common/spinner/Spinner';
import BusinessItem from './BusinessItem';

const BusinessList = ({ getBusinesses, business: { businesses, loading } }) => {
    useEffect(() => {
        getBusinesses();
    }, []);

    if (loading) return <Spinner />;

    return (
        <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">List of Businesses</h4>
                    <p class="card-description">
                        click on details <code>for more information</code>
                    </p>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Organization name</th>
                                    {/* <th>Profile completion</th> */}
                                    <th>Industry</th>
                                    <th>View details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {businesses.map((business) => (
                                    <BusinessItem
                                        key={business.id}
                                        business={business}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { business: state.business };
};

export default connect(mapStateToProps, { getBusinesses })(BusinessList);
