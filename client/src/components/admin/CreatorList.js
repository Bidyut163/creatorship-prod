import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCreators } from '../../actions/creator';
import Spinner from '../../layouts/common/spinner/Spinner';
import CreatorItem from './CreatorItem';

const CreatorList = ({ getCreators, creator: { creators, loading } }) => {
    useEffect(() => {
        getCreators();
    }, []);

    if (loading) return <Spinner />;

    return (
        <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">List of Creators</h4>
                    <p class="card-description">
                        click on details <code>for more information</code>
                    </p>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Creator name</th>
                                    {/* <th>Progress</th> */}
                                    <th>Content type</th>
                                    <th>View details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {creators.map((creator) => (
                                    <CreatorItem
                                        key={creator.id}
                                        creator={creator}
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
    return { creator: state.creator };
};

export default connect(mapStateToProps, { getCreators })(CreatorList);
